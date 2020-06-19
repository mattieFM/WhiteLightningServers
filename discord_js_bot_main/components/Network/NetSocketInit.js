const FileSysControl = require("../FileSystem/FileSystemController").FileSystemController;
const FileSystemController = new FileSysControl();
exports.NetSocketInit = class NetSocketInit {
sockets;
    constructor(){
        var tempSocket;
        var sockets = [];
        var net = require("net"); 
        var server = net.createServer(); 
        var host = 'localhost';
        var port = "7777"
        server.listen({
        host: host,
        port: port,
        exclusive: true
        }, ()=> {
            
            console.log(`TCP server listening on ${host}:${port}`); 
        })
        //Client instance, a net client instance, not a bot instance, a net client instance
const clientinsance = require("./ClientInstance").clientInstance; 



//on connection of a client do stuff
        server.on("connection",  async (socket) => {
            this.sockets = sockets;
            //stuff
            //ClientConfigJSON, is the file that will be sent to each client to set global client config
            const CleintConfigJSON = require("../../config_auth/ClientConfig.json");
            let SentClientConfig = JSON.stringify(CleintConfigJSON);
            //send client config with the prefix and proper split charectors such that it can be parsed on the client
            //socket.write("SendingConfig: &split&" + SentClientConfig + "&split&");
            var clientAddress = `${socket.remoteAddress}:${socket.remotePort}`; 
            console.log(`new client connected: ${clientAddress}`); 
            //push the net socket into a array containing all sockets
            if(sockets.length != 0)
                sockets.push(new clientinsance(socket, sockets.length,"waiting"));
                if(sockets.length === 0)
                sockets.push(new clientinsance(socket, sockets.length,"waiting"));
            
            socket.on('data', (data) => { 
                ;
                console.log(`Client ${clientAddress}: ${data}`); 
                sockets.forEach((Socket) =>{
                    Socket.Socket.write(socket.remoteAddress + ':' + socket.remotePort + " said " + data + '\n'); 
                    var dataarr = data.toString().split("&split&")
                    if(dataarr[1].includes("cleint has connected, and should be initalised into storage")){
                   if(Socket.Identifyer === "waiting"){
                            Socket.Identifyer = dataarr[0];
                   }
                    
                    this.sockets = sockets;
                 this.WriteSocketsToFile();
                }
               
                
                
                })
                
                
                

                FileSystemController.UpdateAllFiles();
                FileSystemController.LaunchingEc2Servers.forEach(async request => {
                   
                    if(data.toString().startsWith(request.NetIdentifyer)){
                     FileSystemController.ParseDataFromClient(data, request.LaunchIndex, sockets);
                    }
                });
               
                socket.on('close', (data) => { 
                    let index = sockets.findIndex((o) => { 
                    return o.remoteAddress === socket.remoteAddress && o.remotePort === socket.remotePort; 
                            }) 
                            if (index !== -1) sockets.splice(index, 1); 
                            sockets.forEach((sock) => { 
                            sock.write(`${clientAddress} disconnected\n`); 
                            }); 
                            console.log(`connection closed: ${clientAddress}`); 
                               }); 
            });
            
            socket.on('error', (err) => { 
                console.log(`Error occurred in ${clientAddress}: ${err.message}`); 
                    }); 
                
            }); 
            
            
            

            
        //      socket.on('close',  () => { 
        //         console.log(`connection closed: ${clientAddress}`); 
        //      }); 
        //       socket.on('error', (err) => { 
        //         console.log(`Error occurred in ${clientAddress}: ${err.message}`); 
        //       }); 
        exports.Sockets = sockets;
        return
    }

    WriteSocketsToFile(){
        var fs = require("fs");
        var Config = require("../../config_auth/Config.json");
        fs.writeFileSync(Config.path + "//components//FileSystem//SavedData//Sockets.json", JSON.stringify(this.sockets), (err) =>{
                    if(err){
                        console.error(err)
                        throw err
                    }
    });
    console.log("file has been wrote")

}







}
