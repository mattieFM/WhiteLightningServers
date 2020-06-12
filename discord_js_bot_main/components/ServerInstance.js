exports.serverinstance = class ServerInstance {
GAMETYPES = require("./enums/GAMETYPES");
//data the will be filled before fileSystemController

//settings for the game server
GameSettings;

//type of game
Game;

//discord owner ID
OwnerID;

//how long till the game session will close
SessionTimeTillClose;

//if aplicable
Password;


//file system will fill

//Total index of all servers running (number of this server in realtion to all servers)
Index;
//if common server, index within all common servers
CommonIndex
//the number in realtion to all servers the owner currently owns, active or inactive (but not deleted)
OwnerServerIndex;
//



constructor(game) {
  
   
        this.Game = game;
}

 




}
