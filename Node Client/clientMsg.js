const { resolve } = require("path");

exports.CleintMsg = class CleintMsg{
    UniqueIdentifyer;
    Command;
    Settings;
    data;
    msg;


    constructor(UniqueIdentifyer, Command, Settings){
        this.msg = `${UniqueIdentifyer}&split&${Command}&split&${Settings}`;
        
    }

    async addData(){
        return new Promise(resolve =>{
            if(this.data) this.msg = this.msg + "&split& " + this.data;
            if(this.msg.includes(this.data)){
                resolve(true);
            }
        })
        
    }
}