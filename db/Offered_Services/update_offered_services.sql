UPDATE offered_service
SET
service_category = $2, 
service_define = $3, 
service_image = $4
WHERE id = $1;
