"use strict";
const Discord = require('discord.js');
const fs = require("fs");
const WhiteList = ("5971", "3464", "1974", "9915");
const Config = require(".\\config_auth\\Config.json");
var generalmillz= "generalmillz"
const WelconeChannel = "general"
const ChildShellBase = require("./components/ChildProccessCreate").ChildShell
const ChildShell = new ChildShell();
const Token = Config.Token
const AWS = require('aws-sdk');
var RANDOM = (14)
var RANDOMNUMBER = Math.floor(Math.random() * 15) + 1;
var d = new Date();
var t= d.getTime();
var Hr = d.getHours();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate();
var Min = d.getMinutes();
var sec = d.getSeconds();
var time = month + `.` + day + "." + year +  ".txt"
var time1 =  Hr + ":" + Min + ":" + sec




var bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("could not find command.");
        return;
    } 

    jsfile.forEach((f, i) =>{
        let C = require(`./commands/${f}`);
        console.log(`${f} Ready!`);
        bot.commands.set(C.help.name, C);
    });
});




bot.on("ready", async () =>{
    console.log(`${bot.user.username} is online and is running on ${bot.guilds.size} server(s)!`);
    bot.user.setActivity("The Pup of Repair", {type: "WATCHING"});
   
});



bot.on("guildMemberAdd", async member => { 
    var guild = member.guild
    if (member.guild.id !== '684538007168090123') {
        return;
    }
if (member.guild.roles.find('name', '03 Security Clearance (Secret)')); {
member.addRole(member.guild.roles.find('name', '03 Security Clearance (Secret)'));
}
});


// module.exports.dice = function rollDice(max) {
//     return 1 + Math.floor(Math.random()*max)
//   }
  
  

bot.on("message", async message =>{

    if(message.author.bot) return;
  let prefix = Config.prefix;
  let msgArray = message.content.toLocaleLowerCase().split(" "); 
  let cmd = msgArray[0];
  let args = msgArray.slice(1);
  let cmdFile = bot.commands.get(cmd.slice(prefix.length));

  if(cmdFile) cmdFile.run(bot, message, args);

});
















//logging

    bot.on("ready", async () =>{
    fs.appendFile(time, "Bot Restarted" + "\r\n", function (err) {
        if (err) throw err;
        console.log('Log: ' + time + " Was successfully created ");
      });
      
      fs.appendFile("Simple" + time, "Bot Restarted" + "\r\n", function (err) {
        if (err) throw err;
        console.log('Log: ' + "Simple" + time + " Was successfully created ");
      });

  
      var role = bot.roles
    var logger = fs.createWriteStream(time, {
        flags: 'a' 
       });
       
    
        
       logger.write("-------------Start of Log-----------------" + "\r\n");
    logger.write("-------------" + month + `/` + day + `/` + year + "  " + Hr + ":" + Min + ":" + sec + "-----------------" + "\r\n");

    console.log( bot.users.array().length);
 var i;
 for (i = 0; i < bot.users.array().length; i++) {
           var User = bot.users.array()[i];         
      
           logger.write("Username: \"" + User.username + "\" UserId: \"" + User.id + "\","+  "\r\n") 
           if(User.role)
           logger.write("Role: \"" + User.role + "\" RoleID: \"" + User.role.id + "\"," +  "\r\n") 
           
        }
    
        
        logger.write("-------------Guilds-----------------" + "\r\n" );
        for (i = 0; i < bot.guilds.array().length; i++) {
            var guild = bot.guilds.array()[i]
           
            logger.write("Guild Name: " + guild.name + " Guild Id: " + guild.id + "\r\n")
            
          
               
           
            };
            
            for (i = 0; i < bot.guilds.array().length; i++) {
                let guild = bot.guilds.array()[i]
            var Channels = guild.channels.map(g => g.name).join("\r\n")
            

            
                logger.write("\r\n"+"----------------"+ guild + " Channels--------------" + "\r\n" + Channels)
               
                
            }
            for (i = 0; i < bot.guilds.array().length; i++) {
                let guild = bot.guilds.array()[i]
                console.log(guild.name)
     
                
            }
            logger.write("\r\n"+"-------------End of Members & Guilds-----------------" + "\r\n" + "\r\n");
            

            logger.write("-------------Start of Chat Log-----------------------" + "\r\n");
            logger.end() // close string



        }
    );
   

bot.on("message", async message =>{
  
    var Writing = fs.createWriteStream(time, {
        flags: 'a'
       });
      
       if(message.channel.type !== "dm") {
    Writing.write("<" + message.author.username + " > " + ":  " + message.content + "\r\n" +"Message Details: AuthorId: " + message.author.id + " AuthorTag: " + message.author.tag + " Channel: " + message.channel.name + " Server: " + message. guild.name + " Date:" +  month + `/` + day + `/` + year + "\r\n"); 
    console.log("<" + message.author.username + " > " + ":  " + message.content + "\r\n" +"Message Details: AuthorId: " + message.author.id + " AuthorTag: " + message.author.tag + " Channel: " + message.channel.name + " Server: " + message. guild.name + " Date:" +  month + `/` + day + `/` + year + "\r\n");
      
};

    if(message.channel.type === "dm") {
        Writing.write("<" + message.author.username + " > " + ":  " + message.content + "\r\n" +"Message Details: AuthorId: " + message.author.id + " AuthorTag: " + message.author.tag + " Channel: " + "DM " + " Server: DM" + " Date:" +  month + `/` + day + `/` + year + "\r\n");
        console.log("<" + message.author.username + " > " + ":  " + message.content + "\r\n" +"Message Details: AuthorId: " + message.author.id + " AuthorTag: " + message.author.tag + " Channel: " + "DM " + " Server: DM" + " Date:" +  month + `/` + day + `/` + year + "\r\n");
    };

        Writing.end() // close string

        var Writing2 = fs.createWriteStream("Simple" + time, {
            flags: 'a'
           });
          
           if(message.channel.type !== "dm") {
        Writing2.write( "<" + message.guild.name + ", " + message.author.username + " > " + ":  " + message.content + "\r\n"); 
        console.log("<" + message.author.username + " > " + ":  " + message.content + "\r\n");
          
    };
    
        if(message.channel.type === "dm") {
            Writing2.write("<" + "Message = DM, " + message.author.username + " > " + ":  " + message.content + "\r\n");
            console.log("<" + "Message = DM, " + message.author.username + " > " + ":  " + message.content + "\r\n");
        };
    
        
        
        Writing2.end() // close string
});

// Create a message collector 




bot.login(Token);
