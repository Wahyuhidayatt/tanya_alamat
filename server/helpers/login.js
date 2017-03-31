const express = require('express');
const jwt = require('jsonwebtoken');

let method = {}

  method.login = function (req, res) {
    let token = jwt.sign({username : req.user.username, role : req.user.role}, 'shshshshshs')
    res.send(token)
  }

module.exports = method;
