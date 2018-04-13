UPDATE vehicles
SET owner_id = NULL
WHERE id = $1
RETURNING *;