/*** @description a class representing the logging of individual messages of the bot */
exports.OnMessageLogging = class OnMessageLogging{
time;
    constructor(){
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var Min = d.getMinutes();
        var sec = d.getSeconds();
        var time = month + `.` + day + "." + year +  ".txt"
        this.time = time;
    }
/*** @description logging of messages when a message is posted */
    async OnMessageLogging(ClientInstance = require("../../botInstance").ClientInstace){
        if(ClientInstance.LoggingFileCreated == false){
            var HasLoged = false;
            if(!HasLoged){console.log("log files have not ben created")
            HasLoged =true;
        }else{
            return;
        }
        }else {
            var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var Min = d.getMinutes();
        var sec = d.getSeconds();
        var time = month + `.` + day + "." + year +  ".txt"
        const fs = require("fs");
        const Config = require("../../../config_auth/Config.json");
        var bot = ClientInstance.bot;
        
        bot.on("message", async message =>{
  
        var Writing = fs.createWriteStream(Config.path + "/ChatLog/exact/Exact" +this.time, {
            flags: 'a'
           });
          
           if(message.channel.type !== "dm") {
        Writing.write("<" + message.author.username + " > " + ":  " + message.content + "\r\n" +"Message Details: AuthorId: " + message.author.id + " AuthorTag: " + message.author.tag + " Channel: " + message.channel.name + " Server: " + message. guild.name + " Date:" +  month + `/` + day + `/` + year + "\r\n"); 
        console.log("<" + message.author.username + " > " + ":  " + message.content + "\r\n" +"Message Details: AuthorId: " + message.author.id + " AuthorTag: " + message.author.tag + " Channel: " + message.channel.name + " Server: " + message. guild.name + " Date:" +  month + `/` + day + `/` + year + "\r\n");
          
    };
    
        if(message.channel.type === "dm") {
            Writing.write("<" + message.author.username + " > " + ":  " + message.content + "\r\n" +"Message Details: AuthorId: " + message.author.id + " AuthorTag: " + message.author.tag + " Channel: " + "DM " + " Server: DM" + " Date:" +  month + `/` + day + `/` + year + "\r\n");
            console.log("<" + message.author.username + " > " + ":  " + message.content + "\r\n" +"Message Details: AuthorId: " + message.author.id + " AuthorTag: " + message.author.tag + " Channel: " + "DM " + " Server: DM" + " Date:" +  month + `/` + day + `/` + year + "\r\n");
        };
    
            Writing.end() // close string
    
            var Writing2 = fs.createWriteStream(Config.path + "/ChatLog/simple/" +"Simple" + this.time, {
                flags: 'a'
               });
              
               if(message.channel.type !== "dm") {
            Writing2.write( "<" + message.guild.name + ", " + message.author.username + " > " + ":  " + message.content + "\r\n"); 
            console.log("<" + message.author.username + " > " + ":  " + message.content + "\r\n");
              
        };
        
            if(message.channel.type === "dm") {
                Writing2.write("<" + "Message = DM, " + message.author.username + " > " + ":  " + message.content + "\r\n");
                console.log("<" + "Message = DM, " + message.author.username + " > " + ":  " + message.content + "\r\n");
            };
        
            
            
            Writing2.end() // close string
            
            
    });
    if(!ClientInstance.LoggingIsInitialised){
        console.log("Logging has been initialised")
        ClientInstance.LoggingIsInitialised = true;
        }
}

}
}