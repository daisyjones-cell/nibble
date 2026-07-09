select
    r.review_id,
    r.stall_id,
    s.stall_name,
    r.user_id,
    r.rating,
    r.dish,
    r.review_text,
    r.created_at,
    r.is_hidden
from {{ ref('stg_reviews') }} r
left join {{ ref('stg_stalls') }} s using (stall_id)
