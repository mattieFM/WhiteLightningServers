const ServerObject = require('./ClientSideServerInstance');
const { cleint } = require('./ClientInit');

exports.server = class server {
defaults;
myBatFilePath;
spawn;
child;
args;
GAMETYPES;
ServerInstance;
constructor(args = []) {
    this.GAMETYPES = require("./enums/GAMETYPES");
    this.spawn = require('child_process').spawn;
    
    
}

    LaunchOptions(game, message, dm){
        switch(game){
        case "terraria":

        break;
        case "minecraft":
            break;
            case "generic":
                console.log('generic game passed to server launch options.');
            break;
    }
}
    launchGame(ServerRequest){ 
        var ChildProccesCreator = require("../discord_js_bot_main/components/ChildProccessCreate").ChildShell;
        "use strict";
        var child = new ChildProccesCreator().CreateChildShell();
        var path = "temp"
        var exacuteable = "temp.bat"
        switch(ServerRequest.Game){
       case "terraria":
        path = "terraria path";
        exacuteable = "terraria exe"
        break;

       case "minecraft":
        path = "minecraft path";
        exacuteable = "minecraft exe"
        break;

        case "generic":
            console.log('generic server object has been created.');
        break;
        
    }
    var msg = require("./clientMsg").CleintMsg;
    var commands = require("./commandEnum").commands;
    var settings = require("./SettingsEnum").Settings;
    child.write("cd \""+path+"\" \r");
    child.write(exacuteable+"\r");
    let ServerInstance = new ServerObject.serverinstance(ServerRequest, child);
    ServerRequest.ClientServerInstance = ServerInstance;
    var sendmsg = new msg(ServerRequest.NetIdentifyer, commands.LAUNCHSERVER, settings.None);
    sendmsg.data = ServerRequest;
    await sendmsg.addData();
    var client = require("./ClientSocket.json");
    cleint.write(sendmsg);    

}
        
       

 




}
