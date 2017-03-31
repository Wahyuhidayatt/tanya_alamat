const monggo = require('mongoose');
const Schema = monggo.Schema;
//var ObjectId = Schema.ObjectId;
//const db = monggo.connect('mongodb://localhost/tanya_alamat');

let userTelegramSchema = new Schema({
  username: String,
  id: String,
  first_name: String,
  last_name: String,
  chatlist:[{type:Schema.Types.ObjectId, ref:'Chat'}]
})

let UserTelegram = monggo.model('UserTelegram',userTelegramSchema)

module.exports = UserTelegram;
