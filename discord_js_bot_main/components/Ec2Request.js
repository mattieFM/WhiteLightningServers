

exports.ServerRequest = class ServerRequest {

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
Zone;

//unique name of this ec2 server
Name;
        constructor(InstanceType, VolumeSize, VolumeShouldTerminateOnClose, NetIdentifyer, Zone) {
                let controller = require("./Ec2Controller").ec2launch;
                this.Zone = Zone;
                this.Name = new controller(null).makeid(200);
                this.NetIdentifyer = NetIdentifyer;
                this.InstanceType = InstanceType;
                this.VolumeSize = VolumeSize;
                this.VolumeShouldTerminateOnClose = VolumeShouldTerminateOnClose;
        }

         
        
        
        
        
        }
        