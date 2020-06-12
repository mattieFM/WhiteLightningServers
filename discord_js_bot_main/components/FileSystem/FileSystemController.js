const { Server } = require("http");
const { UserInfoInstance } = require("./UserInfoInstance");
const { userInfo } = require("os");
const GAMETYPES = require("../../enums/GAMETYPES").gametypes;
const UserInfo = require("./UserInfoInstance").UserInfoInstance;
let GenericUserInfo = new UserInfo();
const REJECTIONREASON = require("../../enums/RejectionReason").RejectionReason;
const SavedFileInstance = require("./SavedFileInstance").SavedFileInstance;
const ServerRequest = require("../ServerRequest").ServerRequest;
let genericServerRequest = new ServerRequest(GAMETYPES.GENERIC);
exports.FileSystemController = class FileSystemControllerserver {

//arrays
ActiveCommonServers;
ActivePatronServers;
RelaunchingServers;
InactiveServers;
DeepStorageServers;
FirstTierPatrons;
SecondTierPatrons;
ThirdTierPatrons;

//FileSystemStorage
LoggingFolder = "./SavedData/Logging";
ActiveCommonServersFile = require("./SavedData/ActiveCommonServers.json");
ActivePatronServersFile= require("./SavedData/ActivePatronServers.json");
//servers that should relaunch if the bot restarts
RelaunchingServersFile= require("./SavedData/RelaunchingServers.json");
InactiveServersFile= require("./SavedData/InactiveServers.json");
DeepStorageServersFile= require("./SavedData/DeepStorageServers.json");
AllPatronsFile = require("./SavedData/AllPatrons.json");
FirstTierPatronsFile= require("./SavedData/FirstTierPatrons.json");
SecondTierPatronsFile= require("./SavedData/SecondTierPatrons.json");
ThirdTierPatronsFile= require("./SavedData/ThirdTierPatrons.json");


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
constructor() {
    
    
    
}





Init(){


}

FSInit(){
    
    

}


//takes a server request and checks eligiblity and fills information, then sends it
async ServerRequstProccesser(ServerRequest){
let UserInfo = ServerRequest.UserInfo;
    await this.CheckUserServerEligibilityFromUserInfo(ServerRequest);
    if(ServerRequest.Rejected === REJECTIONREASON.NOTREJECTED){
        //if it is not rejected, launch an ec2 instance, add ec2 instance to active servers, convert server request into server instance

    }else{
        //If the serverrequest was rejected exacute this code --add this later i geuss, im tierd........
    }
    


        
    }


async AddServerTeirFromUserInfo(ServerRequest, UserInfo){
    if(UserInfo.PatronTier === 0){
        ServerRequest.ServerTier = 0;
    }else if(UserInfo.PatronTier === 1){
        ServerRequest.ServerTier = 1;
    }else if(UserInfo.PatronTier === 2){
        ServerRequest.ServerTier = 2;
    }else if(UserInfo.PatronTier === 3){
        ServerRequest.ServerTier = 3;
    };
}
async FindOrCreateUserInfoFromServerRequest(ServerRequest){
    
    let UserInfo
    //checking if user has any info file created,
    if(this.CheckUserInfoByID(ServerRequest.AuthorID)){
        //if it does, it will grab the UserInfo file
            UserInfo = await this.GetUserInfoByID(ServerRequest.AuthorID);
        }else{
        //if the user does not have a UserInfo file one will be created
        //currently using random Patron Teir before that is implemented
        await this.CreateUserInfoFromServerRequest(ServerRequest, Math.floor(Math.random() * 4));
            UserInfo = await this.GetUserInfoByID(ServerRequest.AuthorID);
        }

    return UserInfo
}
async CreateUserInfoFromServerRequest(ServerRequest, patronTeir){
    let UserInfo = new UserInfoInstance();
    //temp id before i make a new one
    UserInfo.InternalID = this.getRandomString(100);

    
    UserInfo.UserID = ServerRequest.OwnerID;
    UserInfo.UserName = ServerRequest.OwnerName;
    UserInfo.UserUnquieIdentifyer = ServerRequest.OwnerUniqueIdenifyer;
    //temperiar patron tier setter
    UserInfo.PatronTeir = patronTeir;
    //patreon info getter -- get patreon tier, then set UserInfo.Patrontier
    return await this.CreateUserInfoFileFromUserInfo(UserInfo);
}

async CreateUserInfoFileFromUserInfo(UserInfo){
    const fs = require("fs");
    let json = JSON.stringify(UserInfo);
    fs.writeFile("./SavedData/UserFiles/" +UserInfo.UserID+".json", json);
    console.log("UserFile: \"" + "./SavedData/UserFiles/" +UserInfo.UserID+".json" +"\" has been created")
    return "./SavedData/UserFiles/" +UserInfo.UserID+".json"
}

async CheckUserServerEligibilityFromUserInfo(ServerRequest){
    let UserInfo = ServerRequest.UserInfo;
    //checks UserInfo file for patron teir and thus determins MaxActiveServers
    let MaxActiveServers = await this.GetMaxActiveServersFromUserInfo(UserInfo);
    let MaxServers = await this.GetMaxServersFromUserInfo(UserInfo);
    let MaxUptimePerDay = await this.GetMaxUptimePerDayFromUserInfo(UserInfo);
    if(this.TotalActiveServers.length >= this.MaxTotalActiveServers){
        ServerRequest.Rejected = REJECTIONREASON.MAXTOTALSERVERS;
    };
    if(this.ActiveCommonServers >= this.MaxActiveCommonServers){
        ServerRequest.Rejected = REJECTIONREASON.MAXCOMMONSERVERS
    };
    if(UserInfo.ActiveServers.length >= MaxActiveServers){
        ServerRequest.Rejected = REJECTIONREASON.USERMAXACTIVESERVERS;
    };
    if(UserInfo.InactiveServers.length >= MaxServers){
        ServerRequest.Rejected = REJECTIONREASON.USERMAXSERVERS;
    };
    if(UserInfo.MaxUptimePerDay >= MaxUptimePerDay){
        ServerRequest.Rejected = REJECTIONREASON.USERMAXUPTIMEPERDAY;
    };
}
async CheckUserInfoByID(AuthorID){
    var UserInfoExists;
    this.fs.access(File, (err) =>{
                if (err){
                    UserInfoExists = false;
                } else{
                    UserInfoExists = true;
                }
})
return UserInfoExists;
}
async GetUserInfoByID(AuthorID){
    var UserInfo = JSON.parse("./SavedData/UserFiles/" + ServerRequest.AuthorID +".json");
    return UserInfo
}
GetMaxServersFromUserInfo(UserInfo){
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
async GetMaxUptimePerDayFromUserInfo(UserInfo){
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
async GetMaxActiveServersFromUserInfo(UserInfo){
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
async GetPatronTierFromServerRequest(ServerRequest){
    ServerRequest.PatronTier = 0;
    this.AllPatronsFile.forEach(patron => {
        if(patron.id === ServerRequest.OwnerID){
            this.FirstTierPatrons.forEach(patron => {
                if(patron.id === ServerRequest.OwnerID){
                    ServerRequest.PatronTier = 1;
                }
            })
        }else if(ServerRequest.PatronTier === 0){
            this.SecondTierPatrons.forEach(patron => {
                if(patron.id === ServerRequest.OwnerID){
                    ServerRequest.PatronTier = 2;
                }
            })
        }else if(ServerRequest.PatronTier === 0){
            this.ThirdTierPatrons.forEach(patron => {
                if(patron.id === ServerRequest.OwnerID){
                    ServerRequest.PatronTier = 3;
                }
            })
        }
    });
}
getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
}


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