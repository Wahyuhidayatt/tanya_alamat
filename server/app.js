const express = require('express');
const app = express();
const users = require('./routes/users')
const bodyParser = require('body-parser');


// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/users',users);
app.listen(3000, () => {
  console.log("Server berjalan...");
});