var e=require("ethers"),n=[{inputs:[{internalType:"address",name:"_lpContract",type:"address"},{internalType:"address",name:"_initialOwner",type:"address"},{internalType:"address",name:"_governance",type:"address"},{internalType:"address",name:"_bqBTC",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"CoverNotAvailable",type:"error"},{inputs:[],name:"InsufficientPoolBalance",type:"error"},{inputs:[],name:"InvalidAmount",type:"error"},{inputs:[],name:"InvalidCoverDuration",type:"error"},{inputs:[],name:"LpNotActive",type:"error"},{inputs:[],name:"NameAlreadyExists",type:"error"},{inputs:[],name:"NoClaimableReward",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{inputs:[],name:"ReentrancyGuardReentrantCall",type:"error"},{inputs:[],name:"UnsupportedCoverType",type:"error"},{inputs:[],name:"UserHaveAlreadyPurchasedCover",type:"error"},{inputs:[],name:"WrongPool",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"coverId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"},{indexed:!1,internalType:"enum CoverLib.RiskType",name:"riskType",type:"uint8"}],name:"CoverCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"coverValue",type:"uint256"},{indexed:!1,internalType:"uint256",name:"coverFee",type:"uint256"},{indexed:!1,internalType:"enum CoverLib.RiskType",name:"riskType",type:"uint8"}],name:"CoverPurchased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"coverId",type:"uint256"},{indexed:!1,internalType:"string",name:"coverName",type:"string"},{indexed:!1,internalType:"enum CoverLib.RiskType",name:"riskType",type:"uint8"}],name:"CoverUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"poolId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"PayoutClaimed",type:"event"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"NextLpClaimTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bqBTC",outputs:[{internalType:"contract IbqBTC",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"bqBTCAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_poolId",type:"uint256"}],name:"claimPayoutForLP",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"coverCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"coverExists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"coverFeeBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"coverIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"covers",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"coverName",type:"string"},{internalType:"enum CoverLib.RiskType",name:"riskType",type:"uint8"},{internalType:"string",name:"chains",type:"string"},{internalType:"uint256",name:"capacity",type:"uint256"},{internalType:"uint256",name:"cost",type:"uint256"},{internalType:"uint256",name:"capacityAmount",type:"uint256"},{internalType:"uint256",name:"coverValues",type:"uint256"},{internalType:"uint256",name:"maxAmount",type:"uint256"},{internalType:"uint256",name:"poolId",type:"uint256"},{internalType:"string",name:"CID",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"coverId",type:"uint256"},{internalType:"string",name:"_cid",type:"string"},{internalType:"enum CoverLib.RiskType",name:"_riskType",type:"uint8"},{internalType:"string",name:"_coverName",type:"string"},{internalType:"string",name:"_chains",type:"string"},{internalType:"uint256",name:"_capacity",type:"uint256"},{internalType:"uint256",name:"_cost",type:"uint256"},{internalType:"uint256",name:"_poolId",type:"uint256"}],name:"createCover",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"deleteExpiredUserCovers",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllAvailableCovers",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"coverName",type:"string"},{internalType:"enum CoverLib.RiskType",name:"riskType",type:"uint8"},{internalType:"string",name:"chains",type:"string"},{internalType:"uint256",name:"capacity",type:"uint256"},{internalType:"uint256",name:"cost",type:"uint256"},{internalType:"uint256",name:"capacityAmount",type:"uint256"},{internalType:"uint256",name:"coverValues",type:"uint256"},{internalType:"uint256",name:"maxAmount",type:"uint256"},{internalType:"uint256",name:"poolId",type:"uint256"},{internalType:"string",name:"CID",type:"string"}],internalType:"struct CoverLib.Cover[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAllParticipants",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getAllUserCovers",outputs:[{components:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"coverId",type:"uint256"},{internalType:"enum CoverLib.RiskType",name:"riskType",type:"uint8"},{internalType:"string",name:"coverName",type:"string"},{internalType:"uint256",name:"coverValue",type:"uint256"},{internalType:"uint256",name:"claimPaid",type:"uint256"},{internalType:"uint256",name:"coverPeriod",type:"uint256"},{internalType:"uint256",name:"endDay",type:"uint256"},{internalType:"bool",name:"isActive",type:"bool"}],internalType:"struct CoverLib.GenericCoverInfo[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCoverFeeBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_coverId",type:"uint256"}],name:"getCoverInfo",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"coverName",type:"string"},{internalType:"enum CoverLib.RiskType",name:"riskType",type:"uint8"},{internalType:"string",name:"chains",type:"string"},{internalType:"uint256",name:"capacity",type:"uint256"},{internalType:"uint256",name:"cost",type:"uint256"},{internalType:"uint256",name:"capacityAmount",type:"uint256"},{internalType:"uint256",name:"coverValues",type:"uint256"},{internalType:"uint256",name:"maxAmount",type:"uint256"},{internalType:"uint256",name:"poolId",type:"uint256"},{internalType:"string",name:"CID",type:"string"}],internalType:"struct CoverLib.Cover",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"_poolId",type:"uint256"}],name:"getDepositClaimableDays",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"_poolId",type:"uint256"}],name:"getLastClaimTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"_coverId",type:"uint256"}],name:"getUserCoverInfo",outputs:[{components:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"coverId",type:"uint256"},{internalType:"enum CoverLib.RiskType",name:"riskType",type:"uint8"},{internalType:"string",name:"coverName",type:"string"},{internalType:"uint256",name:"coverValue",type:"uint256"},{internalType:"uint256",name:"claimPaid",type:"uint256"},{internalType:"uint256",name:"coverPeriod",type:"uint256"},{internalType:"uint256",name:"endDay",type:"uint256"},{internalType:"bool",name:"isActive",type:"bool"}],internalType:"struct CoverLib.GenericCoverInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getUserParticipation",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"lpAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"lpContract",outputs:[{internalType:"contract ILP",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"participants",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"participation",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_coverId",type:"uint256"},{internalType:"uint256",name:"_coverValue",type:"uint256"},{internalType:"uint256",name:"_coverPeriod",type:"uint256"},{internalType:"uint256",name:"_coverFee",type:"uint256"}],name:"purchaseCover",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_coverId",type:"uint256"},{internalType:"string",name:"_coverName",type:"string"},{internalType:"enum CoverLib.RiskType",name:"_riskType",type:"uint8"},{internalType:"string",name:"_cid",type:"string"},{internalType:"string",name:"_chains",type:"string"},{internalType:"uint256",name:"_capacity",type:"uint256"},{internalType:"uint256",name:"_cost",type:"uint256"},{internalType:"uint256",name:"_poolId",type:"uint256"}],name:"updateCover",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_coverId",type:"uint256"}],name:"updateMaxAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"_coverId",type:"uint256"},{internalType:"uint256",name:"_claimPaid",type:"uint256"}],name:"updateUserCoverValue",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"userCovers",outputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"coverId",type:"uint256"},{internalType:"enum CoverLib.RiskType",name:"riskType",type:"uint8"},{internalType:"string",name:"coverName",type:"string"},{internalType:"uint256",name:"coverValue",type:"uint256"},{internalType:"uint256",name:"claimPaid",type:"uint256"},{internalType:"uint256",name:"coverPeriod",type:"uint256"},{internalType:"uint256",name:"endDay",type:"uint256"},{internalType:"bool",name:"isActive",type:"bool"}],stateMutability:"view",type:"function"}];function t(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}var i,a=function(n,i,a,p){try{return Promise.resolve(t(function(){return Promise.resolve(r(n,p)).then(function(n){if(!n||!n.cost)throw new Error("Invalid cover info or cost");var t=n.cost/100*i*(a/365);return{numericFee:t,weiValue:e.ethers.parseEther(t.toFixed(18))}})},function(e){throw console.error("Error calculating cover fee:",e),e}))}catch(e){return Promise.reject(e)}},r=function(t,i){return Promise.resolve(p()).then(function(a){var r=new e.ethers.Contract(i,n,a);return Promise.resolve(r.getCoverInfo(t)).then(function(e){return{id:Number(e[0]),name:e[1],risk:Number(e[2]),chains:e[3],capacity:Number(e[4]),cost:Number(e[5]),capacityAmount:Number(e[6]),coverValues:Number(e[7]),maxAmount:Number(e[8]),poolId:Number(e[9]),cid:e[10]}})})},p=function(){try{if(!window.ethereum)throw new Error("MetaMask is not installed");var n=new e.ethers.BrowserProvider(window.ethereum);return Promise.resolve(n.send("eth_accounts",[])).then(function(e){return e.length>0?Promise.resolve(n.getSigner()):Promise.resolve(n.send("eth_requestAccounts",[])).then(function(){return Promise.resolve(n.getSigner())})})}catch(e){return Promise.reject(e)}};!function(e){e[e.COREDAO=1115]="COREDAO",e[e.BEVM=11503]="BEVM",e[e.MERLIN=686868]="MERLIN"}(i||(i={}));var u=["0xEbC11e13375DEc4c43118b8f530b0dc31fF9e4a7","0x9552c86e01B431066AddE3096DFB482CbD82A185","0x180e565b81422e9F38e8e852Cd7CA3CD50AB8777"];module.exports=/*#__PURE__*/function(){function s(e,n){this.protocolName=void 0,this.coverId=void 0,this.protocolName=e,this.coverId=n}var y=s.prototype;return y.displayConfig=function(){console.log("Client Config: "+this.protocolName+", Cover ID: "+this.coverId)},y.coverInfo=function(e){try{return Promise.resolve(r(this.coverId,e))}catch(e){return Promise.reject(e)}},y.userPurchaseCover=function(i,r,u){try{return Promise.resolve((s=this.coverId,y=i,o=r,l=u,Promise.resolve(p()).then(function(i){var r=new e.ethers.Contract(l,n,i);return Promise.resolve(a(s,y,o,l)).then(function(n){var i=n.weiValue;console.log(i);var a=e.ethers.parseEther(y.toString());return t(function(){return Promise.resolve(r.purchaseCover(s,a,o,i)).then(function(e){return Promise.resolve(e.wait()).then(function(e){return e.hash})})},function(e){throw e})})})))}catch(e){return Promise.reject(e)}var s,y,o,l},y.calculateUserCoverFee=function(e,n,t){try{return Promise.resolve(a(this.coverId,e,n,t)).then(function(e){return e.numericFee})}catch(e){return Promise.reject(e)}},y.getCoverAddress=function(e){return function(e){switch(e){case i.COREDAO:return u[0];case i.BEVM:return u[1];case i.MERLIN:return u[2];default:return""}}(e)},s}();
