const CleintManagerB = require("./CleintManager").clientServerManager;
const CleintManager = new CleintManagerB();


const NetIdentifyer = process.argv[5];
const Port = process.argv[6];
const Host =process.argv[7];
module.exports.cleint = class client{

    async init(){
        //console.log("Here")
        CleintManager.NetCLientInit(Host, Port, NetIdentifyer);
    }

}