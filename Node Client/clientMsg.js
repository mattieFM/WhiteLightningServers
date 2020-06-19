exports.CleintMsg = class CleintMsg{
    UniqueIdentifyer;
    Command;
    Settings;
    data;
    msg;


    constructor(UniqueIdentifyer, Command, Settings){
        this.msg = `${UniqueIdentifyer} &split& ${Command} &split& ${Settings} `;
        
    }

    async addData(){
        if(this.data) this.msg = this.msg + "&split& " + this.data;
    }
}