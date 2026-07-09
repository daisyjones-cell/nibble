-- Powers the admin dashboard leaderboards (top rated, most visited).
select
    stall_id,
    stall_name,
    category,
    avg_rating,
    review_count,
    visit_count,
    rank() over (order by avg_rating desc nulls last)  as rating_rank,
    rank() over (order by visit_count desc)            as visit_rank
from {{ ref('dim_stalls') }}
where is_active
