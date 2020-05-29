exports.loggingInit = class loggingInit{
    constructor(){

    }

    init(botInstance){
        bot.on("ready", async () =>{
            fs.appendFile(time, "Bot Restarted" + "\r\n", function (err) {
                if (err) throw err;
                console.log('Log: ' + time + " Was successfully created ");
              });
              
              fs.appendFile("Simple" + time, "Bot Restarted" + "\r\n", function (err) {
                if (err) throw err;
                console.log('Log: ' + "Simple" + time + " Was successfully created ");
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
        
        
        
                }
            );
    }

}