module.exports.run = async(bot, message, args) => {
        var clientmanager = require("../../Node Client/CleintManager").clientServerManager;
        var Clientmanager = new clientmanager()
        Clientmanager.test(7777, "localhost");
        
    }
    
    module.exports.help = {
        name: "testing"
    }