const Discord = require("discord.js");
const Config = require("./Config.json");

module.exports.run = async(bot, message, args) => {
    let Params ={
        Filters: [
            {
           Name: "tag:Name", 
           Values: [
              "J5JvA2Nu38ZzLxvCrkmqJ6EvCLuimureqpE1cErfcE9QcacCVjy9D1NoCS3mYXa0brW32cuIuzT9kCHb5FvkUbrPE3JunO05oMzVfsFiyvjmT06arZvHDQt28yH6blqHnZixw4AiqoN9ftDlooVTF2kDpTJM0pgO2Pztfc9sEUk9DnvERMT9EHkdt79gcUIBHTbBT8LN"
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
               console.log(JSON.stringify(data));
        }
    });
}

module.exports.help = {
    name: "testttttt"
}