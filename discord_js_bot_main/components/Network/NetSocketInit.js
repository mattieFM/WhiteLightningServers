exports.NetSocketInit = class NetSocketInit {
    constructor(){
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
const clientinsance = require("./ClientInstance").clientInstance; 
        server.on("connection",  (socket) => {
            const CleintConfigJSON = require("../../config_auth/ClientConfig.json");
            var ClientConfig = JSON.stringify(CleintConfigJSON);
            socket.write("SendingConfig: &split&" + ClientConfig + "&split&")
            var clientAddress = `${socket.remoteAddress}:${socket.remotePort}`; 
            console.log(`new client connected: ${clientAddress}`); 
            sockets.push(new clientinsance(socket, sockets.length+1));
            
            socket.on('data', (data) => { 
                console.log(`Client ${clientAddress}: ${data}`); 
                sockets.forEach((Socket) =>{
                    Socket.Socket.write(socket.remoteAddress + ':' + socket.remotePort + " said " + data + '\n'); 
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


    
}







