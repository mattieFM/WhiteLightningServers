exports.init = class init{
Discord = require('discord.js');
fs = require("fs");
BotOnMethods = require("./BotOnMethods").BotOnMethods;
    constructor(){

    }

    Init(){
        var bot = this.BotInit();
        MainBotInit(bot);
        this.AWSInit();
    }

    BotInit(){
        var bot = new Discord.Client({disableEveryone: true});
        bot.commands = new Discord.Collection();
        return bot;
    }
    
    MainBotInit(bot){
        var botMethods = new this.BotOnMethods();
        botMethods.BotOnReady(bot);
    }


    AWSInit(){
        AWS.config.loadFromPath(Config.path +'\\config_auth\\awsconfig.json');
    }

    CommandsInit(){
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
    }

}