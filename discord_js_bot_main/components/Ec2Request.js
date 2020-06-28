
const controller1231231231 = require("../index").init.Ec2Controler;
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
zone;

//unique name of this ec2 server
Name;
        constructor(InstanceType, VolumeSize, VolumeShouldTerminateOnClose, NetIdentifyer, Zone) {
                let controller1231231231 =  require("./Ec2Controller").ec2launch;
                this.zone = Zone;
                this.NetIdentifyer = NetIdentifyer;
                this.InstanceType = InstanceType;
                this.VolumeSize = VolumeSize;
                this.VolumeShouldTerminateOnClose = VolumeShouldTerminateOnClose;
                new controller1231231231("us-west-2").makeid(200).then((value)=>{
                        this.Name = value;
                });
                
        }

        // async asyncsontructuror(){
        //         let controller1231231231 =  require("./Ec2Controller").ec2launch;
        //         var name = new controller1231231231(null).makeid(200);
        //         this.Name = name;
        // }

         
        
        
        
        
        }
        