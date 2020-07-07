exports.serverinstance = class ServerInstance {
GAMETYPES = require("../discord_js_bot_main/enums/GAMETYPES").gametypes;
//data the will be filled before fileSystemController

//settings for the game server
GameSettings;

//type of game
Game;

//discord info
OwnerName;
OwnerUniqueIdenifyer;
OwnerID;

//file system will fill
Ec2Request;
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

//an enum with the status of the server
Status;

//how long till the game session will close
SessionTimeTillClose;

//if aplicable
Password;
//child shell running this server
Child;

TimeOfRequest;
DateOfRequest;
DateAndTimeOfRequest;

ServerRequest;

constructor(ServerRequest, child) {
        this.ServerRequest = ServerRequest;
        this.Game = ServerRequest.Game;
        this.Child = child;
        this.SessionTimeTillClose = ServerRequest.SessionTimeTillClose;
        this.ContructorAsync();
}

async ContructorAsync(ServerRequest){
        var d = new Date();
        //this.UserInfo = ServerRequest.UserInfo;
        this.ServerTier = ServerRequest.ServerTier;
        this.TimeOfRequest = ServerRequest.TimeOfRequest;
        this.DateOfRequest = ServerRequest.DateOfRequest;
        this.DateAndTimeOfRequest = ServerRequest.DateAndTimeOfRequest;
}




}
