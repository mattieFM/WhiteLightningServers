const ServerRequest = require("./ServerRequest");
const ServerStatus = require("../enums/ServerRequestStatus").Status;
const EC2Launcher = require("./Ec2Controller").ec2launch;
const AvalibilityZones = require("../enums/avalibility zones").avalibilityZones;
const ec2Request = require("./Ec2Request").ServerRequest;
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
    let ec2Launcher = new EC2Launcher(AvalibilityZones.OREGON);
if(serverRequest.Status === ServerStatus.ACCEPTED){
    ec2request.IsOnDemandInstance = true;
ec2Launcher.LaunchEc2Instance(serverRequest.Ec2Request);
}else{
    return console.log("a server request that was not accepted attempted to launch")
};
}
//takes a serverRequest sends it to the FileSystemController
async LaunchGameServer(serverRequest){
await this.LaunchEc2Server(serverRequest);



}

SendCommandToGameServer(){


}

CloseGameServer(){


}






}
