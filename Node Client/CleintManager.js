const Config = require("../discord_js_bot_main/config_auth/ClientConfig.json");
exports.clientServerManager = class clientServerManager{
    GAMETYPES = require("../discord_js_bot_main/enums/GAMETYPES").gametypes;
    constructor(){
    
    }
    
    test(port, host){
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
        client.write(`Client: is loaded`);
        
        client.on('data', (data) => { 
            //reciving config
            if(data.toString().startsWith('SendingConfig: ')){
                var datarr = data.toString().split("&split&");
                var ClientConfigData = datarr[1];
                console.log(ClientConfigData);
                fs.writeFileSync(Config.path + "//Node Client//ClientConfig.json", ClientConfigData, (err) =>{
                    if(err){
                        console.error(err)
                        throw err
                    }
                    
                });
            }
      
            if (data.toString().endsWith('exit')) { 
                client.destroy(); 
            } 
            
            if(data.toString().includes("Client:")){return}else{
            console.log(`Client received: ${data}`); 
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


    NetCLientInit(host, port, NetIdentifyer){
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
        client.write(`${NetIdentifyer} is connected`);
        
        client.on('data', (data) => { 

            //reciving config
            if(data.toString().startsWith('SendingConfig: ')){
                var datarr = data.toString().split("&split&");
                var ClientConfigData = datarr[1];
                console.log(ClientConfigData);
                fs.writeFileSync(Config.path + "//Node Client//ClientConfig.json", ClientConfigData, (err) =>{
                    if(err){
                        console.error(err)
                        throw err
                    }
                    
                });
            }
      
            if (data.toString().endsWith('exit')) { 
                client.destroy(); 
            } 
            
            if(data.toString().includes("Client:")){return}else{
            console.log(`Client received: ${data}`); 
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