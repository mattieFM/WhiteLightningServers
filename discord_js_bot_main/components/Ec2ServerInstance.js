exports.serverinstance = class ServerInstance {
GAMETYPES = require("./enums/GAMETYPES");


//Info Obtained from Ec2Controller --> InitialiseEc2ServerIntoStorage(); /or/ filesystemcontroller
//Total index of ec2 server in relation to all servers running
Index;
ImageID;
InstanceID;
KeyName;
LaunchTime;
PublicIpAddress;

//info obtained from Ec2Request
IsSpotInstance;
IsOnDemandInstance;
//if so
//weathor or not the on demand instance should stop or terminate
OnDemandInstanceShouldStop;
NetIdentifyer;
port;
host;
InstanceType;
VolumeSize;
VolumeShouldTerminateOnClose;
Status;
name;
Zone;


constructor(Ec2Request) {
        this.Zone = Ec2Request.Zone;
        this.NetIdentifyer = Ec2Request.NetIdentifyer;
        this.InstanceType = Ec2Request.InstanceType;
        this.VolumeSize = Ec2Request.VolumeSize;
        this.VolumeShouldTerminateOnClose = Ec2Request.VolumeShouldTerminateOnClose;
        this.OnDemandInstanceShouldStop = Ec2Request.OnDemandInstanceShouldStop;
        this.Status = Ec2Request.Status;
        this.IsSpotInstance = Ec2Request.IsSpotInstance;
        this.IsOnDemandInstance = Ec2Request.IsOnDemandInstance;
        this.name = Ec2Request.Name;
        this.asyncconstructor(Ec2Request);
}
async asyncconstructor(Ec2Request){
        let controller = require("./Ec2Controller").ec2launch;
        let data = await new controller(this.Zone).GetEC2ServerData(Ec2Request);
        let instance = data.Instances[0];
        this.PublicIpAddress = instance.PublicIpAddress;
        this.ImageID = instance.ImageId;
        this.InstanceID = instance.InstanceId;
        this.KeyName = instance.KeyName;
        this.LaunchTime = instance.LaunchTime;
}

 




}