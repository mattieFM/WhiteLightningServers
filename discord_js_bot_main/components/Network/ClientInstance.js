exports.clientInstance = class clientInstance{
    Socket;
    Index;
    name;
    AuthorId;
    constructor(socket, Index){
        this.Socket = socket;
        this.Index = Index;
    }
}