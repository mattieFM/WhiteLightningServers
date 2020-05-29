exports.BotOnMethods = class BotOnMethods{
    constructor(){


    }


    BotOnReady(client){
        client.on("ready", async () =>{
            console.log(`${client.user.username} is online and is running on ${client.guilds.size} server(s)!`);
            client.user.setActivity("The Pup of Repair", {type: "WATCHING"});
           
        });
    }
    BotOnMemberAdd(client){
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

    BotOnMessage(ClientInstance){

        var client
        client.on("message", async message =>{

            if(message.author.client) return;
          let prefix = Config.prefix;
          let msgArray = message.content.toLocaleLowerCase().split(" "); 
          let cmd = msgArray[0];
          let args = msgArray.slice(1);
          let cmdFile = client.commands.get(cmd.slice(prefix.length));
        
          if(cmdFile) cmdFile.run(client, message, args);
        
        });
    }
}