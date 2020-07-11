const { UserInfoInstance } = require("./UserInfoInstance");
const ServerRequestStatus = require("../../enums/ServerRequestStatus").Status;
const Config32 = require("../../config_auth/Config.json");
const { resolve } = require("path");
const { gametypes } = require("../../enums/GAMETYPES");

module.exports.FileSystemController = class FileSystemControllerserver {
  ServerController;
  NetServer; 

  constructor() {
    this.NetServer = require("../../index.js").init.NetServer;
    this.ServerController = require("../ServerController").ServerController;
    this.UpdateAllFiles();
  }
  //arrays
  ActiveServerRequests;
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
  ActiveEC2Servers;
  Sockets;

  //FileSystemStorage

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
  test14;
  test15;
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
      this.test14 = false;
      this.test15 = false;

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
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\ActiveEC2Servers.json", (err, data) => {
        if (err) throw err;
        this.ActiveEC2Servers = JSON.parse(data);
        if(logging)console.log(this.ActiveEC2Servers);
        this.test14 = true;
    });
    fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\ActiveServerRequests.json", (err, data) => {
        if (err) throw err;
        this.ActiveServerRequests = JSON.parse(data);
        if(logging)console.log(this.ActiveServerRequests);
        this.test15 = true;
    });

    
  
    //if sockets should load from file
    // fs.readFile(Config32.path +"\\components\\FileSystem\\SavedData\\Sockets.json", (err, data) => {
    //     if (err) throw err;
    //     this.Sockets = JSON.parse(data);
    //     if(logging)console.log(this.Sockets);
    //     this.test13 = true;
    // });

    //if not

    this.test13 = await this.NetServer.WriteSocketsToFileSystemMemory();

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
                if(this.test2 && this.test3 && this.test4 && this.test5 && this.test6 && this.test7 && this.test8 && this.test9 && this.test10 && this.test11 && this.test12 && this.test13 && this.test14){
                    clearInterval(repet);
                    if(logging)console.log("here3");
                    finished = true;
                    resolve(finished);
                }
            });
        });
        
  }
//   WaitTests(this.test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12, test13, i){
      
