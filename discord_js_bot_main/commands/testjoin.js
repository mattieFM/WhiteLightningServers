const Discord = require("discord.js");
const Config = require("../config_auth/Config.json");
module.exports.run = async(bot, message, args) => {
  if(message.author.id !== Config.ownerID) return;
  bot.emit("guildMemberAdd", message.member);
}

module.exports.help = {
  name: "testjoin"
}