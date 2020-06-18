

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
        constructor(InstanceType, VolumeSize, VolumeShouldTerminateOnClose, NetIdentifyer) {
                this.NetIdentifyer = NetIdentifyer;
                this.InstanceType = InstanceType;
                this.VolumeSize = VolumeSize;
                this.VolumeShouldTerminateOnClose = VolumeShouldTerminateOnClose;
        }
        
         
        
        
        
        
        }
        