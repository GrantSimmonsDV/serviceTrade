UPDATE users 
SET full_name = $2,
profile_pic = $3, 
city = $4, 
state = $5
WHERE id = $1;



-- UPDATE users 
-- SET full_name = $13, 
-- city = $2, 
-- state = $3,
-- flexible_trade = $4,
-- offered_service_id_1 = $5, 
-- offered_service_id_2 = $6, 
-- offered_service_id_3 = $7, 
-- offered_service_id_4 = $8, 
-- needed_service_id_1 = $9, 
-- needed_service_id_2 = $10, 
-- needed_service_id_3 = $11, 
-- needed_service_id_4 = $12
-- WHERE id = $1;