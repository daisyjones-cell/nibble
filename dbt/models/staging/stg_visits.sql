with source as (
    select * from {{ source('nibble_raw', 'visits') }}
)
select
    cast(stall_id as string)    as stall_id,
    cast(user_id as string)     as user_id,
    cast(visit_date as date)    as visit_date
from source
