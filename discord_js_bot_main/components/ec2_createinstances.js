const Discord = require("discord.js");
const AWS = require("aws-sdk");
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
    zone = avalibilityZone;
}
    LaunchEc2Instance(){
        
     this.ec2 = new AWS.EC2({apiVersion: '2016-11-15', region: zone});
    
     this.instanceParams = {
        BlockDeviceMappings: [
            {
              DeviceName: '/dev/sdh',
              Ebs: {
                DeleteOnTermination: false,
                Encrypted: false,
                SnapshotId: 'STRING_VALUE',
                VolumeSize: '8',
                VolumeType: standard
              },
              NoDevice: 'STRING_VALUE',
            },
            /* more items */
          ],
        ImageId: 'ami-059377ba193aa9309', 
        InstanceType: 't2.micro',
        KeyName: 'MinecraftCloud',
        MinCount: 1,
        MaxCount: 1,
        SecurityGroupIds: [
            "sg-95cacfef"
         ]
     };

    
      this.instancePromise = new AWS.EC2({apiVersion: '2016-11-15', region: zone}).runInstances(instanceParams).promise();

     this.instancePromise.then(
        (data) =>{
            //log speggettiiiiiiiiii // the entire instance
            //console.log(data);
             this.instanceId = data.Instances[0].InstanceId;
            console.log("created instance", instanceId);

             this.tagParams = {Resources: [instanceId], Tags: [
                {
                Key: 'Name',
                Value: 'test'
                }
            ]};
             this.tagPromise = new AWS.EC2({apiVersion: '2016-11-15', region: zone}).createTags(tagParams).promise();
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
}

module.exports.help = {
    name: "aws"
}