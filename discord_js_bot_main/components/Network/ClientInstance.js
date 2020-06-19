exports.clientInstance = class clientInstance{
    Socket;
    Index;
    name;
    AuthorId;
    Identifyer;
    constructor(socket, Index, Identifyer){
        this.Socket = socket;
        this.Index = Index;
        this.Identifyer = Identifyer;
    }
}