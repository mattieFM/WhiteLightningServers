const ServerObject = require('./ClientSideServerInstance');
const { cleint } = require('./ClientInit');
const Status = require('../discord_js_bot_main/enums/ServerRequestStatus').Status;

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
     launchGame(ServerRequest, Settings){ 
         
        var ChildProccesCreator = require("../discord_js_bot_main/components/ChildProccessCreate").ChildShell;
        "use strict";
        var child = new ChildProccesCreator().CreateChildShell();
        var stream = require("stream").Writable;
        var path = "temp"
        var exacuteable = "temp.bat"
        let args = [];
        switch(ServerRequest.Game){
       case "terraria":
        path = "terraria path";
        exacuteable = "terraria exe"
        break;

       case "minecraft":
        Settings.MinecraftServerArgs.forEach(setting => {
            if(setting.enabled === true){
                if(setting.arg != null){
                var arg = setting.commad + " " + setting.arg;
                }else{
                var arg = setting.commad
                }
                args.push(arg);
            }
        });
        var max;
        var min;
        Settings.JVMargs.forEach(JVMSetting => {
            if(JVMSetting.includes("MAX")){
                JVMSetting.replace("MAX", "");
                max = JVMSetting;

            }else if (JVMSetting.includes("MIN")){
                JVMSetting.replace("MIN", "");
                min = JVMSetting;
            }
        });
        path = "D:\\";
        exacuteable = "server1-16-1.jar"
        
        exacuteable = "java " + "-Xmx" +max+ " -Xms" +min+ " -jar "+ exacuteable;
        break;

        case "generic":
            console.log('generic server object has been created.');
        break;
        
    }
    var command = exacuteable;
    args.forEach(arg => {
        command = command +" " + arg;
    });
    var msg = require("./clientMsg").CleintMsg;
    var commands = require("./commandEnum").commands;
    var settings = require("./SettingsEnum").Settings;
    child.write(command+"\r");
    let ServerInstance = new ServerObject.serverinstance(ServerRequest, child);
    
    ServerRequest.ClientServerInstance = ServerInstance;
    ServerRequest.Status = Status.GAMELAUNCHING;
    child.on("data", async (data) => {
        process.stdout.write(data);
        //console.log("i am here testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting");
        if(data.toLocaleLowerCase().includes("preparing spawn area:")){
            ServerInstance.Status = Status.GAMELAUNCHING;
        } 
        if(data.toLocaleLowerCase().includes("done")){
            ServerInstance.Status = Status.GAMELAUNCHED;
        }
        if(ServerInstance.Status === Status.GAMELAUNCHED){
            var sendmsg = new msg(ServerRequest.NetIdentifyer, commands.SERVERLAUNCED, settings.None);
    var client = await require("../discord_js_bot_main/index.js").init.NetClient.NetClient;
    client.write(JSON.stringify(sendmsg) + "\n"); 
    ServerInstance.Status = Status.SERVERLAUNCHEDANDHESSENTMSGTOSERVER;
        }
     });
    var sendmsg = new msg(ServerRequest.NetIdentifyer, commands.SENDINGSERVERREQUESTBACKTOSEREVR, settings.None);
    sendmsg.data = ServerRequest;
     sendmsg.addData();
    var client = require("../discord_js_bot_main/index").init.NetClient.NetCLient;
    client.write(sendmsg + "\n");    
}
        
       

 




}
