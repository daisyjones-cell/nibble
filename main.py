"""
Nibble — production API service.

FastAPI on Cloud Run, sitting between the browser and BigQuery:

  reads  -> the dbt marts   (selina-bq-unsec-dev.nibble.*)
  writes -> raw event tables (selina-bq-unsec-dev.nibble_raw.*)
  photos -> GCS bucket, URL stored on the stall row
  auth   -> Identity-Aware Proxy passes the signed-in user's email in a header

Deploy:  gcloud run deploy nibble --source . --region europe-west2
Local:   uvicorn main:app --reload   (uses your gcloud application-default creds)
"""

import datetime as dt
import os
import subprocess
import uuid

import requests as http
from fastapi import FastAPI, File, Header, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from google.cloud import bigquery, storage
from pydantic import BaseModel, Field

# ---------------------------------------------------------------- config

PROJECT = os.environ.get("GCP_PROJECT", "selina-bq-unsec-dev")
DATASET = f"{PROJECT}.nibble"        # dbt-built marts (read)
RAW = f"{PROJECT}.nibble_raw"        # app events (write)
BUCKET = os.environ.get("IMAGE_BUCKET", "nibble-images")
ALLOWED_DOMAIN = os.environ.get("ALLOWED_DOMAIN", "selinafinance.co.uk")
SLACK_WEBHOOK_URL = os.environ.get("SLACK_WEBHOOK_URL", "")  # from Secret Manager

bq = bigquery.Client(project=PROJECT)
gcs = storage.Client(project=PROJECT)

