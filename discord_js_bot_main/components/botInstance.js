exports.ClientInstace = class ClientInstace{
bot;
LoggingFileCreated = new Boolean(false);
LoggingIsInitialised = new Boolean(false);
CommandsAreInitialised = new Boolean(false);
ClientHasLoggedIn = new Boolean(false);

constructor(bot){
    console.log("Created new botInstance");
this.bot = bot;
}


}