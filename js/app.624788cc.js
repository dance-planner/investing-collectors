(function(e){function t(t){for(var a,s,o=t[0],p=t[1],u=t[2],c=0,d=[];c<o.length;c++)s=o[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(e[a]=p[a]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var p=n[o];0!==i[p]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/investing-collectors/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],p=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=p;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("8a23"),i=n.n(a);i.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"55cf":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="55cf"},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app","data-app":"true"}},[n("h1",[e._v("Mein Account")]),n("v-select",{attrs:{items:e.accounts,label:"Account:"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}}),n("h1",[e._v("Mein Wallet")]),n("v-row",e._l(e.balances,(function(e,t){return n("v-col",{key:t,attrs:{align:"center"}},[n("offer",{attrs:{balance:e,id:t}})],1)})),1)],1)},r=[],s=n("6314"),o=n.n(s),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[n("v-img",{attrs:{src:e.offers[e.id].image,height:"200px"}}),n("v-card-title",[e._v(e._s(e.offers[e.id].name))]),n("v-card-subtitle",[e._v("Sie besitzen "+e._s(e.balance)+" von "+e._s(e.offers[e.id].max)+" Coins")]),n("v-card-subtitle",[e._v("Preis pro Coin: 5€")]),n("v-card-actions",{staticStyle:{"margin-left":"auto","margin-right":"auto",width:"100%"}},[n("v-btn",{attrs:{color:"green",text:""}},[e._v("Kaufen")]),n("v-btn",{attrs:{color:"red",text:""}},[e._v("Verkaufen")]),n("v-btn",{attrs:{color:"red",text:""}},[e._v("Mehr")])],1)],1)},u=[],l={name:"app",props:["balance","id"],data(){return{offers:[{name:"Audi R8",image:"https://i.ebayimg.com/00/s/NDgwWDY0MA==/z/O-4AAOSwIvdd37Bd/$_20.jpg",max:1e6,price:20},{name:"Porsche 911",image:"https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/zAEAAOSw7xZd1Sl4/$_20.jpg",max:1e6,price:70},{name:"Mercedes-Benz SL 380",image:"https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/kukAAOSw-c9d~TYe/$_20.jpg",max:1e6,price:5}]}}},c=l,d=n("2877"),y=n("6544"),f=n.n(y),m=n("8336"),b=n("b0af"),v=n("99d9"),h=n("adda"),T=Object(d["a"])(c,p,u,!1,null,null,null),w=T.exports;f()(T,{VBtn:m["a"],VCard:b["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardTitle:v["c"],VImg:h["a"]});const g="0x509eb175Ddba72519Ab55E5433485E096a53F4Fc",x=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"index",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"initialSupply",type:"uint256"}],name:"createOffer",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"tokensOf",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],payable:!1,stateMutability:"nonpayable",type:"function"}],O="http://127.0.0.1:9545",_="again indicate sadness search update gossip bitter truth empower dolphin caught club",M=n("d73b");var A={name:"app",components:{offer:w},data(){return{web3:null,account:null,contractInstance:null,isLoading:!1,reciept:null,wallet:void 0,balances:[10,50,80],maxTokens:[100,100,100],accounts:[]}},methods:{async balanceOf(e,t){let n=await this.contractInstance.methods.balanceOf(e,t).call();return n},async index(){let e=await this.contractInstance.methods.index().call();return e},async tokensOf(){let e=await this.contractInstance.methods.tokensOf().call({from:this.account});return e}},watch:{async account(){if(this.account){this.balances=[];let e=await this.tokensOf();console.log(e);for(let n of e){let e=await this.balanceOf(this.account,n);this.balances.push(e)}let t=await this.web3.eth.getAccounts();this.accounts=t}}},mounted(){let e=new M(_,new o.a.providers.HttpProvider(O),0,2);this.web3=new o.a(e),this.contractInstance=new this.web3.eth.Contract(x,g),this.web3.eth.getAccounts().then(e=>{console.log(e),this.account=e[0]})}},j=A,S=(n("034f"),n("62ad")),k=n("0fd9"),I=n("b974"),C=Object(d["a"])(j,i,r,!1,null,null,null),F=C.exports;f()(C,{VCol:S["a"],VRow:k["a"],VSelect:I["a"]});var P=n("f309");a["a"].use(P["a"]);var V=new P["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:V,render:function(e){return e(F)}}).$mount("#app")},"8a23":function(e,t,n){}});
//# sourceMappingURL=app.624788cc.js.map