app = FastAPI(title="Nibble API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

# ---------------------------------------------------------------- auth (IAP)


def current_user(iap_email: str | None) -> str:
    """IAP sends 'accounts.google.com:daisy@selinafinance.co.uk'. Defence in depth:
    IAP already blocked outsiders, but re-check the domain anyway."""
    if not iap_email:
        # Local dev without IAP — act as a dev user.
        return f"dev@{ALLOWED_DOMAIN}"
    email = iap_email.split(":")[-1].lower()
    if not email.endswith("@" + ALLOWED_DOMAIN):
        raise HTTPException(403, "Selina accounts only")
    return email


def is_admin(email: str) -> bool:
    rows = bq.query(
        f"select role from `{RAW}.users` where lower(email) = @e",
        job_config=bigquery.QueryJobConfig(
            query_parameters=[bigquery.ScalarQueryParameter("e", "STRING", email)]
        ),
    ).result()
    return any(r.role == "admin" for r in rows)


# ---------------------------------------------------------------- reads (dbt marts)


@app.get("/api/stalls")
def list_stalls():
    """Stall catalogue with live rating/review/visit rollups (dbt: dim_stalls)."""
    rows = bq.query(
        f"select * from `{DATASET}.dim_stalls` where is_active order by stall_name"
    ).result()
    return [dict(r) for r in rows]


@app.get("/api/stalls/{stall_id}/reviews")
def stall_reviews(stall_id: str):
    rows = bq.query(
        f"""select review_id, user_id, rating, dish, review_text, created_at
            from `{DATASET}.fct_reviews`
            where stall_id = @s and not is_hidden
            order by created_at desc""",
        job_config=bigquery.QueryJobConfig(
            query_parameters=[bigquery.ScalarQueryParameter("s", "STRING", stall_id)]
        ),
    ).result()
    return [dict(r) for r in rows]


@app.get("/api/leaderboard")
def leaderboard():
    rows = bq.query(
        f"select * from `{DATASET}.stall_leaderboard` order by rating_rank limit 10"
    ).result()
    return [dict(r) for r in rows]


@app.get("/api/me")
def me(x_goog_authenticated_user_email: str | None = Header(default=None)):
    email = current_user(x_goog_authenticated_user_email)
    return {"email": email, "is_admin": is_admin(email)}


# ---------------------------------------------------------------- writes (nibble_raw)


class Review(BaseModel):
    stall_id: str
    rating: int = Field(ge=1, le=5)
    dish: str | None = None
    review_text: str = ""


@app.post("/api/reviews")
def add_review(review: Review, x_goog_authenticated_user_email: str | None = Header(default=None)):
    email = current_user(x_goog_authenticated_user_email)
    errors = bq.insert_rows_json(f"{RAW}.reviews", [{
        "review_id": str(uuid.uuid4()),
        "stall_id": review.stall_id,
        "user_id": email,
        "rating": review.rating,
        "dish": review.dish,
        "review_text": review.review_text,
        "created_at": dt.datetime.now(dt.timezone.utc).isoformat(),
        "is_hidden": False,
    }])
    if errors:
        raise HTTPException(500, str(errors))
    return {"ok": True}


@app.post("/api/visits/{stall_id}")
def log_visit(stall_id: str, x_goog_authenticated_user_email: str | None = Header(default=None)):
    email = current_user(x_goog_authenticated_user_email)
    errors = bq.insert_rows_json(f"{RAW}.visits", [{
        "stall_id": stall_id,
        "user_id": email,
        "visit_date": dt.date.today().isoformat(),
    }])
    if errors:
        raise HTTPException(500, str(errors))
    return {"ok": True}


@app.post("/api/upvotes/{dish_id}")
def upvote_dish(dish_id: str, x_goog_authenticated_user_email: str | None = Header(default=None)):
    email = current_user(x_goog_authenticated_user_email)
    errors = bq.insert_rows_json(f"{RAW}.dish_upvotes", [{
        "dish_id": dish_id,
        "user_id": email,
        "created_at": dt.datetime.now(dt.timezone.utc).isoformat(),
    }])
    if errors:
        raise HTTPException(500, str(errors))
    return {"ok": True}


# ---------------------------------------------------------------- photos (GCS)


@app.post("/api/stalls/{stall_id}/photo")
def upload_photo(stall_id: str, file: UploadFile = File(...),
                 x_goog_authenticated_user_email: str | None = Header(default=None)):
    """Admin-only: store the image in GCS, keep only its URL in BigQuery."""
    email = current_user(x_goog_authenticated_user_email)
    if not is_admin(email):
        raise HTTPException(403, "Admins only")
    ext = (file.filename or "img").rsplit(".", 1)[-1].lower()
    blob = gcs.bucket(BUCKET).blob(f"stalls/{stall_id}/{uuid.uuid4()}.{ext}")
    blob.upload_from_file(file.file, content_type=file.content_type)
    url = f"https://storage.googleapis.com/{BUCKET}/{blob.name}"
    # Record the new URL as an event; dbt's stg_stalls coalesces the latest one in.
    bq.insert_rows_json(f"{RAW}.stall_photos", [{
        "stall_id": stall_id, "image_url": url, "uploaded_by": email,
        "created_at": dt.datetime.now(dt.timezone.utc).isoformat(),
    }])
    return {"url": url}


# ---------------------------------------------------------------- jobs (Cloud Scheduler)


@app.post("/jobs/refresh")
def refresh():
    """Cloud Scheduler hits this to rebuild the dbt marts (every 15 min)."""
    result = subprocess.run(
        ["dbt", "build", "--project-dir", "dbt", "--profiles-dir", "dbt"],
        capture_output=True, text=True, timeout=600,
    )
    if result.returncode != 0:
        raise HTTPException(500, result.stdout[-2000:])
    return {"ok": True}


@app.post("/jobs/slack-weekly")
def slack_weekly():
    """Monday 9am: post the stall of the week to the public Slack channel."""
    if not SLACK_WEBHOOK_URL:
        raise HTTPException(500, "SLACK_WEBHOOK_URL not configured")
    row = next(iter(bq.query(
        f"select stall_name from `{DATASET}.stall_leaderboard` order by rating_rank limit 1"
    ).result()), None)
    text = (f"Stall of the week: *{row.stall_name}* — go say hi!"
            if row else "No rated stalls yet — be the first to review one on Nibble!")
    http.post(SLACK_WEBHOOK_URL, json={"text": text}, timeout=10)
    return {"ok": True, "posted": text}


# ---------------------------------------------------------------- static app
# Serve the Nibble front-end from ./static (last, so /api/* wins).
if os.path.isdir("static"):
    app.mount("/", StaticFiles(directory="static", html=True), name="static")
