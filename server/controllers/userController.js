let User = require('../models/user')

let createUser = (req, res) => {
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    role: req.body.role,
    password: req.body.password
  })

  newUser.save((err,data) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(data)
    }
  })
}

let getUser = (req, res) => {
  User.find({},(err,users) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(users);
    }
  })
}

module.exports = {createUser,getUser};