module.exports.run = async(bot, message, args) => {
            var sockets = require("../components/Network/NetSocketInit").Sockets;
            sockets.forEach(sock => {
                sock.write("exit");
            });
    // var net = require("net");
    // var port = 7777;
    // var host = "localhost";
    //     var client = new net.Socket(); 
    //     client.connect(
    //         {
    //         port: port, 
    //         host: host
    //         })
    //     client.write(`hello boomer gaymer guy Hello, I am ${client.address().address}`);
    //     }
    //     client.on('data', (data) => {     
    //         if (data.toString().endsWith('exit')) { 
    //             client.destroy(); 
    //      } 
    //         console.log(`Client received: ${data}`); 
    //     });  
    //     // Add a 'close' event handler for the client socket 
    //     client.on('close', () => { 
    //         console.log('Client closed'); 
    //     });  
    //     client.on('error', (err) => { 
    //         console.error(err); 
    //     }); 
}
        module.exports.help = {
            name: "closetest"
        }