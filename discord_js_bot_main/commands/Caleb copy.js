const Discord = require("discord.js");
const Config = require("../config_auth/Config.json");
module.exports.run = async(bot, message, args) => {
    if(message.author.id === Config.ownerID){
        const ip = require('ip');

    console.log('addr: '+ip.address("public", "ipv4"));
    message.channel.send('addr: '+ip.address("public", "ipv4"));

}
}

module.exports.help = {
    name: "ippls"
}