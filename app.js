console.log('hello from nodejs');
const  ethers  = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/fbab96d63f4d49b193bea015ea1468fe")
const address = '0x7638C4cBd9fbF031Ee8AC374Bd6bd2241552eDC7'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()