exports.ClientInstace = class ClientInstace{
bot;
LoggingFileCreated;
LoggingIsInitialised;
CommandsAreInitialised;
ClientHasLoggedIn;
JavaBotHasInitialised;
constructor(bot){
    console.log("Created new botInstance");
this.bot = bot;
}


}