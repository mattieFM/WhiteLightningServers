const ServerObject = require('./ClientSideServerInstance');
const { cleint } = require('./ClientInit');
const { Status } = require('../discord_js_bot_main/enums/ServerRequestStatus').Status;

exports.server = class server {
defaults;
myBatFilePath;
spawn;
child;
args;
GAMETYPES;
ServerInstance;
constructor(args = []) {
    this.GAMETYPES = require("../discord_js_bot_main/enums/GAMETYPES");
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
        var stream = require("stream").Writable;
        var path = "temp"
        var exacuteable = "temp.bat"
        switch(ServerRequest.Game){
       case "terraria":
        path = "terraria path";
        exacuteable = "terraria exe"
        break;

       case "minecraft":
        path = "C:\\Users\\mmful\\Desktop\\minecraft";
        exacuteable = "ServerStart.bat"
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
    ServerRequest.Status = Status.GAMELAUNCHING;
    child.on("data", async (data) => {
        if(data.toLocaleLowerCase().includes("preparing spawn area:")){
            ServerInstance.Status = Status.GAMELAUNCHING;
        } 
        if(data.toLocaleLowerCase().includes("done")){
            ServerInstance.Status = Status.GAMELAUNCHED;
        }
        if(ServerInstance.Status === Status.GAMELAUNCHED){
            var sendmsg = new msg(ServerRequest.NetIdentifyer, commands.SERVERLAUNCED, settings.None);
    var client = require("../discord_js_bot_main/index").init.NetClient.NetCLient;
    client.write(sendmsg); 
        }
     });
    var sendmsg = new msg(ServerRequest.NetIdentifyer, commands.SENDINGSERVERREQUESTBACKTOSEREVR, settings.None);
    sendmsg.data = ServerRequest;
     sendmsg.addData();
    var client = require("../discord_js_bot_main/index").init.NetClient.NetCLient;
    client.write(sendmsg);    
}
        
       

 




}
