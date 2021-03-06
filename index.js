const express = require("express");
const cors = require('cors');
const path = require('path');
const middlewares = require('./middlewares');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("./queries");
const app = express();
const PORT = process.env.PORT || 3001;

// environment provided by heroky
// process.env.PORT
// process.env.NODE_ENV => production or undefined

// app.use(cors({
//   origin: 'http://localhost:3000'
// }))
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.static(path.join(__dirname, "poll-fe/build")));
// app.use("/", express.static(path.join(__dirname, "poll-fe/build")));

if(process.env.NODE_ENV === "production") {
  // server static content
  // yarn build
  app.use(express.static(path.join(__dirname, "poll-fe/build")));
}

// app.get('/', (request, response) => {
//   response.json({info: 'Node.js, Express, and Postgres API'})
// })

app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(PORT, ()=>{
  console.log(`App is running on PORT ${PORT}.`)
})
