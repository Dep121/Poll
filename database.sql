-- CREATE DATABASE pernstack;

--\c pernstack

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email)
  VALUES ('Deepak', 'deepak@example.com'), ('George', 'geroge@example.com');