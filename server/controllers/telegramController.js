let UserTelegram = require('../models/userTelegram');

module.exports={
   insertUser:function(user){
     UserTelegram.create({
       username:user.username,
       id:user.id,
       first_name:user.first_name,
       last_name:user.last_name
     },
   function(err,succ){
     if (err) {
       console.log(err);
     }else{
       console.log('insert success');
     }
   })
   }
}
