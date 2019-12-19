import Web3 from "web3";
const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic =
  "again indicate sadness search update gossip bitter truth empower dolphin caught club";
const endpoint = "http://127.0.0.1:9545";

const getWeb3 = () =>
  new Promise(resolve => {
    window.addEventListener("load", () => {
      let currentWeb3;
      let hd = new HDWalletProvider(mnemonic, endp);
      currentWeb3 = new Web3(new Web3.providers.HttpProvider(endpoint));
      resolve(currentWeb3);
    });
  });

export default getWeb3;
