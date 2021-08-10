const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); //constructor function or can say  returns class
const { bytecode, interface } = require("../compile");
//CONFIG WEB3 FOR GANACHE NETWORK
var allAccounts;
let deployedInbox;
var intialStr = "Hi there";
const web3 = new Web3(ganache.provider()); //for diff networks use diff provider
beforeEach(async () => {
  //get a list of all accounts
  allAccounts = await web3.eth.getAccounts(); //we are looking at eth module of web3

  //deploying contract
  //use on of those account to deploy the contract
  deployedInbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there"],
    })
    .send({ from: allAccounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(deployedInbox.options.address); //ok check if exist or not
  });

  it("has a default message", async () => {
    const message = await deployedInbox.methods.message().call();
    assert.equal(message, intialStr);
  });

  it("can set/update message", async () => {
    const transactionHash = await deployedInbox.methods
      .setMessage("Bye")
      .send({ from: allAccounts[0], gas: "1000000" }); //returns receipt or transHash
    const message = await deployedInbox.methods.message().call();

    assert.equal(message, "Bye");
  });
});
