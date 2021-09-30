INSERT INTO offered_service (user_id, service_category, service_define, service_image)
VALUES ($1, $2, $3, $4);
-- RETURNING * FROM offered_service
-- WHERE user_id = $1;



