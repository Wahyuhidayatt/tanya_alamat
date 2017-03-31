const monggo = require('mongoose');
const Schema = monggo.Schema;
//const db = monggo.connect('mongodb://localhost/tanya_alamat');

let chatSchema = new Schema({
  date: Date,
  text: String,
})

let Chat = monggo.model('Chat',chatSchema)

module.exports = Chat;
