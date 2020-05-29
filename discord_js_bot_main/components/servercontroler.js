const ServerObject = require('./ServerInstance');

exports.server = class server {
defaults;
myBatFilePath;
spawn;
child;
args;
GAMETYPES;
ServerInstance;
constructor(args = []) {
    this.GAMETYPES = require("./enums/GAMETYPES");
    this.spawn = require('child_process').spawn;
    
    
}

    LaunchOptions(game, message, dm){
        switch(game){
        case "terraria":

        break;
        case "minecraft":
            break;
            case "generic":
                console.log('generic game passed to server launch options.');
            break;
    }
}
    launchGame(game){ 
        
        "use strict";
        switch(game){
        
       case "terraria":
           
        this.myBatFilePath = "C:\\Users\\Administrator\\Desktop\\MattEthan\\start-server.bat";
        this.defaults = {
            // The path to the .bat file
            cwd: "C:\\Users\\Administrator\\Desktop\\MattEthan",
            stdio: [ 'pipe', 'pipe', 'pipe' ]
        
          };
          var os = require('os');
var pty = require('node-pty');

var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

       
        // Handle normal output
        //this.child = this.spawn('cmd.exe', ['/c', this.myBatFilePath], this.defaults);
        this.child = pty.spawn(shell, [], this.defaults);
        this.child.write('cd C:\\Users\\Administrator\\Desktop\\MattEthan \r');
        this.child.write('./start-server.bat \r');
        //imput
        this.child.on('data', (data) => {
            process.stdout.write(data);
          });
        
        this.ServerInstance = new ServerObject.serverinstance('', game, this.child);
        // this.child.stdout.on('data', (data) => {
        //     console.log(`stdout: ${data}`);
        //   });
        
        // // Handle error output
        // this.child.stderr.on('data', (data) => {
        //     // As said before, convert the Uint8Array to a readable string.
        //     var str = String.fromCharCode.apply(null, data);
        //     console.error(str);
        // });
        
        // this.child.on('message', message => {
        //     console.log('message: ' + message);
              
        // });
      
        // // Handle on exit event
        // this.child.on('exit', (code) => {
        //     var preText = `Child exited with code ${code} : `;
        
        //     switch(code){
        //         case 0:
        //             console.info(preText+"Something unknown happened executing the batch.");
        //             break;
        //         case 1:
        //             console.info(preText+"The file already exists");
        //             break;
        //         case 2:
        //             console.info(preText+"The file doesn't exists and now is created");
        //             break;
        //         case 3:
        //             console.info(preText+"An error ocurred while creating the file");
        //             break;
        //     }
        // });
        
        return this.ServerInstance;
        break;
        case "minecraft":
        break;
        case "generic":
            console.log('generic server object has been created.');
        break;
        
    }


    

}
        
       

 




}
