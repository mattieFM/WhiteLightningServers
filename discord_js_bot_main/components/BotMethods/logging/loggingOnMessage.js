exports.OnMessageLogging = class OnMessageLogging{
    
    constructor(bot){

    }

    OnMessageLogging(bot){
        const fs = require("fs");
    bot.on("message", async message =>{
  
        var Writing = fs.createWriteStream(time, {
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
    
            var Writing2 = fs.createWriteStream("Simple" + time, {
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
}
}