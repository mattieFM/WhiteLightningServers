exports.init = class init{
Discord = require('discord.js');
ChildProccesCreator = require("./ChildProccessCreate").ChildShell;
BotInstance = require("./botInstance").ClientInstace;
BotOnMethods = require("./BotOnMethods").BotOnMethods;
LoggingInit = require("./BotMethods/logging/logginginit").loggingInit;
StartLogging = require("./BotMethods/logging/loggingOnMessage").OnMessageLogging;
    constructor(){
        this.Init();
    }

     async Init(){
        var ClientInstace = await this.BotInit();
        await this.MainBotInit(ClientInstace);
         this.AWSInit();
         this.JavaBotInit();
         new this.BotOnMethods().ClientLogin(ClientInstace);
    }

    async BotInit(){
        const Discord = require('discord.js');
        var bot = new Discord.Client({disableEveryone: true});
        var ClientInstace = new this.BotInstance(bot);
        bot.commands = new Discord.Collection();
        return ClientInstace; 
    }
    
    JavaBotInit(ClientInstace){
        
        var child = new this.ChildProccesCreator().CreateChildShell();
        child.write("cd \"C:\\Users\\mmful\\Desktop\\discord bot\\WhiteLightningServers\\JavaBuilds\" \r");
        child.write("java -jar JavaDiscord4J-1.0-SNAPSHOT.jar\r");
        ClientInstace.JavaBotHasInitialised = true;
    }
      MainBotInit(ClientInstace){
         this.CommandsInit(ClientInstace)
         var botMethods =  new this.BotOnMethods();
         botMethods.BotOnReady(ClientInstace);
         new this.LoggingInit().init(ClientInstace);
         new this.StartLogging().OnMessageLogging(ClientInstace);
         botMethods.BotOnMemberAdd(ClientInstace);
         botMethods.BotOnCommand(ClientInstace);

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
        ClientInstace.CommandsAreInitialised = true;
    }

 


}