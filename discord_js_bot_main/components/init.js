const Config = require("../config_auth/Config.json");
exports.init = class init{
/**Discord.js import */
Discord = require('discord.js');
/*** @description The ChildShell class */
ChildProccesCreator = require("./ChildProccessCreate").ChildShell;
/*** @description a class representing a bot instance, containing initialization information */
BotInstance = require("./botInstance").ClientInstace;
/*** @description a class representing the "on methods" of a bot */
BotOnMethods = require("./BotOnMethods").BotOnMethods;
/*** @description a class representing the logging methods of the bot */
LoggingInit = require("./BotMethods/logging/logginginit").loggingInit;
/*** @description a class representing the logging of individual messages of the bot */
StartLogging = require("./BotMethods/logging/loggingOnMessage").OnMessageLogging;

NetSoketInit = require("./Network/NetSocketInit");
netTest = require("./Network/netclient/test");
FSControl = require("../components/FileSystem/FileSystemController").FileSystemController;
FILESYS = require("../components/FileSystem/FileSystem").FileSystem;
FileSystemController;
NetServer;
NetClient;
ec2con = require("./Ec2Controller").ec2launch;
Ec2Controler = new this.ec2con("us-west-2");
//custructor fires on new object, thus triggering Init()
/**
 * The constructor for the init() class.
 * @constructor creating a new init class will initalize the bot, by triggering Init()
 */
    constructor(){
        this.Init();
    }

    //the main initialisation function
/**
 * @async
 * @description Determines weathor to launch the server or the client based upon the launch args
 */
     async Init(){
        //checks if launching server or client
        if(process.argv.length > 0){
           
            
            //console.log(process.argv)
            switch (process.argv[4]) {
                //launching a client
                case "client":
                    const CliEntinit = require("../../Node Client/ClientInit").cleint;
                    Config.path = process.argv[2]; 
                    this.NetClient = new CliEntinit();
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
    /**
 * @async
 * @description The main initialisation function of the (server) bot,
 */
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
          await this.NetServer.DefineFileSys();
          //launch the java bot inside a node-pty shell
          this.JavaBotInit(ClientInstace, path);
         
    }
    /**
 * @async
 * @description creates a new client (bot) instance
 * @returns ClientInstance (bot)
 */
    async BotInit(){
        //the function that will return a usable bot/client instance
        const Discord = require('discord.js');
        var bot = new Discord.Client({disableEveryone: true});
        //create new client/bot instance
        var ClientInstace = new this.BotInstance(bot);
        bot.commands = new Discord.Collection();
        return ClientInstace; 
    }
/**
 * @description Starts a Node-Pty shell and then launches a java bot inside of it, based upon launch args
 * @returns null
 */
    JavaBotInit(ClientInstace1, path){
        //the main init function for the java bot (launching the java bot inside a node-pty shell)
        var child = new this.ChildProccesCreator().CreateChildShell();
        child.write("cd \""+path+"\" \r");
        child.write("java -jar JavaDiscord4J-1.1-SNAPSHOT.jar\r");
        ClientInstace1.JavaBotHasInitialised = true;
    }
/**
 * @description Initalizes the "On" meathods of the bot
 * @returns null
 */
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

/**
 * @description Initalizes AWS-SDK global Variables
 * @returns null
 */
     AWSInit(){
         //set any global config that aws needs
        const AWS = require("aws-sdk");
        const Config = require("../config_auth/Config.json");
        AWS.config.loadFromPath(Config.path +'\\config_auth\\awsconfig.json');
        if (!AWS.config.region) {
            AWS.config.update({
              region:'us-west-2'
            });
          }
    }
/**
 * @param ClientInstace the bot/client instance representing the bot
 * @description Initalizes commands on a client instnace (bot)
 * @returns null
 */
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