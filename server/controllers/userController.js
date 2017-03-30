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

let updateUser = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        "username": req.body.username,
        "email": req.body.email,
        "role": req.body.role,
        "password": req.body.password,
      }
    }, (err, result) => {
      if (err) {
        res.send(err.message)
      }else {
        res.send(`Data User with ID ${req.params.id} has been updated!`)
      }
    }
  )
}

let removeUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      res.send(err.message)
    }else {
      res.send(`Data User with ID ${req.params.id} has been removed!`)
    }
  })
}

module.exports = {
  createUser, getUser, updateUser, removeUser
};
