exports.test = class test {

    constructor(port, host){
        var net = require("net");
        var client = new net.Socket(); 
        client.connect(
            {
            port: port, 
            host: host
            })
        client.write(`hello boomer gaymer guy Hello, I am ${client.address()}`);

    }

}