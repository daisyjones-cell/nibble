select
    v.stall_id,
    s.stall_name,
    v.user_id,
    v.visit_date,
    extract(isoweek from v.visit_date) as iso_week,
    format_date('%A', v.visit_date)    as weekday
from {{ ref('stg_visits') }} v
left join {{ ref('stg_stalls') }} s using (stall_id)