//     if(this.test2 && test3 && test4 && test5 && test6 && test7 && test8 && test9 && test10 && test11 && test12 && test13){
//         clearTimeout()
//         console.log(i);
//         return true;
//     } else{
//         setTimeout(this.WaitTests(this.test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12, test13, i), 5000);
//     }
//   }

  //how many active common servers may be running
  MaxActiveCommonServers;
  //how many servers may exist in storage at a time
  MaxCommonServers;
  //how many servers may exist in storage at a time per person
  MaxCommonServersPerUser;
  //how many servers may be running at a time per person
  MaxActiveCommonServersPerUser;
  // how long a server can be running in one session before the user must request a new session, or contuine the existing one
  MaxTimePerSessionForCommonServers;
  // the total amount of time (in miniutes) a server can run per 24 hour period
  MaxTimePerDayForCommonServers;
  //the total amount of time (in miniutes) a user can go before their server will be deleted, ?? or emailed to them ??
  MaxTimeWorldsWillBeKeptForCommonServers;
  // weathor or not, insead of deleting common servers at the end of their time they should be moved to deep storage
  WorldDeepStorageForCommonServers;
  //total active servers
  TotalActiveServers;
  //max totalservers
  MaxTotalActiveServers;

  //patron configs

  //how long a patron server can be running in one session before the user must request a new session, or contuine the existing one
  MaxTimePerSessionForFirstTeirPatrons;
  MaxTimePerSessionForSecondTeirPatrons;
  MaxTimePerSessionForThirdTeirPatrons;

  //the total amount of time (in miniutes) a server can run per 24 hour period
  MaxTimePerDayForFirstTeirPatrons;
  MaxTimePerDayForSecondTeirPatrons;
  MaxTimePerDayForThirdTeirPatrons;

  //should deep storage be used instead of deletion
  WorldDeepStorageForFirstTeirPatrons;
  WorldDeepStorageForSecondTeirPatrons;
  WorldDeepStorageForThirdTeirPatrons;
  //if so, how long should servers be allowed to be stored
  MaxTimeForWorldDeepStorageForFirstTeirPatrons;
  MaxTimeForWorldDeepStorageForSecondTeirPatrons;
  MaxTimeForWorldDeepStorageForThirdTeirPatrons;

  //how long worlds whould be kept before deleting/deep storing
  MaxTimeWorldsWillBeKeptForFirstTeirPatrons;
  MaxTimeWorldsWillBeKeptForSecondTeirPatrons;
  MaxTimeWorldsWillBeKeptForThirdTeirPatrons;

  //maximum active servers
  MaxActiveServersForFirstTeirPatrons;
  MaxActiveServersForSecondTeirPatrons;
  MaxActiveServersForThirdTeirPatrons;

  //maximum total servers that should be stored per person
  MaxServersForFirstTeirPatronsPerUser;
  MaxServersForSecondTeirPatronsPerUser;
  MaxServersForThirdTeirPatronsPerUser;

  //maximum total servers that should be stored at any point in time for each tier of patron
  MaxServersForFirstTeirPatrons;
  MaxServersForSecondTeirPatrons;
  MaxServersForThirdTeirPatrons;

  //how many servers may be running at any point in time for each tier of patron
  MaxActiveServersForFirstTeirPatrons;
  MaxActiveServersForSecondTeirPatrons;
  MaxActiveServersForThirdTeirPatrons;

  //should patrons be able to have fully dedicated servers
  DedicatedServersForFirstTeirPatrons;
  DedicatedServersForSecondTeirPatrons;
  DedicatedServersForThirdTeirPatrons;
  //if so how many?
  MaxDedicatedServersForFirstTeirPatrons;
  MaxDedicatedServersForSecondTeirPatrons;
  MaxDedicatedServersForThirdTeirPatrons;

  fs = require("fs");

  Init() {}

  FSInit() {}

  //takes a server request and checks eligiblity and fills information, then sends it
  async ServerRequstProccesser(ServerRequest) {
    let UserInfo = ServerRequest.UserInfo;
    await this.CheckUserServerEligibilityFromUserInfo(ServerRequest);
    if (ServerRequest.Status === ServerRequestStatus.ACCEPTED) {
      //if it is not rejected, launch an ec2 instance, add ec2 instance to active servers, convert server request into server instance
    } else {
      //If the serverrequest was rejected exacute this code --add this later i geuss, im tierd........
    }
  }

  async ParseDataFromClient(data, LaunchIndex) {
      return new Promise(async resolve => {
        await this.UpdateAllFiles();
        const commands = require("../../../Node Client/commandEnum").commands;
        const settings = require("../../../Node Client/SettingsEnum").Settings;
        const clientconfig = require("../../config_auth/ClientConfig.json");
        const msg = require("../../../Node Client/clientMsg").CleintMsg;
        var ServerRequest = this.LaunchingEc2Servers[LaunchIndex];
        console.log("server request = launchindex of " + LaunchIndex);
        ServerRequest.Status = ServerRequestStatus.EC2LAUNCHED;
        var datarr = await data.toString().split("&split&");
        var MsgIdentifyer = datarr[0];
        var MsgCommand = datarr[1];
        var MsgSetting = datarr[2];
        var optionalData;
        if (datarr[3]) {
          optionalData = datarr[3];
        }
        
        await this.ConfigSendPromise(data, LaunchIndex);
        
        await this.CleintCommandProcceser(MsgCommand, ServerRequest, optionalData, MsgIdentifyer);
        resolve(true);
      })
  }
  async InitaliseEc2ServerInstance(ServerRequest){
    return new Promise(async resolve => {
        let Statuses = require("../../enums/ServerRequestStatus").Status;
        let EC2Request = ServerRequest.Ec2Request; 
        if(EC2Request.Status != Statuses.EC2HASBEENSTORED && EC2Request.Status != Statuses.EC2TERMINATED){
        let Ec2ServerInstance = require("../Ec2ServerInstance").serverinstance;
        let Ec2Server = new Ec2ServerInstance(ServerRequest);
        await this.UpdateAllFiles();
        Ec2Server.LaunchIndex =this.ActiveEC2Servers.length;
        
        this.ActiveEC2Servers.push(Ec2Server);
        this.LaunchingEc2Servers.splice(ServerRequest.LaunchIndex, 1);
    
        await this.LaunchingEc2Servers.forEach(ServerRequest => {
            let index = this.LaunchingEc2Servers.indexOf(ServerRequest);
            ServerRequest.LaunchIndex = index;
        });
        let writefilepromise = new Promise(resolve => {
          this.fs.writeFile(Config32.path + "\\components\\FileSystem\\SavedData\\LaunchingEc2Servers.json", JSON.stringify(this.LaunchingEc2Servers), (err)=>{
            console.log("file has been writen from insicde inislaised server ec2")
            resolve(true);
          })
        })
        let writefilepromise2 = new Promise(resolve => {
          this.fs.writeFile(Config32.path + "\\components\\FileSystem\\SavedData\\ActiveEC2Servers.json", JSON.stringify(this.ActiveEC2Servers), (err)=>{
            console.log("ActiveEc2Servers file has been writen from insicde inislaised server ec2")
            resolve(true);
          })
        })
        await writefilepromise2;
        await writefilepromise;
        if(this.ActiveEC2Servers[Ec2Server.LaunchIndex].name === Ec2Server.name){
        Ec2Server.Status = Statuses.EC2HASBEENSTORED;
        ServerRequest.EC2ID = Ec2Server.InstanceID;
        ServerRequest.Status = Statuses.GAMESHOULDLAUNCH;
        console.log("ec2 server have been inisaliased amd ready to go")
        resolve(true);
        }
        }
    })
  }
  async ConfigSendPromise(data3, LaunchIndex){
    
    var ServerRequest = this.LaunchingEc2Servers[LaunchIndex];
    const commands = require("../../../Node Client/commandEnum").commands;
    const settings = require("../../../Node Client/SettingsEnum").Settings;
    const clientconfig = require("../../config_auth/ClientConfig.json");
    const msg = require("../../../Node Client/clientMsg").CleintMsg;
    
    let i = 0;
    return new Promise(async resolve => {

      var datarr123 = await data3.toString().split("&split&");
    var MsgIdentifyer = datarr123[0];
    var MsgCommand = datarr123[1];
    var MsgSetting = datarr123[2];
    var optionalData;
    if (datarr123[3]) {
      optionalData = datarr123[3];
    }
        if (ServerRequest.ConfigHasBeenSent === false) {
            await this.UpdateAllFiles();
            console.log("number of sockets " + this.Sockets.length)
            
          await this.Sockets.forEach(async (Sock) => {
              i++;
            var net = require("net");
            if (Sock.Identifyer === MsgIdentifyer) {
              var sendmsg = new msg(
                "SERVER",
                commands.SENDINGCONFIG,
                settings.None
              );
              sendmsg.data = JSON.stringify(clientconfig);
              await sendmsg.addData();
              Sock.Socket.write(sendmsg.msg + "&split&\n");
              var sendmsg2 = new msg(
                "SERVER",
                commands.SENDINGSERVERREQUEST,
                settings.None
              );
              sendmsg2.data = JSON.stringify(ServerRequest);
              await sendmsg2.addData();
              Sock.Socket.write(sendmsg2.msg + "&split&\n");
              ServerRequest.ConfigHasBeenSent = true;
            }
          });
          if(i === this.Sockets.length){
              resolve(true);
          }
        }
      })
  }
  //proccesses commands from client
  async CleintCommandProcceser(command, ServerRequest, optionalData, Identifyer) {
    const commands = require("../../../Node Client/commandEnum").commands;
    switch (command) {
      case commands.CONNECTED:
        ServerRequest.Ec2Request.Status = ServerRequestStatus.EC2LAUNCHED;
        console.log("server connected and initalising server, then launching applicable game servers");
        //ServerRequest.Ec2RequestStatus = ServerRequestStatus.EC2LAUNCHED;
        ServerRequest.Status = ServerRequestStatus.NETSERVERCONECTED;
        await this.InitaliseEc2ServerInstance(ServerRequest);
        //launch server on connection
        await this.LaanchGameServerIfApplicableForAllEc2Server();
        break;
      case commands.SENDINGSERVERREQUESTBACKTOSEREVR:
        this.ActiveEC2Servers.forEach(server => {
            var request = server.ServerRequest;
            if(optionalData.NetIdentifyer === request.NetIdentifyer)
            server.ServerRequest = optionalData;
        });
        break;
        case commands.SERVERLAUNCED:
            this.ActiveEC2Servers.forEach(server => {
                var request = server.ServerRequest;
                if(request.NetIdentifyer === Identifyer){
                    console.log(
                        server.PublicIpAddress + "is launched running: " + request.Game
                    )
                }
          });
        break;
      default:
        break;
    }
  }
  async LaanchGameServerIfApplicableForAllEc2Server(){
      return new Promise(async resolve => {
        let Statuses = require("../../enums/ServerRequestStatus").Status;
        this.ActiveEC2Servers.forEach(async Ec2Server => {
            if(Ec2Server.ServerRequest.Status = Statuses.GAMESHOULDLAUNCH){
                var ServerRequest = Ec2Server.ServerRequest;
                let i = 0;
                let servercontroll = new this.ServerController();
                console.log("launching game server for ServerRequest: " + ServerRequest.LaunchIndex)
                await servercontroll.LaunchGameServer(ServerRequest);
                resolve(true);
                // await this.Sockets.forEach(async (Sock) => {
                    
                //     i++;
                //   var net = require("net");
                //   if (Sock.Identifyer === ServerRequest.NetIdentifyer) {
                //     const commands = require("../../../Node Client/commandEnum").commands;
                //     const settings = require("../../../Node Client/SettingsEnum").Settings;
                //     const msg = require("../../../Node Client/clientMsg").CleintMsg;
                //     var sendmsg = new msg(
                //       "SERVER",
                //       commands.LAUNCHSERVER,
                //       settings.None
                //     );
                //     sendmsg.data = JSON.stringify(ServerRequest);
                //     await sendmsg.addData();
                //     Sock.Socket.write(sendmsg.msg + "&split&\n");
                //   }
                // });
                // if(i === this.Sockets.length){
                //     resolve(true);
                // }
            }
        });
      });
  }
  async AddLaunchingEC2Server(ServerRequest) {
      return new Promise(async resolve => {
        console.log("before");
        this.UpdateAllFiles();
        console.log("after");
        await this.UpdateAllFiles();
        if (ServerRequest.Status === ServerRequestStatus.EC2LAUNCHING) {
          if(this.LaunchingEc2Servers != 0)
            ServerRequest.LaunchIndex = this.LaunchingEc2Servers.length;
            if(this.LaunchingEc2Servers.length === 0)
            ServerRequest.LaunchIndex = 0;
          this.LaunchingEc2Servers.push(ServerRequest);
          this.fs.writeFile(Config32.path + "\\components\\FileSystem\\SavedData\\LaunchingEc2Servers.json", JSON.stringify(this.LaunchingEc2Servers), (err)=>{
            resolve(true);
            console.log("resolveed");
          });

        }    
      });
      
    }
      //var finished = false;

    //   while(!finished){
    //       var watching = false;
    //       if(!watching){
    //   this.fs.watchFile(Config32.path + "\\components\\FileSystem\\SavedData\\LaunchingEc2Servers.json", () =>{
    //     var file = require(Config32.path + "\\components\\FileSystem\\SavedData\\LaunchingEc2Servers.json");
    //     if(file === JSON.stringify(ServerRequest)){
    //         finished = true;
    //     }
    //   });
    // }
    //   watching = true;
    // }
    //   if(finished){
    //       this.fs.unwatchFile(Config32.path + "\\components\\FileSystem\\SavedData\\LaunchingEc2Servers.json");
    //       return true;
    //   }

    
  
  async FinishServerRequest(ServerRequest) {}
  async AddServerTeirFromUserInfo(ServerRequest, UserInfo) {
    if (UserInfo.PatronTier === 0) {
      ServerRequest.ServerTier = 0;
    } else if (UserInfo.PatronTier === 1) {
      ServerRequest.ServerTier = 1;
    } else if (UserInfo.PatronTier === 2) {
      ServerRequest.ServerTier = 2;
    } else if (UserInfo.PatronTier === 3) {
      ServerRequest.ServerTier = 3;
    }
  }
  async FindOrCreateUserInfoFromServerRequest(ServerRequest) {
    return new Promise(async resolve => {
      
      //checking if user has any info file created,
      if ((await this.CheckUserInfoByID(ServerRequest.OwnerID)) === true) {
        let UserInfo = await this.GetUserInfoByID(ServerRequest.OwnerID);
        resolve(UserInfo);
        //if it does, it will grab the UserInfo file
      } else {
        //if the user does not have a UserInfo file one will be created
        //currently using random Patron Teir before that is implemented
        let UserInfo = await this.CreateUserInfoFromServerRequest(
          ServerRequest,
          Math.floor(Math.random() * 4)
        );
        resolve(UserInfo);
      }
      
    })
    
  }
  async CreateUserInfoFromServerRequest(ServerRequest, patronTeir) {
    let UserInfo = new UserInfoInstance();
    //temp id before i make a new one
    UserInfo.InternalID = this.getRandomString(100);

    UserInfo.UserID = ServerRequest.OwnerID;
    UserInfo.UserName = ServerRequest.OwnerName;
    UserInfo.UserUnquieIdentifyer = ServerRequest.OwnerUniqueIdenifyer;
    //temperiar patron tier setter
    UserInfo.PatronTeir = patronTeir;
    //patreon info getter -- get patreon tier, then set UserInfo.Patrontier
    let path = await this.CreateUserInfoFileFromUserInfo(UserInfo);

    return await this.GetUserInfoByID(ServerRequest.OwnerID);
  }

  async CreateUserInfoFileFromUserInfo(UserInfo) {
    const fs = require("fs");
    let json = JSON.stringify(UserInfo);

    fs.writeFileSync(
      Config32.path +
        "/components/FileSystem/SavedData/UserFiles/" +
        UserInfo.UserID +
        ".json",
      json,
      (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      }
    );
    console.log(
      'UserFile: "' + "../" + UserInfo.UserID + ".json" + '" has been created'
    );
    return (
      Config32.path +
      "/components/FileSystem/SavedData/UserFiles/" +
      UserInfo.UserID +
      ".json"
    );
  }

  async CheckUserServerEligibilityFromServerRequest(ServerRequest) {
    let UserInfo = ServerRequest.UserInfo;
    //checks UserInfo file for patron teir and thus determins MaxActiveServers
    let MaxActiveServers = await this.GetMaxActiveServersFromUserInfo(UserInfo);
    let MaxServers = await this.GetMaxServersFromUserInfo(UserInfo);
    let MaxUptimePerDay = await this.GetMaxUptimePerDayFromUserInfo(UserInfo);
    if (this.TotalActiveServers.length >= this.MaxTotalActiveServers) {
      ServerRequest.Status = ServerRequestStatus.MAXTOTALSERVERS;
    }
    if (this.ActiveCommonServers >= this.MaxActiveCommonServers) {
      ServerRequest.Status = ServerRequestStatus.MAXCOMMONSERVERS;
    }
    if (UserInfo.ActiveServers.length >= MaxActiveServers) {
      ServerRequest.Status = ServerRequestStatus.USERMAXACTIVESERVERS;
    }
    if (UserInfo.InactiveServers.length >= MaxServers) {
      ServerRequest.Status = ServerRequestStatus;
    }
    if (UserInfo.MaxUptimePerDay >= MaxUptimePerDay) {
      ServerRequest.Status = ServerRequestStatus.USERMAXUPTIMEPERDAY;
    }
    if ((ServerRequest.Status = ServerRequestStatus.NOTREJECTED)) {
      ServerRequest.Status = ServerRequestStatus.ACCEPTED;
    }

    while (ServerRequest.Status != ServerRequestStatus.NOTREJECTED) {
      return ServerRequest;
    }
  }
  async CheckUserInfoByID(AuthorID) {
    var UserInfoExists = undefined;
    while (UserInfoExists == undefined) {
      if (
        this.fs.existsSync(
          Config32.path +
            "/components/FileSystem/SavedData/UserFiles/" +
            AuthorID +
            ".json"
        )
      ) {
        UserInfoExists = true;
        console.log("userexists");
      } else {
        console.log("user does not exists");
        UserInfoExists = false;
      }
    }
    return UserInfoExists;
  }
  async GetUserInfoByID(AuthorID) {
    var UserInfo22 = require(Config32.path +
      "/components/FileSystem/SavedData/UserFiles/" +
      AuthorID +
      ".json");
    console.log(JSON.stringify(UserInfo22));
    return UserInfo22;
  }
  GetMaxServersFromUserInfo(UserInfo) {
    let MaxServers;
    switch (UserInfo.PatronTeir) {
      case 0:
        MaxServers = this.MaxCommonServersPerUser;
        break;
      case 1:
        MaxServers = this.MaxServersForFirstTeirPatronsPerUser;
        break;
      case 2:
        MaxServers = this.MaxServersForSecondTeirPatronsPerUser;
        break;
      case 3:
        MaxServers = this.MaxServersForThirdTeirPatronsPerUser;
        break;
    }
    return MaxServers;
  }
  async GetMaxUptimePerDayFromUserInfo(UserInfo) {
    let MaxUptimePerDay;
    switch (UserInfo.PatronTeir) {
      case 0:
        MaxUptimePerDay = this.MaxTimePerDayForCommonServers;
        break;
      case 1:
        MaxUptimePerDay = this.MaxTimePerDayForFirstTeirPatrons;
        break;
      case 2:
        MaxUptimePerDay = this.MaxTimePerDayForSecondTeirPatrons;
        break;
      case 3:
        MaxUptimePerDay = this.MaxTimePerDayForThirdTeirPatrons;
        break;
    }
    return MaxUptimePerDay;
  }
  async GetMaxActiveServersFromUserInfo(UserInfo) {
    let MaxActiveServers;
    switch (UserInfo.PatronTeir) {
      case 0:
        MaxActiveServers = this.MaxActiveCommonServersPerUser;
        break;
      case 1:
        MaxActiveServers = this.MaxActiveServersForFirstTeirPatrons;
        break;
      case 2:
        MaxActiveServers = this.MaxActiveServersForSecondTeirPatrons;
        break;
      case 3:
        MaxActiveServers = this.MaxActiveServersForThirdTeirPatrons;
        break;
    }
    return MaxActiveServers;
  }
  async GetPatronTierFromServerRequest(ServerRequest) {
    ServerRequest.PatronTier = 0;
    this.AllPatronsFile.forEach((patron) => {
      if (patron.id === ServerRequest.OwnerID) {
        this.FirstTierPatrons.forEach((patron) => {
          if (patron.id === ServerRequest.OwnerID) {
            ServerRequest.PatronTier = 1;
          }
        });
      } else if (ServerRequest.PatronTier === 0) {
        this.SecondTierPatrons.forEach((patron) => {
          if (patron.id === ServerRequest.OwnerID) {
            ServerRequest.PatronTier = 2;
          }
        });
      } else if (ServerRequest.PatronTier === 0) {
        this.ThirdTierPatrons.forEach((patron) => {
          if (patron.id === ServerRequest.OwnerID) {
            ServerRequest.PatronTier = 3;
          }
        });
      }
    });
  }
  getRandomString(length) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
};

//if jsons cannot be loaded with Require(), but they can so.... :(
// SavedFiles = [
//     new SavedFileInstance(true, this.ActiveCommonServers, this.ActiveCommonServersFile) ,
//     new SavedFileInstance(true, this.ActivePatronServers, this.ActivePatronServersFile),
//     new SavedFileInstance(true, this.RelaunchingServers, this.RelaunchingServersFile),
//     new SavedFileInstance(true, this.InactiveServers, this.InactiveServersFile),
//     new SavedFileInstance(true, this.DeepStorageServers, this.DeepStorageServersFile),
//     new SavedFileInstance(true, this.FirstTierPatrons, this.FirstTierPatronsFile),
//     new SavedFileInstance(true, this.SecondTierPatrons, this.SecondTierPatronsFile),
//     new SavedFileInstance(true, this.ThirdTierPatrons, this.ThirdTierPatronsFile),
// //     ];
// this.SavedFiles.forEach(File => {
//     this.fs.access(File, (err) =>{
//         if (err){
//             console.log("FSInit -- a file attempted to load but did not exist")
//         } else{
//              File.Array = JSON.parse(File.FilePath);
//              File.HasLoadedToArray = true;
//         }
//     })
// });
