const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
message.channel.send("Hello Darkness, my old friend")
}

module.exports.help = {
    name: "quote"
}