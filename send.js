const  ethers  = require("ethers");

const INFURA_ID = 'b4cec41061d5436499914811b615d4f0'
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`,network="kovan")

const account1 = '0x1Bc3974E87761333a014EA138c041FB32B39d59E' // Your account address 1
const account2 = '0x968CE189Da88f881b4b2C437c2E5034a462AE4Ba' // Your account address 2

const privateKey1 = '0x2db79f905fdaa428da80cbc95697bb7cae45a15a4505d5ee8ee4fe92adf553a8' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.0005")
    })

    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()