const Discord = require("discord.js");
const Config = require("../config_auth/Config.json");
module.exports.run = async(bot, message, args) => {
    if(message.author.id === Config.ownerID){
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: '+add);
    message.channel.send('addr: '+add);
  })
}
}

module.exports.help = {
    name: "ippls"
}