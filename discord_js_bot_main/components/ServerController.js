const ServerRequest = require("./ServerRequest");
const ServerStatus = require("../enums/ServerRequestStatus").Status;
const EC2Launcher = require("./Ec2Controller").ec2launch;
const AvalibilityZones = require("../enums/avalibility zones").avalibilityZones;
const ec2Request = require("./Ec2Request").ServerRequest;
const FSControl = require("../components/FileSystem/FileSystemController").FileSystemController;
const FileSystemController = new FSControl();

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
    serverRequest.Ec2Request = new ec2Request("t2.micro", 8, true, serverRequest.OwnerID + "_" + serverRequest.OwnerUniqueIdenifyer + "_" + serverRequest.OwnerServerIndex);
    serverRequest.Ec2Request.IsSpotInstance = true;
ec2Launcher.LaunchEc2Instance(serverRequest.Ec2Request);
serverRequest.Status = ServerStatus.EC2LAUNCHING;
}else{
    return console.log("a server request that was not accepted attempted to launch")
};
}
//takes a serverRequest sends it to the FileSystemController
async LaunchGameServer(serverRequest){
await FileSystemController.CheckUserServerEligibilityFromServerRequest(serverRequest);
await this.LaunchEc2Server(serverRequest);



}

SendCommandToGameServer(){


}

CloseGameServer(){


}






}
