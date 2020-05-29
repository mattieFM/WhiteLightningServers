const Discord = require("discord.js");
const Config = require("./Config.json");

module.exports.run = async(bot, message, args) => {
    if(message.author.id !== Config.ownerID) return;
    else message.channel.send(message.author.id)
}

module.exports.help = {
    name: "authorid"
}