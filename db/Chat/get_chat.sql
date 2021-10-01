SELECT * FROM chat
WHERE user_id_1 = $1 OR 
user_id_2 = $1
