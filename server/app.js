const express = require('express');
const app = express();
const users = require('./routes/users');
const bodyParser = require('body-parser');
<<<<<<< HEAD
let bot = require('./bot')
=======
const passwordHash = require('password-hash');
const passport = require ('passport');
const Strategy = require('passport-local').Strategy;
const User = require('./models/user');



//passport local
passport.use(new Strategy(function(username, password, cb) {
  User.findOne({'username': username}, (err,data) => {
    if(err) {
      return cb(err);
    } else {
      if(data != null) {
        if (passwordHash.verify(password, data.password)) {
          return cb(null, data)
        } else {
          return cb('wrong password!')
        }
      } else {
        return cb('User not found')
      }

    }
  })
}));
app.use(passport.initialize());

>>>>>>> 850f1b69d479ef86570e7c4e325ea2cda1b7258d
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
let mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/tanya_alamat');

<<<<<<< HEAD
app.use('/users',users);

=======
app.use('/api',users);
>>>>>>> 850f1b69d479ef86570e7c4e325ea2cda1b7258d
app.listen(3000, () => {
  console.log("Server berjalan...");
});
