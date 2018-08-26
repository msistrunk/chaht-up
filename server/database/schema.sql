\c chaht;

-- USERS

DROP TABLE IF EXISTS users cascade;
    
CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username VARCHAR (20) UNIQUE NOT NULL,
  password VARCHAR (25) NOT NULL
);

-- MESSAGES

DROP TABLE IF EXISTS messages cascade;
    
CREATE TABLE messages (
  message_id serial PRIMARY KEY,
  message_text VARCHAR (255),
  created_on TIMESTAMP NOT NULL,
  user_id INTEGER REFERENCES users(user_id)
);


-- Dummy data

INSERT INTO users (user_id, username, password) VALUES
(1, 'jpangelle', 'test123'),
(2, 'mitchsistrunk', 'test1234'),
(3, 'andrewdibble', 'test12345');
(4, 'juanvillegas', 'test123456');

INSERT INTO messages (message_id, message_text, created_on, user_id) VALUES
(1, 'yo!', '2004-10-19 10:23:54', 1),
(2, 'hey!', '2004-10-19 10:23:54', 1),
(3, 'hi!', '2004-10-19 10:23:54', 1);
(4, 'sup!', '2004-10-19 10:23:54', 1);