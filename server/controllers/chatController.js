let Chat = require('../models/chat');
let UserTelegram = require('../models/userTelegram');

module.exports ={
  insertChat:function(user,chat,date){
    UserTelegram.findOne({
      id:user.id
    },
      function(err,userdb){
        if (userdb) {
           Chat.create({
             date:date,
             text:chat
           },function(err,chat){
             if (err) {
               console.log(err);
             } else {
               UserTelegram.findByIdAndUpdate(userdb._id,{
                 $push:{chatlist:chat._id}},
                 {safe:true,upsert:true,new:true},
               function(err,userdb){
                  if (err) {
                    console.log(err);
                  } else {
                    console.log(userdb);
                  }
               })
             }
           })
        } else {
           UserTelegram.create({
             username:user.username,
             id:user.id,
             first_name:user.first_name,
             last_name:user.last_name
           },
             function(err,userdb){
               if (err) {
                 console.log(err);
               } else {
                 Chat.create({
                   date:date,
                   text:chat
                 },function(err,chat){
                   if (err) {
                     console.log(err);
                   } else {
                     UserTelegram.findByIdAndUpdate(userdb._id,{
                       $push:{chatlist:chat._id}},
                       {safe:true,upsert:true,new:true},
                     function(err,userdb){
                        if (err) {
                          console.log(err);
                        } else {
                          console.log(userdb);
                        }
                     })
                   }
                 })

               }
             })
        }
      })
  },

}
