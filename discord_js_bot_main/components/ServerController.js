const { Status } = require("../enums/ServerRequestStatus");

const ServerStatus = require("../enums/ServerRequestStatus").Status;
const EC2Launcher = require("./Ec2Controller").ec2launch;
const AvalibilityZones = require("../enums/avalibility zones").avalibilityZones;
const ec2Request = require("./Ec2Request").ServerRequest;


exports.ServerController = class ServerController {
FileSystemController;
defaults;
myBatFilePath;
spawn;
child;
args;
GAMETYPES;
ServerInstance;
constructor() {
this.FileSystemController = require("../../discord_js_bot_main/index.js").init.FileSystemController;
    
}
async LaunchEc2Server(serverRequest){
    if(serverRequest.Status === ServerStatus.ACCEPTED){
    let ec2Launcher = new EC2Launcher(AvalibilityZones.OREGON);
    //sending ec2 request with identifyer for net server
    serverRequest.Ec2Request = new ec2Request("t2.micro", 8, true, serverRequest.OwnerID + "_" + serverRequest.OwnerUniqueIdenifyer + "_" + serverRequest.OwnerServerIndex, AvalibilityZones.OREGON);
    serverRequest.Ec2Request.IsOnDemandInstance = true;
    serverRequest.Ec2Request.port = process.argv[6]
    var ip = require('ip');
        serverRequest.Ec2Request.host = ip.address("public", "ipv4");
     
    
ec2Launcher.LaunchEc2Instance(serverRequest.Ec2Request);
serverRequest.Status = ServerStatus.EC2LAUNCHING;
}else{
    return console.log("a server request that was not accepted attempted to launch")
};
}
//takes a serverRequest sends it to the this.FileSystemController
async LaunchGameServer(serverRequest){
const commands = require("../../../WhiteLightningServers/Node Client/commandEnum").commands;
const settings = require("../../../WhiteLightningServers/Node Client/SettingsEnum").Settings;
const clientconfig = require("../../discord_js_bot_main/config_auth/ClientConfig.json");
const msg = require("../../Node Client/clientMsg").CleintMsg;
//launch ec2 and then net server if one does not exist
if(serverRequest.ConfigHasBeenSent === false){
    if(serverRequest.dontlaunchtwice === true){
        return
    }
await this.FileSystemController.UpdateAllFiles();
//await this.FileSystemController.CheckUserServerEligibilityFromServerRequest(serverRequest);
serverRequest.Status = Status.ACCEPTED;
await this.LaunchEc2Server(serverRequest);
serverRequest.dontlaunchtwice = true;
}
//once a net server has connected -- contuine
if(serverRequest.ConfigHasBeenSent === true){
    var SpecificSettings = new settings.GameSettings.MINECRAFT();
    SpecificSettings.MinecraftServerArgs[6] = new SpecificSettings.MinecraftServerArgs[1]();
    SpecificSettings.MinecraftServerArgs[6].enabled = true;
    SpecificSettings.MinecraftServerArgs[1] = new SpecificSettings.MinecraftServerArgs[1]();
    SpecificSettings.MinecraftServerArgs[1].enabled = true;
var sendmsg = new msg(serverRequest.NetIdentifyer, commands.LAUNCHSERVER, SpecificSettings);
sendmsg.data = serverRequest;
await sendmsg.addData();
await this.FileSystemController.UpdateAllFiles();
this.SendCommandToLaunchGameServer(sendmsg)

}




}

SendCommandToGameServer(){


}
async SendCommandToLaunchGameServer(sendmsg){
    var netidentifyer = sendmsg.UniqueIdentifyer;
await this.FileSystemController.UpdateAllFiles();
this.FileSystemController.Sockets.forEach(sock => {
    if(sock.Identifyer === netidentifyer){
        sock.Socket.write(sendmsg.msg);
    }
});
}
CloseGameServer(){


}






}
