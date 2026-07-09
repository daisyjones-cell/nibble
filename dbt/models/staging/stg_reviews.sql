with source as (
    select * from {{ source('nibble_raw', 'reviews') }}
)
select
    cast(review_id as string)   as review_id,
    cast(stall_id as string)    as stall_id,
    cast(user_id as string)     as user_id,
    cast(rating as int64)       as rating,
    dish,
    review_text,
    cast(created_at as timestamp) as created_at,
    coalesce(is_hidden, false)  as is_hidden
from source
