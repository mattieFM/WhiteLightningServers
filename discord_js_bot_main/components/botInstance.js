exports.ClientInstace = class ClientInstace{
bot;
LoggingIsInitialised = new Boolean(false);
ClientHasLoggedIn = new Boolean(false);

constructor(bot){
    console.log("Created new botInstance");
this.bot = bot;
}


}