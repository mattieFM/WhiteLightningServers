module.exports.Settings = {
    None: "do nothing",
    GameSettings: {
        MINECRAFT: class miencraftLaunchOptions {
            JVMargs = [
                "MAX1024M",
                "MIN1024M"
            ]
            MinecraftServerArgs = [
                class bonusChest{
                    enabled = false;
                    commad = "--bonusChest"
                    arg = null;
                },
                class demo{
                    enabled = false;
                    commad = "--demo"
                    arg = null;
                },
                class eraseCache{
                    enabled = false;
                    commad = "--eraseCache"
                    arg = null;
                },
                class forceUpgrade{
                    enabled = false;
                    commad = "--forceUpgrade"
                    arg = null;
                },
                class help{
                    enabled = false;
                    commad = "--help"
                    arg = null;
                },
                class initSettings{
                    enabled = false;
                    commad = "--initSettings"
                    arg = null;
                },
                class nogui{
                    enabled = false;
                    commad = "--nogui"
                    arg = null;
                },
                class port{
                    enabled = false;
                    commad = "--port"
                    arg = " " + "int"
                },
                class serverId {
                    enabled = false;
                    commad = "--serverId "
                    arg = " " + "String"
                },
                class singleplayer {
                    enabled = false;
                    commad = "--singleplayer "
                    arg = " " + "String"
                },
                class universe {
                    enabled = false;
                    commad = "--universe "
                    arg = " " + "String"
                },
                class world {
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