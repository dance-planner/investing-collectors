<template>
  <div id="app">
    <div>{{reciept}}</div>
    <!-- <div>
      <h1>Wallet</h1>
      <div v-for="(account, index) in wallet" :key="index">{{account.address}}</div>
    </div>-->
    <div>Balance: {{ balance }}</div>
  </div>
</template>

<script>
//import getWeb3 from "./web3.js";

const contractAddress = "0x6FcDdc1C8fE15eE50D0f1981cc603B35DD8B6150";
const contractAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];
const endpoint = "http://127.0.0.1:9545";
//const mnemonic =
//"again indicate sadness search update gossip bitter truth empower dolphin caught club";
import Web3 from "web3";
//const HDWalletProvider = require("@truffle/hdwallet-provider");
//var Accounts = require("web3-eth-accounts");
//var accounts = new Accounts(endpoint);

export default {
  name: "app",
  data() {
    return {
      web3: null,
      account: null,
      contractInstance: null,
      isLoading: false,
      reciept: null,
      wallet: undefined,
      balance: -1
    };
  },
  methods: {
    async balanceOf(address) {
      console.log(address);
      let balance = await this.contractInstance.methods
        .balanceOf(address)
        .call();
      return balance;
    }
  },
  watch: {
    async account() {
      if (this.account) {
        this.balance = await this.balanceOf(this.account);
      }
    }
  },
  mounted() {
    this.web3 = new Web3(endpoint);
    this.contractInstance = new this.web3.eth.Contract(
      contractAbi,
      contractAddress
    );
    this.web3.eth.getAccounts().then(accounts => {
      console.log(accounts);
      this.account = accounts[1];
    });
    // console.log(this.contractInstance);
    // this.wallet = this.web3.eth.accounts.wallet.load("Fabi1103!");
    // if (this.wallet.length <= 0) {
    //   let newWallet = this.web3.eth.accounts.wallet.create(2);
    //   console.log("NEUES WALLET ERSTELLT!");
    //   console.log(newWallet);
    //   this.web3.eth.accounts.wallet.save("Fabi1103!");
    //   console.log("WALLET gespeichert");
    // } else {
    //   console.log(this.wallet);
    //   console.log("WALLET wurde geladen");
    // }
    // console.log(this.wallet[0]);
    // let accounts1 = await this.web3.eth.getAccounts();
    // console.log(accounts1);
    // console.log(accounts);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
