const ethers = require('ethers');
const INFURA_ID = 'e34cb2610e54410db13b6676a0e29a95';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);
const account1 = "0x968CE189Da88f881b4b2C437c2E5034a462AE4Ba";
const account2 = "0x1Bc3974E87761333a014EA138c041FB32B39d59E";
const privateKey = "0x2210b328b01025c458eee5ce62ffe1e2757da194188bb940ce085068e8918653";
const wallet = new ethers.Wallet(privateKey,provider)

const main = async() => {
   
    const tx = await wallet.sendTransaction({
        to : account2,
        value : (ethers.utils.parseEther("0.0000000005"))
    })


await tx.wait()
console.log(tx)

}

main()