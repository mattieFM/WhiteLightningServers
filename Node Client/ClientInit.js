const CleintManagerB = require("./CleintManager").clientServerManager;
const CleintManager = new CleintManagerB();


const NetIdentifyer = process.argv[5];
const Port = process.argv[6];
const Host =process.argv[7];
CleintManager.NetCLientInit(Host, Port, NetIdentifyer);