with source as (
    select * from {{ source('nibble_raw', 'dishes') }}
)
select
    cast(dish_id as string)     as dish_id,
    cast(stall_id as string)    as stall_id,
    name                        as dish_name,
    price,
    coalesce(is_top, false)     as is_top
from source
