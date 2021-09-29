UPDATE users
SET
service_category = $2, 
service_define = $3, 
service_image = $4
WHERE id = $1;



-- UPDATE users
-- SET
-- offered_service_id_1 = $2, 
-- offered_service_id_2 = $3, 
-- offered_service_id_3 = $4, 
-- offered_service_id_4 = $5, 
-- WHERE id = $1;


-- UPDATE users
-- SET flexible_trade = $2,
-- offered_service_id_1 = $3, 
-- offered_service_id_2 = $4, 
-- offered_service_id_3 = $5, 
-- offered_service_id_4 = $6, 
-- needed_service_id_1 = $7, 
-- needed_service_id_2 = $8, 
-- needed_service_id_3 = $9, 
-- needed_service_id_4 = $10
-- WHERE id = $1;