const Discord = require("discord.js");
const Config = require("../config_auth/Config.json");

module.exports.run = async(bot, message, args) => {
    // console.log(message.author.id);
    // console.log(Config.ownerID);
    if(message.author.id != Config.ownerID) return;
    console.log(args[0]);
    await args;
    let Params ={
        Filters: [
            {
           Name: "tag:Name", 
           Values: [
              await args[0]
           ]
          }
         ]
        };
//let controller = require("./Ec2Controller").ec2launch;
let instance;
const AWS = require("aws-sdk");

new AWS.EC2({apiVersion: '2016-11-15'}).describeInstances({
    Filters: [
        {
       Name: "tag:Name", 
       Values: [
          "J5JvA2Nu38ZzLxvCrkmqJ6EvCLuimureqpE1cErfcE9QcacCVjy9D1NoCS3mYXa0brW32cuIuzT9kCHb5FvkUbrPE3JunO05oMzVfsFiyvjmT06arZvHDQt28yH6blqHnZixw4AiqoN9ftDlooVTF2kDpTJM0pgO2Pztfc9sEUk9DnvERMT9EHkdt79gcUIBHTbBT8LN"
       ]
      }
     ]
    }, (err, data) =>{
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

module.exports.help = {
    name: "testpullawsinfo"
}