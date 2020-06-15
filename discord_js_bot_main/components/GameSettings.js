
const StatusREASON = require("../enums/ServerRequestStatus").Status;
const BFileSystemController = require("./FileSystem/FileSystemController").FileSystemController;
let FileSystemController = new BFileSystemController();
exports.ServerRequest = class ServerRequest {
        GAMETYPES = require("../enums/GAMETYPES").gametypes;
        //data the will be filled before fileSystemController
        
        //settings for the game server
        GameSettings;
        
        //type of game
        Game;
        
        //discord info
        OwnerName;
        OwnerUniqueIdenifyer;
        OwnerID;
        

        UserInfo;
        
        //how long till the game session will close
        SessionTimeTillClose;
        
        //if aplicable
        Password;
        
        
        //file system will fill

        //common server or 1-3 patreon servers; (0-3)
        ServerTier;
        //if not a patron this will be zero, else 1-3
        PatronTier;
        //Total index of all servers running (number of this server in realtion to all servers)
        Index;
        //if common server, index within all common servers
        CommonIndex
        //the number in realtion to all servers the owner currently owns, active or inactive (but not deleted)
        OwnerServerIndex;
        //an enum with errors/reasons that the request was regected
        Status;
        

        //date and time of request
        TimeOfRequest;
        DateOfRequest;
        DateAndTimeOfRequest;
        IndexOfRequestByUser;
        IndexOfRequest;
        
        
        constructor(game, OwnerID, GameSettings) {
                this.Status = StatusREASON.NOTStatus;
                var d = new Date();
                if(game = this.GAMETYPES.GENERIC){
                        console.log("a ServerRequest for a generic server has been generated, this kind of server cannot be launched, and should only be used for testing")
                }
                this.OwnerID = OwnerID
                this.GameSettings = GameSettings;
                this.Game = game;
                this.UserInfo = await FileSystemController.FindOrCreateUserInfoFromServerRequest(this);
                await FileSystemController.AddServerTeirFromUserInfo(this, this.UserInfo);
                this.TimeOfRequest = d.getTime();
                this.DateOfRequest = d.getDate();
                this.DateAndTimeOfRequest = this.TimeOfRequest + "/"+ this.DateOfRequest + "/" + d.getMonth() + "/" + d.getFullYear();
                IndexOfRequestByUser = this.UserInfo.ServerRequests.length +1;
                this.UserInfo.ServerRequests.push(this);
                
                
        }
        
         
        
        
        
        
        }
        