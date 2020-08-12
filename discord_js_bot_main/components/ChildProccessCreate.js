/**
 * @description the class containing all functions to create CreateChildShell
 */
exports.ChildShell = class ChildShell {
  constructor() {
   
  }
/**
 * @description Spawns a new Child Shell through Node-Pty
 * @returns child --a child instance spawned through node-pty
 */
  CreateChildShell() {
    const Config = require("../config_auth/Config.json");
    var defaults = {
        // The path to the .bat file
        cwd: Config.path,
      stdio: ["pipe", "pipe", "pipe"],
    };
    var os = require("os");
    var pty = require("node-pty");

    var shell = os.platform() === "win32" ? "powershell.exe" : "bash";

    // Handle normal output
    //this.child = this.spawn('cmd.exe', ['/c', this.myBatFilePath], this.defaults);
    var child = pty.spawn(shell, [], defaults);

    // child.on("data", (data) => {
    //   process.stdout.write(data);
    // });

    return child;
  }
};
