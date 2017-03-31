const express = require('express');
const app = express();
const users = require('./routes/users')
const bodyParser = require('body-parser');
let bot = require('./bot')
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
let mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/tanya_alamat');

app.use('/users',users);

app.listen(3000, () => {
  console.log("Server berjalan...");
});
