-- drop all tables
DROP TABLE IF EXISTS "users", "chat", "messages", "offered_service", "needed_service";

CREATE TABLE "users" (
  id SERIAL PRIMARY KEY,
  full_name varchar(255) default NULL,
  email varchar(255) default NULL,
  password TEXT default NULL,
  profile_pic TEXT default NULL,
  city varchar(255),
  state varchar(2),
  flexible_trade boolean default NULL
);

CREATE TABLE "chat" (
  id SERIAL PRIMARY KEY,
  user_id_1 integer NULL,
  user_id_2 integer NULL
);


CREATE TABLE "messages" (
  id SERIAL PRIMARY KEY,
  message_text TEXT default NULL,
  user_id integer NULL,
  chat_id integer NULL
);

CREATE TABLE "offered_service" (
  id SERIAL PRIMARY KEY,
  user_id integer NULL,
  service_category TEXT default NULL,
  service_define TEXT default NULL,
  service_image TEXT default NULL
);

CREATE TABLE "needed_service" (
  id SERIAL PRIMARY KEY,
  user_id integer NULL,
  service_category TEXT default NULL,
  service_define TEXT default NULL,
  service_image TEXT default NULL
);

ALTER TABLE offered_service ADD FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE needed_service ADD FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE chat ADD FOREIGN KEY (user_id_1) REFERENCES users(id);
ALTER TABLE chat ADD FOREIGN KEY (user_id_2) REFERENCES users(id);

ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE messages ADD FOREIGN KEY (chat_id) REFERENCES chat(id);


INSERT INTO users (full_name,email,password, profile_pic, city, state, flexible_trade)
VALUES
  ('Hu Moreno','malesuada.id@disparturient.net','imperdiet','https://www.freeimages.com/photo/tractor-3-1386656','Dallas', 'TX', true),
  ('Bree Collins','metus.eu@acurnaut.ca','posuere','https://www.freeimages.com/photo/tractor-3-1386656','New Haven', 'OH',true),
  ('Kathleen Johnston','varius.et@arcu.co.uk','imperdiet','https://www.freeimages.com/photo/tractor-3-1386656','Olathe', 'OR', true),
  ('Dahlia Best','montes.nascetur@gravidasagittisduis.ca','dolor','https://www.freeimages.com/photo/tractor-3-1386656','Wyoming', 'ND', true);

INSERT INTO offered_service (service_category,service_define, service_image, user_id)
VALUES
  ('Auto','mus. Proin vel arcu','https://www.freeimages.com/photo/tractor-3-1386656',1),
  ('Yard','et malesuada','https://www.freeimages.com/photo/tractor-3-1386656',2),
  ('Auto','ipsum dolor sit amet, consectetuer','https://www.freeimages.com/photo/tractor-3-1386656',3);
 
INSERT INTO needed_service (service_category,service_define, service_image, user_id)
VALUES
  ('Auto','mus. Proin vel arcu','https://www.freeimages.com/photo/tractor-3-1386656',1),
  ('Yard','et malesuada','https://www.freeimages.com/photo/tractor-3-1386656',2),
  ('Auto','ipsum dolor sit amet, consectetuer','https://www.freeimages.com/photo/tractor-3-1386656',3);


INSERT INTO chat (user_id_1,user_id_2)
VALUES
  (4,3),
  (2,3),
  (1,2);


INSERT INTO messages (message_text,user_id,chat_id)
VALUES
  ('velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat,',3,2),
  ('arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt',4,1),
  ('viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis,',2,2),
  ('vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros',4,1),
  ('in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum',2,3);




-- create all tables

-- alter tables

-- insert into tables 


-- this will add dummy data to // need data generator that spits out postgres db data 