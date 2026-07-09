with source as (
    select * from {{ source('nibble_raw', 'dish_upvotes') }}
)
select
    cast(dish_id as string)     as dish_id,
    cast(user_id as string)     as user_id,
    cast(created_at as timestamp) as created_at
from source
