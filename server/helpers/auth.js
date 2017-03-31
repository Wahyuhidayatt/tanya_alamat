var jwt = require('jsonwebtoken');
require('dotenv').config()

let authorization = (req, res, next) => {
  jwt.verify(req.headers.authentication, 'shshshshshs', (err, decoded) => {
    if(decoded) {
      if(decoded.role == 'admin') {
          next();
      } else {
          res.send('not admin')
      }

    } else {
      res.send('not authorized');
    }
  })
}

module.exports = authorization;
