-- drop all tables
DROP TABLE IF EXISTS "users", "chat", "messages", "offered_service", "needed_service";

CREATE TABLE "users" (
  id SERIAL PRIMARY KEY,
  full_name varchar(255) default NULL,
  email varchar(255) default NULL,
  password TEXT default NULL,
  city varchar(255),
  flexible_trade boolean default NULL,
  offered_service_id_1 integer NULL,
  offered_service_id_2 integer NULL,
  offered_service_id_3 integer NULL,
  offered_service_id_4 integer NULL,
  needed_service_id_1 integer NULL,
  needed_service_id_2 integer NULL,
  needed_service_id_3 integer NULL,
  needed_service_id_4 integer NULL
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
  service_category TEXT default NULL,
  service_define TEXT default NULL,
  service_image TEXT default NULL
);

CREATE TABLE "needed_service" (
  id SERIAL PRIMARY KEY,
  service_category TEXT default NULL,
  service_define TEXT default NULL,
  service_image TEXT default NULL
);

ALTER TABLE users ADD FOREIGN KEY (offered_service_id_1) REFERENCES offered_service(id);
ALTER TABLE users ADD FOREIGN KEY (offered_service_id_2) REFERENCES offered_service(id);
ALTER TABLE users ADD FOREIGN KEY (offered_service_id_3) REFERENCES offered_service(id);
ALTER TABLE users ADD FOREIGN KEY (offered_service_id_4) REFERENCES offered_service(id);
ALTER TABLE users ADD FOREIGN KEY (needed_service_id_1) REFERENCES needed_service(id);
ALTER TABLE users ADD FOREIGN KEY (needed_service_id_2) REFERENCES needed_service(id);
ALTER TABLE users ADD FOREIGN KEY (needed_service_id_3) REFERENCES needed_service(id);
ALTER TABLE users ADD FOREIGN KEY (needed_service_id_4) REFERENCES needed_service(id);

ALTER TABLE chat ADD FOREIGN KEY (user_id_1) REFERENCES users(id);
ALTER TABLE chat ADD FOREIGN KEY (user_id_2) REFERENCES users(id);

ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE messages ADD FOREIGN KEY (chat_id) REFERENCES chat(id);



INSERT INTO offered_service (service_category,service_define, service_image)
VALUES
   ('Auto','mus. Proin vel arcu', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Yard','et malesuada', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','ipsum dolor sit amet, consectetuer', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','Duis ac', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','congue a, aliquet vel, vulputate', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','mus. Proin vel arcu', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Yard','et malesuada', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','ipsum dolor sit amet, consectetuer', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','Duis ac', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','congue a, aliquet vel, vulputate', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','mus. Proin vel arcu', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Yard','et malesuada', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','ipsum dolor sit amet, consectetuer', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','Duis ac', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','congue a, aliquet vel, vulputate', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','mus. Proin vel arcu', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Yard','et malesuada', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','ipsum dolor sit amet, consectetuer', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','Duis ac', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','congue a, aliquet vel, vulputate', 'https://www.freeimages.com/photo/tractor-3-1386656');


INSERT INTO needed_service (service_category,service_define, service_image)
VALUES
  ('Auto','mus. Proin vel arcu', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Yard','et malesuada', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','ipsum dolor sit amet, consectetuer', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','Duis ac', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','congue a, aliquet vel, vulputate', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','mus. Proin vel arcu', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Yard','et malesuada', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','ipsum dolor sit amet, consectetuer', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','Duis ac', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','congue a, aliquet vel, vulputate', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','mus. Proin vel arcu', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Yard','et malesuada', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','ipsum dolor sit amet, consectetuer', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','Duis ac', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','congue a, aliquet vel, vulputate', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','mus. Proin vel arcu', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Yard','et malesuada', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','ipsum dolor sit amet, consectetuer', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','Duis ac', 'https://www.freeimages.com/photo/tractor-3-1386656'),
  ('Auto','congue a, aliquet vel, vulputate', 'https://www.freeimages.com/photo/tractor-3-1386656');

INSERT INTO users (full_name,email,password,city,flexible_trade,offered_service_id_1,offered_service_id_2,offered_service_id_3,offered_service_id_4,needed_service_id_1,needed_service_id_2,needed_service_id_3,needed_service_id_4)
VALUES
  ('Hu Moreno','malesuada.id@disparturient.net','imperdiet','Dallas',true,1,2,3,4,1,2,3,4),
  ('Bree Collins','metus.eu@acurnaut.ca','posuere','New Haven',true,5,6,7,8,5,6,7,8),
  ('Kathleen Johnston','varius.et@arcu.co.uk','imperdiet','Olathe',true,9,10,11,12,9,10,11,12),
  ('Dahlia Best','montes.nascetur@gravidasagittisduis.ca','dolor','Wyoming',true,13,14,15,16,13,14,15,16);


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