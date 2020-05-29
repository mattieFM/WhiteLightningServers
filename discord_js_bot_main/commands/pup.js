const Discord = require("discord.js");
const Config = require("../config_auth/Config.json");
var fs = require('fs');

var files = fs.readdirSync(Config.path + "\\image_commands\\sadpup")
let chosenfile = Config.path +  "\\image_commands\\sadpup/" +files[Math.floor(Math.random() * files.length)];
const rand = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg"]

module.exports.run = async(bot, message, args) => {
    
    var wolfpup = "613605118063018004";
    if(message.author.id == wolfpup){
num = 7;




  console.log(chosenfile);
message.channel.send(`You are the chosen one of the \"Sad Pup\" emotes`, {
  
    file: Config.path +  + "\\image_commands\\sadpup/" +files[Math.floor(Math.random() * files.length)]
});
}

if(message.author.id != wolfpup){
    message.channel.send("You are not the WolfPup, find him, give him the power of the SadPup emotes");
    
    }
}

module.exports.help = {
    name: "sadpup"
}