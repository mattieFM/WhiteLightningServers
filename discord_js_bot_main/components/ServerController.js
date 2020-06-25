const ServerStatus = require("../enums/ServerRequestStatus").Status;
const EC2Launcher = require("./Ec2Controller").ec2launch;
const AvalibilityZones = require("../enums/avalibility zones").avalibilityZones;
const ec2Request = require("./Ec2Request").ServerRequest;
const FileSystemController = require("../../discord_js_bot_main/index.js").init.FileSystemController;

exports.ServerController = class ServerController {
defaults;
myBatFilePath;
spawn;
child;
args;
GAMETYPES;
ServerInstance;
constructor() {

    
}
async LaunchEc2Server(serverRequest){
    if(serverRequest.Status === ServerStatus.ACCEPTED){
    let ec2Launcher = new EC2Launcher(AvalibilityZones.OREGON);
    //sending ec2 request with identifyer for net server
    serverRequest.Ec2Request = new ec2Request("t2.micro", 8, true, serverRequest.OwnerID + "_" + serverRequest.OwnerUniqueIdenifyer + "_" + serverRequest.OwnerServerIndex, AvalibilityZones.OREGON);
    serverRequest.Ec2Request.IsSpotInstance = true;
ec2Launcher.LaunchEc2Instance(serverRequest.Ec2Request);
serverRequest.Status = ServerStatus.EC2LAUNCHING;
}else{
    return console.log("a server request that was not accepted attempted to launch")
};
}
//takes a serverRequest sends it to the FileSystemController
async LaunchGameServer(serverRequest){
const commands = require("../../../WhiteLightningServers/Node Client/commandEnum").commands;
const settings = require("../../../WhiteLightningServers/Node Client/SettingsEnum").Settings;
const clientconfig = require("../../discord_js_bot_main/config_auth/ClientConfig.json");
const msg = require("../../WhiteLightningServers/Node Client/clientMsg").CleintMsg;
//launch ec2 and then net server if one does not exist
if(serverRequest.ConfigHasBeenSent === false){
await FileSystemController.UpdateAllFiles();
await FileSystemController.CheckUserServerEligibilityFromServerRequest(serverRequest);
await this.LaunchEc2Server(serverRequest);
}
//once a net server has connected -- contuine
if(serverRequest.ConfigHasBeenSent === true){
var sendmsg = new msg(serverRequest.NetIdentifyer, commands.LAUNCHSERVER, settings.None);
sendmsg.data = serverRequest;
await sendmsg.addData();
await FileSystemController.UpdateAllFiles();
this.SendCommandToLaunchGameServer(sendmsg)

}




}

SendCommandToGameServer(){


}
async SendCommandToLaunchGameServer(sendmsg){
    var netidentifyer = sendmsg.UniqueIdentifyer;
await FileSystemController.UpdateAllFiles();
FileSystemController.Sockets.forEach(sock => {
    if(sock.Identifyer === netidentifyer){
        sock.Socket.write(sendmsg.msg);
    }
});
}
CloseGameServer(){


}






}
