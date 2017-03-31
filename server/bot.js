
const TelegramBot = require('node-telegram-bot-api')
const Chat = require('./controllers/chatController')
const telegramControler = require('./controllers/telegramController')
//gmapstoken=AIzaSyCwgDl63uYEy9duKiPStLzzuwNpB0M93Gg
const token = '335565888:AAFY41fkpRDvv_XzFTbd8S73sxZV20f_oz0';
const bot = new TelegramBot(token,{ polling: true });
var gmaps = require('@google/maps').createClient({
  key: 'AIzaSyCwgDl63uYEy9duKiPStLzzuwNpB0M93Gg'
});

bot.on('message', (msg, match) => {
  //console.log(msg.from.id);
  //console.log(msg);
  let chatId = msg.chat.id;
  //Chat.insertChat(msg.from,msg.text,msg.date);
  // gmaps.places({
  //   query:`${msg.text}`
  // },function(err,data){
  //   //console.log(data.json.results[0].geometry.location);
  //   bot.sendVenue(chatId,data.json.results[0].geometry.location.lat,
  //                 data.json.results[0].geometry.location.lng,
  //                 data.json.results[0].name,data.json.results[0].formatted_address)
  //
//    }
// )

});

bot.onText(/\/start/,(msg,match)=>{
  bot.sendMessage(msg.from.id,`selamat datang di tanya alamat, disini kamu bisa menayakan alamat tempat yang kamu mau
contoh:
/cari pondok indah mall untuk mencari alamat pondok indah mall
/dekat atm untuk mencari atm terdekat`)
})

bot.onText(/\/cari\s.+/,(msg,match)=>{
  let chatId = msg.chat.id;
  let chatText=msg.text.split(' ');
     chatText.shift();
     chatText=chatText.join(' ')
  console.log(chatText);

  Chat.insertChat(msg.from,chatText,msg.date);
  gmaps.places({
    query:`${msg.text}`
  },function(err,data){
    //console.log(data.json.results[0].geometry.location);
    bot.sendVenue(chatId,data.json.results[0].geometry.location.lat,
                  data.json.results[0].geometry.location.lng,
                  data.json.results[0].name,data.json.results[0].formatted_address)

   }
)
});

bot.onText(/\/dekat\s.+/,(msg,match)=>{
  let chatId = msg.chat.id;
  let chatText=msg.text.split(' ');
     chatText.shift();
     chatText=chatText.join(' ')
  console.log(chatText);

  Chat.insertChat(msg.from,chatText,msg.date);
  gmaps.places({
    query:`${msg.text}`
  },function(err,data){
    //console.log(data.json.results[0].geometry.location);
    bot.sendVenue(chatId,data.json.results[0].geometry.location.lat,
                  data.json.results[0].geometry.location.lng,
                  data.json.results[0].name,data.json.results[0].formatted_address)

   }
)
});

bot.onText(/\/cari/,(msg,match)=>{
  if (msg.text.split(' ').length<2) {
    bot.sendMessage(msg.from.id,`untuk menggunakan menu ini gunakan /cari<space>apa yang dicari`)
  }
})

bot.onText(/\/dekat/,(msg,match)=>{
  if (msg.text.split(' ').length<2) {
    bot.sendMessage(msg.from.id,`untuk menggunakan menu ini gunakan /dekat<space>apa yang dicari`)
  }
})

module.exports = bot
