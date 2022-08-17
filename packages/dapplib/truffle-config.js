require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind concert grace indoor flat slender'; 
let testAccounts = [
"0x95b2ca8935d49b9bc0fa752d7dbbbc1bf50081225de264741fbf15b47801b259",
"0x108810764a19adbd9ae1fdc9e182d6a1f94f0c5b7179b7fdf6cc786eb826ce86",
"0x0a35a438a65a2bacd26f4b0c0e6305a0ac17593b1c60ee58f1503a413bd909ec",
"0x55df48bf04c682e1b3baa8e9b05b799a35cbf352e7ef75a54082e087d66dec57",
"0x847d4965ad9fecc7795aed373fa573e0955c182eb8b6259ea663170295a6f348",
"0x112c8d1b5a30e02e925734e89b636876ed6106a066967710d73f6ec934f1cebf",
"0x4be1b1f4b9af9255163abaf42484535d719a301d197ef679ea97420b996c3142",
"0x0a1660131de847557e86090766a61ad359b4ed4f73b380d1c22a3b729cf8ba07",
"0x403a67057dd60c78583b6a12af873b3f4efacdf692af834f59a1a91140707070",
"0x21a9f0f53f7730d931a5aa41af4cf3c219cb04b132e06388031ffd9bb641fe68"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

