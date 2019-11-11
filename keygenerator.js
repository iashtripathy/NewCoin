//for generating public,private keys to sign the transaction
const EC = require('elliptic').ec;
//secp256k1 is the algorithm used in bitcoin.Instead we can use any other elliptic curve
const ec = new EC('secp256k1');
const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');
console.log("PK:" + publicKey);
console.log("PK:" + privateKey);

/*These two public and private keys are not only used to sign the transactions 
but also to verify our balance in the wallet*/