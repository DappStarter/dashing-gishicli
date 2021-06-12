require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note oval common half enrich swallow spray'; 
let testAccounts = [
"0x9242d8d9c385d2903d5112d8a7ea27eb3ae485666121ddb71d4f7082e74b82b9",
"0x6652a394efe9aeadc4ba8e2af502fc9f34b7c3869b7702820f97ce9528e5fa04",
"0xae84e4a622b9a78f22df75acb82f5ce223d3de0091b4bec98ce3272f24bad899",
"0x95e632b5782549e54c7ba6d1dff7c4e324b2772f91372f7ff7f3fcf028037003",
"0xff8b5ba6e548ff86f770be427b9500e6e200627bed2bb42fbbc4ecd1c75f700b",
"0x63272b2308dac96dfced714fd8e3843fac89ae1be7621363c74892121fba358b",
"0x158734dffe2b79895bfe3a789b3a74db9dd9ae2bd1acac2311af09a0c0e48f19",
"0x4cf80eb877b43bcd66a1bafcd55afde5983d9228bf57b42945d4eb6d8b19be32",
"0x2db85db7a04c376d6fdfe12e610ab2dd4b4e3c2c0e15e24f97f6fb9740a1ef29",
"0xc73a37dcb860a97bea48a534daafd8378dda1ccf48366fa2b0e99d78375344f2"
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

