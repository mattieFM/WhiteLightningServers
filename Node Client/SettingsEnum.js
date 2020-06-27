module.exports.Settings = {
    None: "do nothing",
    GameSettings: {
        MINECRAFT: class miencraftLaunchOptions {
            JVMargs = [
                MaxRam ="MAX1024M",
                MinRam = "MIN1024M"
            ]
            MinecraftServerArgs = [
                bonusChest = class bonusChest{
                    enabled = false;
                    commad = "--bonusChest"
                    arg = null;
                },
                demo = class demo{
                    enabled = false;
                    commad = "--demo"
                    arg = null;
                },
                eraseCache = class eraseCache{
                    enabled = false;
                    commad = "--eraseCache"
                    arg = null;
                },
                forceUpgrade = class forceUpgrade{
                    enabled = false;
                    commad = "--forceUpgrade"
                    arg = null;
                },
                help = class help{
                    enabled = false;
                    commad = "--help"
                    arg = null;
                },
                initSettings = class initSettings{
                    enabled = false;
                    commad = "--initSettings"
                    arg = null;
                },
                nogui = class nogui{
                    enabled = false;
                    commad = "--nogui"
                    arg = null;
                },
                port = class port{
                    enabled = false;
                    commad = "--port"
                    arg = " " + "int"
                },
                serverId  = class serverId {
                    enabled = false;
                    commad = "--serverId "
                    arg = " " + "String"
                },
                singleplayer  = class singleplayer {
                    enabled = false;
                    commad = "--singleplayer "
                    arg = " " + "String"
                },
                universe  = class universe {
                    enabled = false;
                    commad = "--universe "
                    arg = " " + "String"
                },
                world  = class world {
                    enabled = false;
                    commad = "--world "
                    arg = " " + "String"
                },
                
            ]
        },

        
        TERRAIRA: class TERRAIRALaunchOptions {

        },

        ARK: class ARKLaunchOptions {

        },
    }
}