const { Blockchain, Transaction } = require('./blockchain.js');

//for generating public,private keys to sign the transaction
const EC = require('elliptic').ec;
//secp256k1 is the algorithm used in bitcoin.Instead we can use any other elliptic curve
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('7fa55025a4a49206065f8f1a29e3bfd8b0a9c6b252ad1c69275055a034b860e9');
const myWalletAddress = myKey.getPublic('hex');

let newCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress, 'address1', 10);
tx1.signTransaction(myKey);
newCoin.addTransaction(tx1);
newCoin.miningPendingTransactions(myWalletAddress);
console.log(JSON.stringify(newCoin, null, 4));
console.log("Is blockchain valid " + newCoin.isChainValid());
console.log("balance of rajat: " + newCoin.getBalanceOfAddress(myWalletAddress));
/*newCoin.miningPendingTransactions('rajat');
console.log(JSON.stringify(newCoin, null, 4));
console.log("Is blockchain valid " + newCoin.chainValid());
console.log("balance of rajat: " + newCoin.getBalanceOfAddress('rajat'));
*/