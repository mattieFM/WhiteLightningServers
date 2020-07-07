const Discord = require("discord.js");
const Config = require("../config_auth/Config.json");

module.exports.run = async(bot, message, args) => {
    if(message.author.id != Config.ownerID) return;
    for(i = 0; i < args[1]; i++){
            message.channel.send(args[0]);
    }
}

module.exports.help = {
    name: "loop"
}