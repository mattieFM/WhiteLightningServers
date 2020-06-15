module.exports.Status = {
    NOTREJECTED: "for internal use only",
    MAXCOMMONSERVERS: "there are to many public(free) servers running at the current moment in time, try again later",
    USERMAXACTIVESERVERS: "you have too many servers running, try closing one to create a new one",
    USERMAXSERVERS: "you have to many servers saved, data takes up space, try deleting one of your saved servers and try again",
    USERMAXUPTIMEPERDAY: "you have exeaded or reached the maximum time you may have servers running in a 24 hour period",
    MAXTOTALSERVERS: "THIS SHOULD NOT HAPPEN, but our servers appear to be overrun. The only reason for this error is to insure no one can malicusly create servers, if you recived this error it is likely that i am looking into a bug or exploit that allows people to request unlimited servers, we will priotize supporter's servers, feel free to contact me, or go to our discord if you need farther information",
    ACCEPTED: "server request has passed all checks and should begen launching",
    EC2LAUNCHING: "EC2 server is activly launching",
    EC2LAUNCHED: "EC2 server has launched and has a ec2 server instance attached",
    GAMELAUNCHING: "The game server is activly launching on a ec2 instance",
    LAUNCHED: "the game server is online and there is a ServerInstance for it",
    TERMINATED: "the game server has stoped, the ec2 instance is not active, and no remnaints of the server are left behind (this is not costing any $$$)"
}