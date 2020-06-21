const { resolve } = require("path");
const Config32 = require("../../config_auth/Config.json");
module.exports.FileSystem = class FileSystem {

    constructor(){
        this.UpdateAllFiles();
    }
    async ParseDataFromClient(data, LaunchIndex){
        return new Promise(async resolve => {
           var test = await require("../../index").init.FileSystemController.ParseDataFromClient(data, LaunchIndex);
           if(test) resolve(true);
        })
    } 
//testjankness
test2;
test3;
test4;
test5;
test6;
test7;
test8;
test9;
test10;
test11;
test12;
test13;
  //arrays
  ActiveCommonServers;
  ActivePatronServers;
  RelaunchingServers;
  LaunchingEc2Servers;
  LaunchingGameServers;
  InactiveServers;
  DeepStorageServers;
  FirstTierPatrons;
  SecondTierPatrons;
  ThirdTierPatrons;
  AllPatrons;
  Sockets;
async UpdateAllFiles() {
    return new Promise(async resolve =>{
      this.test2 = false;
      this.test3 = false;
      this.test4 = false;
      this.test5 = false;
      this.test6 = false;
      this.test7 = false;
      this.test8 = false;
      this.test9 = false;
      this.test10 = false;
      this.test11 = false;
      this.test12 = false;
      this.test13 = false;

      var fs = require("fs");
    this.LoggingFolder = "./SavedData/Logging";
    let logging = false;
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\ActiveCommonServers.json", (err, data) => {
        if (err) throw err;
        this.ActiveCommonServers = JSON.parse(data);
        if(logging)console.log(this.ActiveCommonServers);
        this.test2 = true;
    });
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\ActivePatronServers.json", (err, data) => {
        if (err) throw err;
        this.ActivePatronServers = JSON.parse(data);
        if(logging)console.log(this.ActivePatronServers);
        this.test3 = true;
    });
    //servers that should relaunch if the bot restarts
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\RelaunchingServers.json", (err, data) => {
        if (err) throw err;
        this.RelaunchingServers = JSON.parse(data);
        if(logging) console.log(this.RelaunchingServers);
        this.test4 = true;
    });
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\InactiveServers.json", (err, data) => {
        if (err) throw err;
        this.InactiveServers = JSON.parse(data);
        if(logging)console.log(this.InactiveServers);
        this.test5 = true;
    });
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\DeepStorageServers.json", (err, data) => {
        if (err) throw err;
        this.DeepStorageServers = JSON.parse(data);
        if(logging)console.log(this.DeepStorageServers);
        this.test6 = true;
    });
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\AllPatrons.json", (err, data) => {
        if (err) throw err;
        this.AllPatrons = JSON.parse(data);
        if(logging)console.log(this.AllPatrons);
        this.test7 = true;
    });
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\FirstTierPatrons.json", (err, data) => {
        if (err) throw err;
        this.FirstTierPatrons = JSON.parse(data);
        if(logging)console.log(this.FirstTierPatrons);
        this.test8 = true;
    });
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\SecondTierPatrons.json", (err, data) => {
        if (err) throw err;
        this.SecondTierPatrons = JSON.parse(data);
        if(logging)console.log(this.SecondTierPatrons);
        this.test9 = true;
    });
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\ThirdTierPatrons.json", (err, data) => {
        if (err) throw err;
        this.ThirdTierPatrons = JSON.parse(data);
        if(logging)console.log(this.ThirdTierPatrons);
        this.test10 = true;
    });
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\LaunchingEc2Servers.json", (err, data) => {
        if (err) throw err;
        this.LaunchingEc2Servers = JSON.parse(data);
        if(logging)console.log(this.LaunchingEc2Servers);
        this.test11 = true;
    });
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\LaunchingGameServers.json", (err, data) => {
        if (err) throw err;
        this.LaunchingGameServers = JSON.parse(data);
        if(logging)console.log(this.LaunchingGameServers);
        this.test12 = true;
    });
  
    //if sockets should load from file
    // fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\Sockets.json", (err, data) => {
    //     if (err) throw err;
    //     this.Sockets = JSON.parse(data);
    //     if(logging)console.log(this.Sockets);
    //     this.test13 = true;
    // });

    //if not

    

    let finished = false;
    console.log("test");
     finished = await this.fixerthingymbaye(finished)
     if(logging)console.log("here1");
     console.log("updateddata")
     if(finished) resolve(finished);
});
  }
  async fixerthingymbaye(finished){
        return new Promise(resolve =>{
           
            var repet = setInterval(() =>{
                let logging = false;
                if(logging)console.log("here2");
                if(this.test2 && this.test3 && this.test4 && this.test5 && this.test6 && this.test7 && this.test8 && this.test9 && this.test10 && this.test11 && this.test12){
                    clearInterval(repet);
                    if(logging)console.log("here3");
                    finished = true;
                    resolve(finished);
                }
            });
        });
        
  }
}

    