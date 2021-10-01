UPDATE users 
SET full_name = $2,
profile_pic = $3, 
city = $4, 
state = $5
WHERE id = $1;
