let UserTelegram = require('../models/userTelegram');

let readUserTelegram = (req, res) => {
   UserTelegram.find({}).populate("chatlist").exec((err, result) => {
     if (err) {
      res.send(err.message)
    }else {
      res.send(result)
    }
  });
}

let removeUserTelegram = (req, res) => {
  UserTelegram.findByIdAndRemove(req.params.id, (err, success) => {
    if (err) {
      res.send(err.messagee)
    }else {
      res.send(`Data User telegram with ID ${req.params.id} has been delete!`)
    }
  })
}

module.exports = {
  readUserTelegram, removeUserTelegram
}
