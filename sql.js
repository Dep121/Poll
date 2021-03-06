const SELECT_ALL_USERS = 'SELECT * FROM users ORDER BY id ASC';
const SELECT_USERS_BY_ID = 'SELECT * FROM users WHERE id = $1';
const INSERT_USER = 'INSERT INTO users (name, email) VALUES ($1, $2)';
const UPDATE_USER = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';
const DELETE_USER = 'DELETE FROM users WHERE id = $1';

module.exports = {
  SELECT_ALL_USERS,
  SELECT_USERS_BY_ID,
  INSERT_USER,
  UPDATE_USER,
  DELETE_USER,
};
