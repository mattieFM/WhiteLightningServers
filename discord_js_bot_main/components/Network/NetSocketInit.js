const { resolve } = require("path"); 
//const FileSystemController = require("../../index").init.FileSystemController;

const logging = false;
exports.NetSocketInit = class NetSocketInit {
sockets;
FileSystemController;
async DefineFileSys(){
    this.FileSystemController = require("../../index").init.FileSystemController;
}
    constructor(){
        
        var tempSocket;
        var sockets = [];
        var net = require("net"); 
        var server = net.createServer(); 
        var host= process.argv[7]
        var port = process.argv[6]
        server.listen({
	    host: host,
        port: port
        }, ()=> {
            
            console.log(`TCP server listening on ${host}:${port}`); 
        })
        //Client instance, a net client instance, not a bot instance, a net client instance
const clientinsance = require("./ClientInstance").clientInstance; 



//on connection of a client do stuff
        server.on("connection",  (socket) => {
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
            
            socket.on('data', async (data) => { 
                
                console.log(`Client ${clientAddress}: ${data}`); 
                await new Promise(resolve => {
                    if(logging)console.log("FIrstPromise1");
                    sockets.forEach(async (Socket) =>{
                        if(logging)console.log("FIrstPromiseInLoop");
                        Socket.Socket.write(socket.remoteAddress + ':' + socket.remotePort + " said " + data + '\n'); 
                        var dataarr = data.toString().split("&split&")
                        if(dataarr[1].includes("cleint has connected, and should be initalised into storage")){
                       if(Socket.Identifyer === "waiting"){
                                Socket.Identifyer = dataarr[0];
                       }
                        
                        this.sockets = sockets;
                        if(logging)console.log("FIrstPromiseIn2");
                        //var writen = await this.WriteSocketsToFile();
                        //if(writen = true)
                        if(logging)console.log("ResolveFirstPrimse");
                        resolve(true);
                    }
                }) 
            })
                await new Promise(resolve => {
                    if(logging)console.log("secondPromise1");
                    let i = 0;
                    this.FileSystemController.UpdateAllFiles().then( () =>{
                        if(logging)console.log("secondPromise2");
                        this.FileSystemController.LaunchingEc2Servers.forEach(async request => {
                            if(logging) console.log("secondPromiseInLoop");
                            i++;
                            if(data.toString().startsWith(request.NetIdentifyer)){
                                this.FileSystemController.ParseDataFromClient(data, request.LaunchIndex);
                            }
                        })
                        if(logging)console.log("secondPromise3");
                    } 
                    ).then(()=>{
                        if(i === this.FileSystemController.LaunchingEc2Servers.length){
                            if(logging)console.log("secondPromisresolve");
                            resolve(true);

                        }else{
                            resolve(false);
                        }
                    });
                });
                
                
            
                socket.on('close', (data) => { 
                    let index = sockets.findIndex((o) => { 
                    return o.remoteAddress === socket.remoteAddress && o.remotePort === socket.remotePort; 
                            }) 
                            if (index !== -1) sockets.splice(index, 1); 
//                             sockets.forEach((sock) => { 
//                             sock.Socket.write(`${clientAddress} disconnected\n`); 
//                             }); 
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
        return new Promise(resolve => {
            var fs = require("fs");
            var Config = require("../../config_auth/Config.json");
            fs.writeFileSync(Config.path + "//components//FileSystem//SavedData//Sockets.json", JSON.stringify(this.sockets), (err) =>{
                        if(err){
                            console.error(err)
                            throw err
                        }
        });
        console.log("file has been wrote")
        resolve(true);
        })
}
    WriteSocketsToFileSystemMemory(){
        if(this.FileSystemController)
        return new Promise(resolve =>{
            this.FileSystemController.Sockets = this.sockets;
            if(this.FileSystemController.Sockets === this.sockets)
            resolve(true);
        })
        
    }







}
