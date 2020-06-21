const Discord = require("discord.js");
const AWS = require("aws-sdk");
const genericEC2Request = require("./Ec2Request").ServerRequest;
const GenericEc2Request = new genericEC2Request("t2.micro", "8", true);
const avalibilityZones = require('../enums/avalibility zones').avalibilityZones;
module.exports.ec2launch = class ec2launch {
ec2;
instanceParams;
instancePromise;
instanceId;
tagParams;
tagPromise;
zone;
constructor(avalibilityZone){
    this.zone = avalibilityZone;
}
    async LaunchEc2Instance(Ec2Request){
      GenericEc2Request.IsOnDemandInstance
      if(Ec2Request.IsSpotInstance){
        await this.LaunchEc2SpotInstance(Ec2Request);
        return;
      }
      if(Ec2Request.IsOnDemandInstance){
        await this.LaunchOnDemandEc2Instance(Ec2Request);
        return;
      }
    }
    async LaunchOnDemandEc2Instance(Ec2Request){
        
     this.ec2 = new AWS.EC2({apiVersion: '2016-11-15', region: this.zone});
      var userdata = Buffer.from(`<script> 
      echo Current date and time >> %SystemRoot%\\Temp\\test.log 
      echo %DATE% %TIME% >> %SystemRoot%\\Temp\\test.log 
      cd C:\\Users\\Administrator\\Desktop\\bot\\WhiteLightningServers\\discord_js_bot_main 
      start launch.bat ${Ec2Request.NetIdentifyer} ${Ec2Request.port} ${Ec2Request.host}
      </script> 
      <persist>true</persist>`).toString('base64')
     this.instanceParams = {
        // BlockDeviceMappings: [
        //     {
        //       DeviceName: '/dev/sdh',
        //       Ebs: {
        //         DeleteOnTermination: false,
        //         Encrypted: false,
        //         VolumeSize: '8',
        //         SnapshotId: 'snap-09221c5120e1e3c1b',
        //         VolumeType: "standard"
        //       },
              
        //     },
          
        //   ],
        ImageId: 'ami-0cce4a0a958affeb2', 
        InstanceType: 't2.micro',
        KeyName: 'ClientGameServerKey',
        MinCount: 1,
        MaxCount: 1,
        SecurityGroupIds: [
            "sg-0514f961dbeed621f"
         ],
         UserData: userdata
     };

    
      this.instancePromise = new AWS.EC2({apiVersion: '2016-11-15', region: this.zone}).runInstances(this.instanceParams).promise();

     this.instancePromise.then(
        (data) =>{
            //log speggettiiiiiiiiii // the entire instance
            //console.log(data);
             this.instanceId = data.Instances[0].InstanceId;
            console.log("created instance", this.instanceId);

             this.tagParams = {Resources: [this.instanceId], Tags: [
                {
                Key: 'Name',
                Value: 'BigGay'
                }
            ]};
             this.tagPromise = new AWS.EC2({apiVersion: '2016-11-15', region: this.zone}).createTags(this.tagParams).promise();
            this.tagPromise.then(
                function(data){
                    console.log("Instance tagged");
            }).catch(
                function(err){
                    console.error(err, err.stack);
                });
                
            }).catch(
                function(err){
                    console.error(err, err.stack);
                });
            }

            async LaunchEc2SpotInstance(Ec2Request){
              var userdata = Buffer.from(`<script> 
      echo Current date and time >> %SystemRoot%\\Temp\\test.log 
      echo %DATE% %TIME% >> %SystemRoot%\\Temp\\test.log 
      cd C:\\Users\\Administrator\\Desktop\\bot\\WhiteLightningServers\\discord_js_bot_main 
      start launch.bat ${Ec2Request.NetIdentifyer} ${Ec2Request.port} ${Ec2Request.host}
      </script> 
      <persist>true</persist>`).toString('base64')
                var ec2 = new AWS.EC2({apiVersion: '2016-11-15', region: this.zone});
                var params = {
                    InstanceCount: 1, 
                    LaunchSpecification: {
                        // BlockDeviceMappings: [
                        //     {
                        //       DeviceName: '/dev/sdh',
                        //       Ebs: {
                        //         DeleteOnTermination: Ec2Request.VolumeShouldTerminateOnClose,
                        //         Encrypted: false,
                        //         //SnapshotId: 'STRING_VALUE',
                        //         VolumeSize: Ec2Request.VolumeSize,
                        //         VolumeType: "standard"
                        //       },
                        //      // NoDevice: 'STRING_VALUE',
                        //     },
                        //     /* more items */
                        //   ],
                     
                     
                     InstanceType: Ec2Request.InstanceType, 
                     ImageId: 'ami-0904bde069069fec8', 
                     InstanceType: 't2.micro',
                     KeyName: 'ClientGameServerKey',
                     SecurityGroupIds: [
                         "sg-0514f961dbeed621f"
                      ],
                      UserData: userdata
                    }, 
                    SpotPrice: "0.020", 
                    Type: "one-time"
                   };
                   ec2.requestSpotInstances(params, function(err, data) {
                     if (err) console.log(err, err.stack); // an error occurred
                     else     console.log(data);           // successful response
                     /*
                     data = {
                     }
                     */
                   });

            }
}

module.exports.help = {
    name: "aws"
}