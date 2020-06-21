//const path = process.argv[3];
const Config = require("./ClientConfig.json");
const path = require("./ClientPath.json").path;
const { cleint } = require("./ClientInit");
const commands = require("./commandEnum").commands;
const msg = require("./clientMsg").CleintMsg;
const settings = require("./SettingsEnum").Settings;
exports.clientServerManager = class clientServerManager{
    GAMETYPES = require("../discord_js_bot_main/enums/GAMETYPES").gametypes;
    constructor(){
    
    }

    async NetCLientInit(host, port, NetIdentifyer){
        var fs = require('fs');
       
       
        var net = require("net");
    //var port = 7777;
    //var host = "localhost";
        var client = new net.Socket(); 
        client.connect(
            {
            port: port, 
            host: host
            })
        client.write(new msg (NetIdentifyer, commands.CONNECTED, settings.None).msg);
    
        client.on('data', async (data) => { 
            console.log(data.toString());

            //reciving config
      
            if (data.toString().endsWith('exit')) { 
                client.destroy(); 
            } 
            
            if(data.toString().includes("Client:")){return}else{
            console.log(`Client received: ${data}`); 
            }
            var datarr2 = await data.toString().split("&split&");
            var MsgIdentifyer = datarr2[0];
            var MsgCommand = datarr2[1];
            var MsgSetting = datarr2[2];
            if(datarr2[3]){
            var optionaldata = datarr2[3];
            }
            if(MsgIdentifyer === "SERVER"){
                switch (MsgCommand) {
                    case commands.SENDINGCONFIG:
                        fs.writeFileSync(path + "//Node Client//ClientConfig.json", JSON.stringify(optionaldata), (err) =>{
                    if(err){
                        console.error(err)
                        throw err
                    }
                    
                });
                        break;
                    
                    case commands.LAUNCHSERVER:
                        var GAMETYPES = require("../discord_js_bot_main/enums/GAMETYPES").gametypes;
                        var ServerRequest = optionaldata;
                        const ClinetServerControler = require("./CleintServerControler").server;
                        new ClinetServerControler().launchGame(ServerRequest);
                    default:
                        break;
                }
            }
        });  
        fs.writeFileSync(path + "//Node Client//ClientSocket.json", JSON.stringify(client), (err) =>{
            if(err){
                console.error(err)
                throw err
            }
            
        });
        // Add a 'close' event handler for the client socket 
        client.on('close', () => { 
            console.log('Client closed'); 
        });  
        client.on('error', (err) => { 
            console.error(err); 
        }); 
        return client;
}
}