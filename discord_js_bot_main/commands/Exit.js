

module.exports.run = async(bot, message, args) => {
const Launcher = require("./launcher");
//Launcher.activeServers[0].Input.write('exit');
// console.log (Launcher.activeServers);
 Launcher.activeServers[0].childinstance.write('exit\r');
 Launcher.activeServers[0].cleanUp();
 //console.log(Launcher.activeServers[0].childinstance.stdin);
}
module.exports.help = {
    name: "exit"
}

exports.serverinstance = class ServerInstance {
GAMETYPES = require("./GAMETYPES");
Game;
Index;
OwnerID;
Password;
childinstance;
}
