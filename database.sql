-- CREATE DATABASE pernstack;

--\c pernstack

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);
