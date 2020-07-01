const Discord = require("discord.js");
const Config = require("./Config.json");
module.exports.run = async(bot, message, args) => {
    if(message.author.id === Config.ownerID){
    let Params ={
        Filters: [
            {
           Name: "tag:Name", 
           Values: [
              args[0]
           ]
          }
         ]
        };
//let controller = require("./Ec2Controller").ec2launch;
let instance;
const AWS = require("aws-sdk");

new AWS.EC2({apiVersion: '2016-11-15'}).describeInstances(Params, (err, data) =>{
        if(err){
            console.log("Error", err.stack);
        } else {
               console.log(data.Reservations[0].Instances[0]);
               message.channel.send("public ip: " + data.Reservations[0].Instances[0].PublicIpAddress);
               message.channel.send("KeyName: " + data.Reservations[0].Instances[0].KeyName);
               message.channel.send("ImageId: " + data.Reservations[0].Instances[0].ImageId);
               message.channel.send("InstanceId: " + data.Reservations[0].Instances[0].InstanceId);
        }
    });
}
}

module.exports.help = {
    name: "TestPullAWSInfo"
}