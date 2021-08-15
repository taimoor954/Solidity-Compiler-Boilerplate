const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "guess quantum chat daring feed large gain nerve lift obtain shaft nurse",
  "https://rinkeby.infura.io/v3/7f6ef47b25c942228f9bba48d67f5fd6"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts, "All Accounts");
  const deployedContract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("deployedContract", deployedContract.options.address);
};

deploy();

//confimed deploymemt of contract on https://rinkeby.etherscan.io/address/0x08F62E8aaFF291A427Af7036e3477c26158B4E19