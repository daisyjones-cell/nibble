with dishes as (
    select * from {{ ref('stg_dishes') }}
),
upvotes as (
    select dish_id, count(*) as upvote_count
    from {{ ref('stg_dish_upvotes') }}
    group by dish_id
)
select
    d.dish_id,
    d.stall_id,
    d.dish_name,
    d.price,
    d.is_top,
    coalesce(u.upvote_count, 0) as upvote_count
from dishes d
left join upvotes u using (dish_id)
