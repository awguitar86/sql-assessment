SELECT vehicles.id, make, model, year, owner_id, name
FROM vehicles
JOIN users ON vehicles.owner_id = users.id
WHERE year >= 2000
ORDER BY year DESC
;