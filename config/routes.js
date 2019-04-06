const axios = require("axios")
const bcrypt = require("bcryptjs")

const Users = require("../database/user-model")

const { authenticate, generateToken } = require("../auth/authenticate")

module.exports = server => {
  server.post("/api/register", register)
  server.post("/api/login", login)
  server.get("/api/jokes", authenticate, getJokes)
}

function register(req, res) {
  const user = req.body

  if (!user.username || !user.password) {
    res.status(400).json({
      errorMessage: "Please provide an email, and a password."
    })
  } else {
    //generate hash from user's password
    const hash = bcrypt.hashSync(user.password, 12) //2 ^ n times

    //override use.password with hash
    user.password = hash

    //Create token with user info - Login the user when registering
    const token = generateToken(user)

    // Add user to database and send back response, with token info
    Users.add(user)
      .then(userId => {
        res.status(201).json({ userId: userId, token: token })
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          errorMessage: "There was an error saving the new user to the database"
        })
      })
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: "application/json" }
  }

  axios
    .get("https://icanhazdadjoke.com/search", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results)
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err })
    })
}
