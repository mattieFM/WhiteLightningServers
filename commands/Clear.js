const Discord = require("discord.js");
const Config = require("./Config.json");
var fs = require('fs')

module.exports.run = async(bot, message, args) => {
  if(message.author.id !== Config.ownerID) return;
  fs.writeFile(time, "LogCleared" + "\r\n", function() {console.log('done')})

  }
  
  module.exports.help = {
    name: "clearlog"
  }