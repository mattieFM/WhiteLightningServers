const Config = require("../config_auth/Config.json");
exports.init = class init{
Discord = require('discord.js');
ChildProccesCreator = require("./ChildProccessCreate").ChildShell;
BotInstance = require("./botInstance").ClientInstace;
BotOnMethods = require("./BotOnMethods").BotOnMethods;
LoggingInit = require("./BotMethods/logging/logginginit").loggingInit;
StartLogging = require("./BotMethods/logging/loggingOnMessage").OnMessageLogging;

NetSoketInit = require("./Network/NetSocketInit");
netTest = require("./Network/netclient/test");
FSControl = require("../components/FileSystem/FileSystemController").FileSystemController;
FILESYS = require("../components/FileSystem/FileSystem").FileSystem;
FileSystemController;
NetServer;
NetClient;
//custructor fires on new object, thus triggering Init()
    constructor(){
        this.Init();
    }

    //the main initialisation function
     async Init(){
        //checks if launching server or client
        if(process.argv.length > 0){
           
            
            //console.log(process.argv)
            switch (process.argv[4]) {
                //launching a client
                case "client":
                    this.NetClient = await this.clientInit();
                    break;

                    //launching a server
                case "server":
                    //pulls directories from args
                    Config.path = process.argv[2]; 
                    var path = process.argv[3];
                    this.serverInit(path);
                    break;
            }
        
        }
        
    }
    async clientInit(){
        const CliEntinit = require("../../Node Client/ClientInit").cleint;
        var client = new CliEntinit();
        await client.init();
        return client;
    }
    async serverInit(path){
         //create a Client/Bot Instance, then pass it to main bot init(), 
         var ClientInstace = await this.BotInit();
         //main bot init --the function responsible for the megority of bot setup
          this.MainBotInit(ClientInstace);
          //AWS init() the functipn responsible for setting any golbal settings for aws
          this.AWSInit();
          //the client must login before the java bot attempts to log in.
          await new this.BotOnMethods().ClientLogin(ClientInstace);
          //netSocket initialisation
          this.NetServer = new this.NetSoketInit.NetSocketInit();
          this.FileSystemController = new this.FSControl();;
          this.NetServer.DefineFileSys();
          //launch the java bot inside a node-pty shell
          this.JavaBotInit(ClientInstace, path);
         
    }
    async BotInit(){
        //the function that will return a usable bot/client instance
        const Discord = require('discord.js');
        var bot = new Discord.Client({disableEveryone: true});
        //create new client/bot instance
        var ClientInstace = new this.BotInstance(bot);
        bot.commands = new Discord.Collection();
        return ClientInstace; 
    }
    
    JavaBotInit(ClientInstace1, path){
        //the main init function for the java bot (launching the java bot inside a node-pty shell)
        var child = new this.ChildProccesCreator().CreateChildShell();
        child.write("cd \""+path+"\" \r");
        child.write("java -jar JavaDiscord4J-1.0-SNAPSHOT.jar\r");
        ClientInstace1.JavaBotHasInitialised = true;
    }
      MainBotInit(ClientInstace){
        //the main discord bot initalistation function
        //load commands
         this.CommandsInit(ClientInstace)
         var botMethods =  new this.BotOnMethods();
         //load BotOnReady
         botMethods.BotOnReady(ClientInstace);
         //start logging
         new this.LoggingInit().init(ClientInstace);
         new this.StartLogging().OnMessageLogging(ClientInstace);
         //other "on" commands
         botMethods.BotOnMemberAdd(ClientInstace);
         botMethods.BotOnCommand(ClientInstace);

    }


     AWSInit(){
         //set any global config that aws needs
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