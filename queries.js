const {
  SELECT_ALL_USERS,
  SELECT_USERS_BY_ID,
  UPDATE_USER,
  INSERT_USER,
  DELETE_USER
} = require("./sql");

const Pool = require('pg').Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PORT,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // heroku addons
}

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

const getUsers = (request, response) => {
  pool.query(SELECT_ALL_USERS, (error, results) => {
    if(error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(SELECT_USERS_BY_ID, [id], (error, results) =>{
    if(error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}

const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query(INSERT_USER, [name, email], (error, results) => {
    if(error) {
      throw error;
    }
    console.log(results);
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const {name, email} = request.body;

  pool.query(UPDATE_USER, [name, email, id], (error, results) => {
    if(error) {
      throw error;
    }
    response.status(200).send(`User modified with ID: ${id}`);
  })
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(DELETE_USER, [id], (error, results) => {
    if(error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
