exports.clientServerManager = class clientServerManager{
    test(port, host){
        var net = require("net");
    //var port = 7777;
    //var host = "localhost";
        var client = new net.Socket(); 
        client.connect(
            {
            port: port, 
            host: host
            })
        client.write(`Client: hello boomer gaymer guy Hello, I am ${client.address().address}`);
        
        client.on('data', (data) => {     
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