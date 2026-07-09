with source as (
    select * from {{ source('nibble_raw', 'users') }}
)
select
    cast(user_id as string)     as user_id,
    full_name,
    lower(email)                as email,
    coalesce(role, 'employee')  as role
from source
