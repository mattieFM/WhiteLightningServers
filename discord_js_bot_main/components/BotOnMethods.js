exports.BotOnMethods = class BotOnMethods{
    constructor(){


    }


     BotOnReady(ClientInstance = require("./botInstance")){
        var client = ClientInstance.bot;
        client.on("ready", async () =>{
            console.log(`${client.user.username} is online and is running on ${client.guilds.size} server(s)!`);
            client.user.setActivity("The Pup of Repair", {type: "WATCHING"});
           
        });
    }
     BotOnMemberAdd(ClientInstance = require("./botInstance")){
        var client = ClientInstance.bot;
        client.on("guildMemberAdd", async member => { 
            var guild = member.guild
            if (member.guild.id !== '684538007168090123') {
                return;
            }
        if (member.guild.roles.find('name', '03 Security Clearance (Secret)')); {
        member.addRole(member.guild.roles.find('name', '03 Security Clearance (Secret)'));
        }
        });
    }

    async BotOnCommand(ClientInstance = require("./botInstance")){
        
        
        var client = ClientInstance.bot;
        var Config = require("../config_auth/Config.json");
        client.on("message", async message =>{
            var client = ClientInstance.bot;
            if(ClientInstance.CommandsAreInitialised){
            if(message.author.id === client.user.id) return;
            //only converts the cmd to lowercase
          let prefix = Config.prefix;
          let msgArray = message.content.split(" "); 
          let cmd = msgArray[0].toLocaleLowerCase();
          let args = msgArray.slice(1);
          let cmdFile = client.commands.get(cmd.slice(prefix.length));
        
          if(cmdFile) cmdFile.run(client, message, args);
            }  else{
                var haslogged = false;
                if(!haslogged)console.log("a command was sent and recived before commands were initalised");
                haslogged = true
                return;
            }
        });
  
    
    }
     async ClientLogin(ClientInstance = require("./botInstance")){
        var Config = require("../config_auth/Config.json");
        var client = ClientInstance.bot;
        client.login(Config.Token);
        ClientInstance.ClientHasLoggedIn = true;
    }
}