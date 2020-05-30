exports.init = class init{
Discord = require('discord.js');

BotInstance = require("./botInstance").ClientInstace;
BotOnMethods = require("./BotOnMethods").BotOnMethods;
LoggingInit = require("./BotMethods/logging/logginginit").loggingInit;
StartLogging = require("./BotMethods/logging/loggingOnMessage").OnMessageLogging;
    constructor(){
        this.Init();
    }

     Init(){
        var ClientInstace = this.BotInit();
        await this.MainBotInit(ClientInstace);
         this.AWSInit();
         new this.BotOnMethods().ClientLogin(ClientInstace);
    }

    async BotInit(){
        const Discord = require('discord.js');
        var bot = new Discord.Client({disableEveryone: true});
        var ClientInstace = new this.BotInstance(bot);
        bot.commands = new Discord.Collection();
        return ClientInstace; 
    }
    
     async MainBotInit(ClientInstace){
        await this.CommandsInit(ClientInstace)
        var botMethods =  new this.BotOnMethods();
         botMethods.BotOnReady(ClientInstace);
        await new this.LoggingInit().init(ClientInstace);
        await new this.StartLogging().OnMessageLogging(ClientInstace);
         botMethods.BotOnMemberAdd(ClientInstace);
        await botMethods.BotOnCommand(ClientInstace);

    }


     AWSInit(){
        const AWS = require("aws-sdk");
        const Config = require("../config_auth/Config.json");
        AWS.config.loadFromPath(Config.path +'\\config_auth\\awsconfig.json');
    }

     async CommandsInit(ClientInstace){
        const bot = ClientInstace.bot;
        const Config = require("../config_auth/Config.json");
        const fs = require("fs");
        fs.readdir(Config.path + "/commands/", (err, files) =>{
            if(err) console.log(err);
            let jsfile = files.filter(f => f.split(".").pop() === "js");
            if(jsfile.length <= 0){
                console.log("could not find command.");
                return;
            } 
        
            jsfile.forEach((f, i) =>{
                let C = require(Config.path + `/commands/${f}`);
                console.log(`${f} Ready!`);
                bot.commands.set(C.help.name, C);
            });
        });
    }

 


}