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
async GetEC2ServerData(Ec2Request){
    let Params ={
        Filters: [
            {
           Name: "tag:Name", 
           Values: [
              Ec2Request.Name
           ]
          }
         ]
        };
    return new Promise(resolve => {
        new AWS.EC2({apiVersion: '2016-11-15', region: Ec2Request.zone}).describeInstances(Params, (err, data) =>{
            if(err){
                console.log("Error", err.stack);
            } else {
                resolve(data);
            }
        });
    });
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
    async makeid(l)
    {
        return new Promise(async resolve => {
            const FileSystemControler = require("../index").init.FileSystemController;
            var text = "";
            var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for(var i=0; i < l; i++ )
            {  
            text += char_list.charAt(Math.floor(Math.random() * char_list.length));
            }
            await FileSystemControler.UpdateAllFiles();
            FileSystemControler.ActiveEC2Servers.forEach(EC2ServerInstance => {
                if(text === EC2ServerInstance.name){
                    let text2
                    let i =0;
                    while(text === EC2ServerInstance.name){
                        text2 = text + "-"+i;
                        i++;
                    }
                    text = text2;
                }
            });
            resolve(text);
        });
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
                Value: Ec2Request.Name
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
      <persist>true</persist>`).toString('base64');
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
                   var SpotInstancePromise = ec2.requestSpotInstances(params, function(err, data) {
                     if (err) console.log(err, err.stack); // an error occurred
                     else     console.log(data);           // successful response
                     /*
                     data = {
                     }
                     */
                   }).promise()
                   this.tagParams = {Resources: [this.instanceId], Tags: [
                    {
                    Key: 'Name',
                    Value: Ec2Request.Name
                    }
                ]};
                   SpotInstancePromise.then(this.tagPromise);

            }

            async InitialiseEc2ServerIntoStorage(Ec2Request){

            }
}



module.exports.help = {
    name: "aws"
}