const { isString } = require("util");

exports.SavedFileInstance = class SavedFileInstance {
    FilePath;
    ShouldLoadToArray;
    Array;
    HasLoadedToArray;
    constructor(ShouldThisFileLoadToAnArray, TheArrayItShouldLoadTo, filepath){
    this.FilePath = filepath;
    this.ShouldLoadToArray  = ShouldThisFileLoadToAnArray;
    if(this.ShouldLoadToArray === true)this.Array = TheArrayItShouldLoadTo;
    }
}
