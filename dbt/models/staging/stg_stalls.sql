-- The canonical stall catalogue. Sourced from the dbt seed (nibble_stalls.csv),
-- which is generated from the White Cross Street Market spreadsheet.
with source as (
    select * from {{ ref('nibble_stalls') }}
)
select
    stall_id,
    name                                as stall_name,
    category,
    food_type,
    image_url,
    coalesce(is_active, true)           as is_active
from source
