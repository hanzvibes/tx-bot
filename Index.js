const { ethers } = require('ethers')
const provider = new ethers.providers.JsonRpcProvider("https://speedy-nodes-nyc.moralis.io/dbe57fb8a6bbbe9da715540f/eth/goerli") // Change This
const receiverWallet = '0x63113FB1B1766D253CcCF0A9f67ad38d047d9b56' // Change This
const privateKeys = ["412bfd062b9ff35126520b3eb3d5ff258"] // Change This

// Clear Console
console.clear() 

//ASCII Banner
var figlet = require('figlet');

figlet.text('TX - Bot', {
    font: 'Standard',
    horizontalLayout: 'default',
    width: 40,
    whitespaceBreak: false
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    });

// Welcome Message
    
    provider.once('block', (transaction) => {
    console.log("Wallet Balance Auto Sender / Address Cleaner\n");
    console.log("- https://github.com/hanzvibes/tx-bot\n");
    console.log("Current Network State :\n");
    console.log("Block Number : ",transaction);
    });
    provider.getGasPrice().then((gasPrice) => {
    gasPriceString = gasPrice.toString();
    console.log("Current Gas Price : ",gasPriceString);
    console.log("\n");
    });

const txBot = async =>{
    provider.on('block', async () => {    
    const { chainId, name } = await provider.getNetwork()
        console.log('<',name,'>', 'Waiting for transaction...');       
        for (let i = 0; i < privateKeys.length; i++){
            const _signer = new ethers.Wallet(privateKeys[i]);
            const signer = _signer.connect(provider);
            const balance = await provider.getBalance(signer.address);
            const txBuffer = ethers.utils.parseEther("0.0005");
            if (balance.sub(txBuffer) > 0){
                console.log('<',name,'>' , "New balance detected...");
                const amount = balance.sub(txBuffer);
                console.log('<',name,'>' , "Sending....");
                console.log('<',name,'>' , "Waiting transaction hash...");                
                try {
                    const transaction = await signer.sendTransaction({
                        to: receiverWallet,
                        value: amount,
                        gasLimit: ethers.utils.hexlify(100000) // 100 Gwei
                    }); 
                   console.log(transaction)                   
                   }
                finally {
                console.log('<',name,'>' , "Success ✓");
                console.log('<',name,'>' , `Total amount : ~${ethers.utils.formatEther(balance)}`);
                }
            }
        }
    })
}
txBot();
