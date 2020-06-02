module.exports.run = async(bot, message, args) => {
        var clientmanager = require("../../Node Client/CleintManager").clientServerManager;
        new clientmanager().test(7777, "localhost");
    }
    module.exports.help = {
        name: "testing"
    }