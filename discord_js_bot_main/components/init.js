exports.init = class init{
Discord = require('discord.js');

BotInstance = require("./botInstance");
BotOnMethods = require("./BotOnMethods").BotOnMethods;
LoggingInit = require("./BotMethods/logging/logginginit").loggingInit;
StartLogging = require("./BotMethods/logging/loggingOnMessage").OnMessageLogging;
    constructor(){
        this.Init();
    }

    Init(){
        var ClientInstace = this.BotInit();
        this.CommandsInit();
        this.MainBotInit(ClientInstace);
        this.AWSInit();
    }

    BotInit(){
        const Discord = require('discord.js');
        var bot = new Discord.Client({disableEveryone: true});
        bot.commands = new Discord.Collection();
        return new this.BotInstance.ClientInstace(bot);
    }
    
    MainBotInit(ClientInstace){
        var botMethods = new this.BotOnMethods();
        botMethods.BotOnReady(ClientInstace);
        new this.LoggingInit().init(ClientInstace);
        new this.StartLogging().OnMessageLogging(ClientInstace);
        botMethods.BotOnCommand(ClientInstace);
        botMethods.BotOnMemberAdd(ClientInstace);

    }


    AWSInit(){
        const AWS = require("aws-sdk");
        const Config = require("../config_auth/Config.json");
        AWS.config.loadFromPath(Config.path +'\\config_auth\\awsconfig.json');
    }

    CommandsInit(){
        const Config = require("../config_auth/Config.json");
        const fs = require("fs");
        fs.readdir(Config.path + "/discord_js_bot_main/commands/", (err, files) =>{
            if(err) console.log(err);
            let jsfile = files.filter(f => f.split(".").pop() === "js");
            if(jsfile.length <= 0){
                console.log("could not find command.");
                return;
            } 
        
            jsfile.forEach((f, i) =>{
                let C = require(`Config.path + "/discord_js_bot_main/commands/${f}`);
                console.log(`${f} Ready!`);
                bot.commands.set(C.help.name, C);
            });
        });
    }

 


}