const  ethers  = require("ethers");

const INFURA_ID = 'b4cec41061d5436499914811b615d4f0'
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_ID}`,network="rinkeby")

const account1 = '0x1Bc3974E87761333a014EA138c041FB32B39d59E' // Your account address 1
const account2 = '0x968CE189Da88f881b4b2C437c2E5034a462AE4Ba' // Your account address 2

const privateKey1 = '0x2db79f905fdaa428da80cbc95697bb7cae45a15a4505d5ee8ee4fe92adf553a8' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)


const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = '0x01BE23585060835E02B77ef475b0Cc51aA1e0709'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)
    const balance1 = await contract.balanceOf(account2)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)
    console.log(`Balance of sender: ${balance1}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()