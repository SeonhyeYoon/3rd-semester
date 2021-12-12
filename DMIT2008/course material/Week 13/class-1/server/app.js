// Commonjs   style of modules ESM import export default export
const fs = require('fs');
const express = require("express")
const { users } = require('./users')
const cors = require('cors')
const port = 4000
const app = express();

// api end   get: GET SOMETHING
// api /user gets all users
// api  /user/:id    user/1
// parameter route   domain/user/1 req.params.id
// query router    domain?name=jim&email=value  req.query.name req.query.email

// localhost:4000/user  get   /user

// middleware
app.use(cors());


app.get('/users', (req, res) => {
  console.log(users())
  res.json(users())
})

// Return data for a single user
app.get('/users/:id', (req, res)=>{
  const id = Number(req.params.id);
  const user = users().find(user=> user.id === id);
  res.json(user);
})

app.listen(port, () => {
  console.log(`User Server listeinging for your request on http://localhost:${port}`)
})

