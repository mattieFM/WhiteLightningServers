exports.loggingInit = class loggingInit{
    constructor(){

    }

    init(ClientInstance = require("../../botInstance").ClientInstace){
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate();
var Min = d.getMinutes();
var sec = d.getSeconds();
var time = month + `.` + day + "." + year +  ".txt"
        const Config = require("../../../config_auth/Config.json");
        var bot = ClientInstance.bot;
        bot.on("ready", async () =>{
            fs.appendFile("../../../ChatLog/exact/" +time, "Bot Restarted" + "\r\n", function (err) {
                if (err) throw err;
                console.log('Log: ' +"../../../ChatLog/exact" + time + " Was successfully created ");
              });
              
              fs.appendFile("../../../ChatLog/simple" +"Simple" + time, "Bot Restarted" + "\r\n", function (err) {
                if (err) throw err;
                console.log('Log: '+ "../../../ChatLog/simple" + "Simple" + time + " Was successfully created ");
              });
        
          
              var role = bot.roles
            var logger = fs.createWriteStream(time, {
                flags: 'a' 
               });
               
            
                
               logger.write("-------------Start of Log-----------------" + "\r\n");
            logger.write("-------------" + month + `/` + day + `/` + year + "  " + Hr + ":" + Min + ":" + sec + "-----------------" + "\r\n");
        
            console.log( bot.users.array().length);
         var i;
         for (i = 0; i < bot.users.array().length; i++) {
                   var User = bot.users.array()[i];         
              
                   logger.write("Username: \"" + User.username + "\" UserId: \"" + User.id + "\","+  "\r\n") 
                   if(User.role)
                   logger.write("Role: \"" + User.role + "\" RoleID: \"" + User.role.id + "\"," +  "\r\n") 
                   
                }
            
                
                logger.write("-------------Guilds-----------------" + "\r\n" );
                for (i = 0; i < bot.guilds.array().length; i++) {
                    var guild = bot.guilds.array()[i]
                   
                    logger.write("Guild Name: " + guild.name + " Guild Id: " + guild.id + "\r\n")
                    
                  
                       
                   
                    };
                    
                    for (i = 0; i < bot.guilds.array().length; i++) {
                        let guild = bot.guilds.array()[i]
                    var Channels = guild.channels.map(g => g.name).join("\r\n")
                    
        
                    
                        logger.write("\r\n"+"----------------"+ guild + " Channels--------------" + "\r\n" + Channels)
                       
                        
                    }
                    for (i = 0; i < bot.guilds.array().length; i++) {
                        let guild = bot.guilds.array()[i]
                        console.log(guild.name)
             
                        
                    }
                    logger.write("\r\n"+"-------------End of Members & Guilds-----------------" + "\r\n" + "\r\n");
                    
        
                    logger.write("-------------Start of Chat Log-----------------------" + "\r\n");
                    logger.end() // close string
        
                    console.log("Logging files have been created")
                    ClientInstace.LoggingFileCreated = true;
                }
            );
    }

}