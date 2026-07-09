-- One row per stall, enriched with live rating + review + visit rollups.
with stalls as (
    select * from {{ ref('stg_stalls') }}
),
review_stats as (
    select
        stall_id,
        count(*)                                as review_count,
        round(avg(rating), 2)                   as avg_rating
    from {{ ref('stg_reviews') }}
    where not is_hidden
    group by stall_id
),
visit_stats as (
    select stall_id, count(*) as visit_count
    from {{ ref('stg_visits') }}
    group by stall_id
)
select
    s.stall_id,
    s.stall_name,
    s.category,
    s.food_type,
    s.image_url,
    s.is_active,
    coalesce(r.review_count, 0)     as review_count,
    r.avg_rating,
    coalesce(v.visit_count, 0)      as visit_count
from stalls s
left join review_stats r using (stall_id)
left join visit_stats  v using (stall_id)
