module.exports.run = async(bot, message, args) => {
       
        var childLauncher = require("../components/ChildProccessCreate").ChildShell;
        const FileSystemController = require("../../discord_js_bot_main/index.js").init.FileSystemController;
        const serverRequest = require("../components/ServerRequest").ServerRequest;
        const ServerStatus = require("../enums/ServerRequestStatus").Status;
        const ec2request = require("../components/Ec2Request").ServerRequest;
        const gametypes = require("../enums/GAMETYPES").gametypes;
        //Clientmanager.test(7777, "localhost");
        var severRequest = new serverRequest(gametypes.MINECRAFT, "162609988131487744", null, 0, "5971");
        //ServerRequest.NetIdentifyer = "162609988131487744_5971_0"
        severRequest.Status = ServerStatus.EC2LAUNCHING;
        severRequest.Ec2Request = new ec2request(null, null, null, null, null, "fakeservername");
        severRequest.Ec2Request.Status = ServerStatus.ACCEPTED;
        severRequest.OwnerName = message.author.username;
        await FileSystemController.AddLaunchingEC2Server(severRequest);
        // var child = new childLauncher().CreateChildShell();
        // child.write("cd C:\\Users\\mmful\\Desktop\\discorbot\\WhiteLightningServers\\discord_js_bot_main \r");
        // child.write("./launchclient.bat \r");
    }
    //start C:\Users\Administrator\Desktop\bot\WhiteLightningServers\discord_js_bot_main\launchclientOnEC2Instance.bat 162609988131487744_5971_0 12277 44.225.20.9
    
    module.exports.help = {
        name: "sendconfig"
    }