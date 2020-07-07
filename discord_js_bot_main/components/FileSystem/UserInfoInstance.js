

exports.UserInfoInstance = class UserInfoInstance {
    //discord values
    UserID;
    UserName;
    UserUnquieIdentifyer;

    //internal ID used if i make a website
    InternalID;
    InternalUserName;
    InternalPassword;


    InactiveServers = [];
    ActiveServers = [];

    //the amount of time in a 24 hour period that the user has had a active server running
    MaxUptimePerDay;

    PatronTier;

    constructor(){

    }
}
