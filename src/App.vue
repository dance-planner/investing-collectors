<template>
  <div id="app" data-app="true">
    <h1>Mein Account</h1>
    <v-select v-model="account" :items="accounts" label="Account:"></v-select>
    <h1>Mein Wallet</h1>
    <v-row>
      <v-col v-for="(balance,index) in balances" :key="index" align="center">
        <offer :balance="balance" :id="index"></offer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//import getWeb3 from "./web3.js";

const contractAddress = "0x509eb175Ddba72519Ab55E5433485E096a53F4Fc";
const contractAbi = [
  {
    inputs: [],
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
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
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
        name: "id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
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
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "index",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
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
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
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
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256"
      }
    ],
    name: "createOffer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "tokensOf",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];
const endpoint = "http://127.0.0.1:9545";
const mnemonic =
  "again indicate sadness search update gossip bitter truth empower dolphin caught club";
import Web3 from "web3";
import offer from "./components/offer.vue";
const HDWalletProvider = require("@truffle/hdwallet-provider");
//var Accounts = require("web3-eth-accounts");
//var accounts = new Accounts(endpoint);

export default {
  name: "app",
  components: {
    offer
  },
  data() {
    return {
      web3: null,
      account: null,
      contractInstance: null,
      isLoading: false,
      reciept: null,
      wallet: undefined,
      balances: [10, 50, 80],
      maxTokens: [100, 100, 100],
      accounts: []
    };
  },
  methods: {
    async balanceOf(address, index) {
      let balance = await this.contractInstance.methods
        .balanceOf(address, index)
        .call();
      return balance;
    },
    async index() {
      let index = await this.contractInstance.methods.index().call();
      return index;
    },
    async tokensOf() {
      let tokenIds = await this.contractInstance.methods
        .tokensOf()
        .call({ from: this.account });
      return tokenIds;
    }
  },
  watch: {
    async account() {
      if (this.account) {
        this.balances = [];
        let index = await this.tokensOf();
        console.log(index);
        for (let i of index) {
          let balance = await this.balanceOf(this.account, i);
          this.balances.push(balance);
        }

        let accounts = await this.web3.eth.getAccounts();
        this.accounts = accounts;
      }
    }
  },
  mounted() {
    let hd = new HDWalletProvider(
      mnemonic,
      new Web3.providers.HttpProvider(endpoint),
      0,
      2
    );
    this.web3 = new Web3(hd);
    this.contractInstance = new this.web3.eth.Contract(
      contractAbi,
      contractAddress
    );
    this.web3.eth.getAccounts().then(accounts => {
      console.log(accounts);
      this.account = accounts[0];
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
