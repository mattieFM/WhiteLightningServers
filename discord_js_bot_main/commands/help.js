const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
message.channel.send(module.exports.help)
}

module.exports.help = {
    name: "help"
}