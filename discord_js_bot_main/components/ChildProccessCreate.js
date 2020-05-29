exports.ChildShell = class ChildShell {
  constructor() {}

  CreateChildShell() {
    this.defaults = {
      // The path to the .bat file
      cwd: "C:\\Users\\Administrator\\Desktop\\MattEthan",
      stdio: ["pipe", "pipe", "pipe"],
    };
    var os = require("os");
    var pty = require("node-pty");

    var shell = os.platform() === "win32" ? "powershell.exe" : "bash";

    // Handle normal output
    //this.child = this.spawn('cmd.exe', ['/c', this.myBatFilePath], this.defaults);
    this.child = pty.spawn(shell, [], this.defaults);

    this.child.on("data", (data) => {
      process.stdout.write(data);
    });

    return this.child;
  }
};
