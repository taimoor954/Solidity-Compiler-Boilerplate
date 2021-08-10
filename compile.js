const path = require("path"); //use path so it work fine in unix or windows
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "Contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf-8");

console.log(inboxPath)

module.exports =  solc.compile(source, 1).contracts[':Inbox']; //contract name, number of contract to deploy
console.log(result);
