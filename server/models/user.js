const monggo = require('mongoose');
const Schema = monggo.Schema;
//const db = monggo.connect('mongodb://localhost/tanya_alamat');

let userSchema = new Schema({
  username: String,
  email: String,
  role: String,
  password: String
})

let User = monggo.model('User',userSchema)

module.exports = User;
