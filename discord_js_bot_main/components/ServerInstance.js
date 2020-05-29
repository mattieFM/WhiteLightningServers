


exports.serverinstance = class ServerInstance {
GAMETYPES = require("./enums/GAMETYPES");
Game;
Index;
OwnerID;
Password;
childinstance;
Output;
Array = [];


constructor(args = [], game, ChildInstance) {
  
   
        this.Game = game;
        this.childinstance = ChildInstance;
   
        //return console.log('--SERVERINSTANCE constructor -- game should be a type of GAMETYPES');
    
 
}

async cleanUp() {
        this.childinstance.kill;
        this.Array.splice(this.Index);
        this.reMapArrayIndex(this.Array);

}

async reMapArrayIndex(array) {
        let i;
        for(i; i < array.length; i++){
                array[i].Index = i;
        }
}


 




}
