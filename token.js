const ethers = require("ethers")
const INFURA_ID = 'b4cec41061d5436499914811b615d4f0'
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`,network="kovan")
const account1 = '0x1Bc3974E87761333a014EA138c041FB32B39d59E' // Your account address 1
const account2 = '0x968CE189Da88f881b4b2C437c2E5034a462AE4Ba'
const privateKey1 = '0x2db79f905fdaa428da80cbc95697bb7cae45a15a4505d5ee8ee4fe92adf553a8'
const wallet = new ethers.Wallet(privateKey1, provider)
const address = '0xa36085F69e2889c224210F603D836748e7dC0088'
const abi = [
    `function balanceOf(address)  view returns(uint)`,
    `function Transfer(address to, uint amount)  view returns(bool)`
] 
const contract = new ethers.Contract(address, abi , provider)
const main = async() => {
    const balance =  await contract.balanceOf(account1)
    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)
    const contractWallet =  contract.connect(wallet)
    const tx = await contractWallet.Transfer(account2, balance)
    await tx.wait()
    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}
main()
