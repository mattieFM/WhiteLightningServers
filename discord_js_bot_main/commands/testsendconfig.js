module.exports.run = async(bot, message, args) => {
       
        var childLauncher = require("../components/ChildProccessCreate").ChildShell;
        const FileSystemController = require("../../discord_js_bot_main/index.js").init.FileSystemController;
        const serverRequest = require("../components/ServerRequest").ServerRequest;
        const ServerStatus = require("../enums/ServerRequestStatus").Status;
        //Clientmanager.test(7777, "localhost");

        var ServerRequest = new serverRequest("no", "no", "no");
        ServerRequest.NetIdentifyer = "internalTestIngId"
        ServerRequest.Status = ServerStatus.EC2LAUNCHING;
        await FileSystemController.AddLaunchingEC2Server(ServerRequest);
        var child = new childLauncher().CreateChildShell();
        child.write("cd C:\\Users\\mmful\\Desktop\\discorbot\\WhiteLightningServers\\discord_js_bot_main \r");
        child.write("./launchclient.bat \r");
        
    }
    
    module.exports.help = {
        name: "sendconfig"
    }