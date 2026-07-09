# Nibble — dbt project (BigQuery)

Builds the Nibble data into **`selina-bq-unsec-dev`**, dataset **`nibble`**.

## What's here

- **`seeds/nibble_stalls.csv`** — the 24 White Cross Street Market stalls (the canonical catalogue, from the spreadsheet). This is reference data dbt owns.
- **`models/staging/`** — one cleaned/typed view per source: `stg_stalls` (from the seed) plus `stg_reviews`, `stg_dishes`, `stg_dish_upvotes`, `stg_visits`, `stg_users` (from app-generated raw tables).
- **`models/marts/`** — the tables you actually query/report on:
  - `dim_stalls` — every stall with live `avg_rating`, `review_count`, `visit_count`.
  - `dim_dishes` — menu items with `upvote_count`.
  - `fct_reviews`, `fct_visits` — one row per review / per visit.
  - `stall_leaderboard` — ranked stalls for the admin dashboard.

> **Where does the app data come from?** `nibble_stalls` is seeded by dbt. Reviews, dishes, upvotes, visits and users are **written by the Nibble app** (the production Supabase/Postgres backend) and landed into a `nibble_raw` dataset in BigQuery by your ingestion/ELT step. Until that pipeline is connected those staging models read from empty raw tables — every model still builds, the rollups just show zero.

## One-time setup (VS Code)

1. Install the dbt BigQuery adapter into your project's virtualenv:
   ```bash
   pip install dbt-bigquery
   ```
2. Install the Google Cloud SDK, then authenticate with your own Selina login:
   ```bash
   gcloud auth application-default login
   gcloud config set project selina-bq-unsec-dev
   ```
3. Copy `profiles.example.yml` to `~/.dbt/profiles.yml` (adjust `location` if the project isn't EU).
4. Install package deps:
   ```bash
   dbt deps
   ```

## Everyday commands

```bash
dbt debug     # confirms it can reach selina-bq-unsec-dev
dbt seed      # loads nibble_stalls.csv -> nibble.nibble_stalls
dbt build     # runs all models + tests
dbt build --select stall_leaderboard+   # one model and its downstream
```

Everything lands in **`selina-bq-unsec-dev.nibble.*`** (the `generate_schema_name` macro pins the dataset to `nibble` rather than dbt's default schema-prefixing).

## Deploying

Point your dbt Cloud / Airflow / GitHub Action job at this project with the same `nibble` profile (use a service account instead of `oauth` for CI). A typical CI step is just `dbt deps && dbt build`.
