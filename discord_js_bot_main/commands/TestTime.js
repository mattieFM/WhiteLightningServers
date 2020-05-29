const Discord = require("discord.js");
var d = new Date();
var t= d.getTime();
var year = d.getFullYear()
var month = d.getMonth() + 1
var day = d.getDate()
var Hr = d.getHours()
var Min = d.getMinutes()
var sec = d.getSeconds()
if( Hr > 12) var Hr = d.getHours() - 12

module.exports.run = async(bot, message, args) => {
message.channel.send(
    month + `/` + day + `/` + year + "  " + Hr + ":" + Min + ":" + sec);
}

module.exports.help = {
    name: "time"
}