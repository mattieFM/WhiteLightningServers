const Discord = require("discord.js");
const Config = require("../config_auth/Config.json");
const { RichEmbed } = require("discord.js");
var bot = new Discord.Client({disableEveryone: true});
const ServerController = require("../components/ServerController").ServerController;
const GAMETYPES = require("../enums/GAMETYPES.js");
const AWS = require("aws-sdk");
var activeServers = [];
var inDM = Boolean;
const ServerRequest = require("../components/ServerRequest").ServerRequest;
const ServerRequestStatus = require("../enums/ServerRequestStatus").Status;

module.exports.run = async(bot, message, args) => {
    inDM = false;
    if(message.channel.type === "dm")inDM = true;

    if(!inDM)await message.delete().catch(O_o=>{});
    
 
var filter = (reaction, user) => ['712007147432575076', '712007201320992784', '712015446441721856'].includes(reaction.emoji.id) && user.id === message.author.id;
     var minecraft = bot.emojis.find(emoji => emoji.id === "712007147432575076");
     var terraria = bot.emojis.find(emoji => emoji.id === "712007201320992784");
     var incognito = bot.emojis.find(emoji => emoji.id === "712015446441721856");


const embed = new RichEmbed()
    .setTitle('Select a type of server to launch')
    .setDescription(`
    (note: only user that requested this may interact)
    ${minecraft} (launch a minecraft server)
    ${terraria} (launch a terraria server)
    ${incognito} (continue dialog in direct message (DMs MUST be enabled))
    `)
    .setColor(0xdd9323)
    .setFooter(`InDM: False; ID: ${message.author.id}`);


    const DMembed = new RichEmbed()
    .setTitle('Select a type of server to launch')
    .setDescription(`
    
    ${minecraft} (launch a minecraft server)
    ${terraria} (launch a terraria server)
    `)
    .setColor(0xdd9323)
    .setFooter(`InDM: True; ID: ${message.author.id}`);

    LaunchGui(inDM)
    
    
    
    
    async function LaunchGui(IsInDM)
    {
        let errormessage = "you did not respone within two minutes "
        let user = bot.users.get(message.author.id);
        if(IsInDM == true){
           
        const DMfilter = (reaction, user) => ['712007147432575076', '712007201320992784'].includes(reaction.emoji.id) && user.id === message.author.id;
        filter = DMfilter;
        
        };
        if(!IsInDM)var msg = await message.channel.send(embed);
        if(IsInDM) var msg = await user.send(DMembed);
            // const promisereact1 = new Promise((resolve) => msg.react('712007147432575076'));
            // const promisereact2 = new Promise((resolve) => msg.react('712007201320992784'));
            // const promisereact3 = new Promise((resolve) => msg.react('712015446441721856'));
            let msgShouldDelete;
             msgShouldDelete = false;
            // msg.react('712007147432575076');
            // msg.react('712007201320992784');
            // msg.react('712015446441721856');
            // if(IsInDM)await Promise.all([promisereact1, promisereact2]);
            // if(!IsInDM) await Promise.all([promisereact1, promisereact2, promisereact3]);
         
            
    
            msg.awaitReactions(filter, {
                max: 1,
                time: 120000,
                errors: ['time']
            }).then(collected =>{
    
                const reaction = collected.first();
                const ServerControler = new ServerController();
                var gametypes = GAMETYPES.gametypes;
                //var genericServerRequest = new ServerRequest(gametypes.GENERIC, "InternalUser", null);
                //var launchingserver = ServerControler.LaunchGameServer(genericServerRequest);
                    switch (reaction.emoji.id){
                        //minecraft
                        case '712007147432575076':
                            message.channel.send('launching mincraft');
                            const Discord = require('discord.js');
                            //new Discord.Message().author.username
                            var severRequest = new ServerRequest(gametypes.MINECRAFT, message.author.id, null, 0);
                            severRequest.OwnerUniqueIdenifyer = message.author.discriminator;
                            severRequest.OwnerName = message.author.username;
                            ServerControler.LaunchGameServer(severRequest);
                            break;
                        //terraria
                        case '712007201320992784':
                            message.channel.send('launching terraria');
                            ServerControler.LaunchOptions(gametypes.TERRARIA, message, false)
                            ServerControler.launchGame(gametypes.TERRARIA);
                           
                            break;
                        case '712015446441721856':
                            //contuine in DM
                            if(!IsInDM){
                                errormessage = "sending a new message to user "
                            LaunchGui(true);
                            }else if(IsInDM){
                                console.log('incognito/dm option was chosen from inside a dm')
                            }
                            //ServerControler.LaunchOptions(gametypes.GENERIC, message, true)
                            break;
                            
                    }
                    
                
                
                // if(activeServers && activeServers.length > 0){launchingserver.Index = activeServers.length + 1}else{
                //     launchingserver.Index = 0;
                // }
                //launchingserver.OwnerID = message.author.id;
                // var fs = require('fs');
                // var wstream = fs.createWriteStream('C:\\Users\\Administrator\\Desktop\\MattEthan\\'+launchingserver.OwnerID + 'Output'  +'.txt');
                // launchingserver.Output = wstream;
                // launchingserver.Array = activeServers;
                
                // activeServers.push(launchingserver);
                if(msgShouldDelete)msg.delete(5000); 
            }).catch(collected => {
                msgShouldDelete = true
                if(msgShouldDelete)msg.delete(5000);
                return message.channel.send(errormessage + ' -- deleting original message' + collected).then(m => m.delete(5000));
                
            })
            
     

    }};
    




exports.activeServers = activeServers;
module.exports.help = {
    name: "launch"
}