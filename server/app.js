const express = require('express');
const app = express();
const users = require('./routes/users');
const userTelegram = require('./routes/userTelegrams');
const bodyParser = require('body-parser');
const bot = require('./bot')

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


app.use('/api',users);
app.use('/api/userTelegram',userTelegram);

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
let mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/tanya_alamat');



app.use('/api',users);



app.listen(3000, () => {
  console.log("Server berjalan...");
});
