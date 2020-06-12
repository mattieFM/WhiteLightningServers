module.exports.RejectionReason = {
    NOTREJECTED: "for internal use only",
    MAXCOMMONSERVERS: "there are to many public(free) servers running at the current moment in time, try again later",
    USERMAXACTIVESERVERS: "you have too many servers running, try closing one to create a new one",
    USERMAXSERVERS: "you have to many servers saved, data takes up space, try deleting one of your saved servers and try again",
    USERMAXUPTIMEPERDAY: "you have exeaded or reached the maximum time you may have servers running in a 24 hour period",
    MAXTOTALSERVERS: "THIS SHOULD NOT HAPPEN, but our servers appear to be overrun. The only reason for this error is to insure no one can malicusly create servers, if you recived this error it is likely that i am looking into a bug or exploit that allows people to request unlimited servers, we will priotize supporter's servers, feel free to contact me, or go to our discord if you need farther information"
}