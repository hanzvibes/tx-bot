
# TX-BOT

A simple CLI tools to empty crypto wallet & send to your other wallet using Nodejs with Ethers API


## Run Locally

Clone the project

```bash
  git clone https://github.com/hanzvibes/tx-bot
```

Go to the project directory

```bash
  cd tx-bot
```

Install dependencies

```bash
  npm install
```

Start

```bash
  node index.js
```


## Configure edit ```index.js```

* Your JSON-RPC Provider

```javascript
const provider = new ethers.providers.JsonRpcProvider("your_url")
```

* Your main account address to receive balance

```javascript
const receiverWallet = 'your_address'
```

* Your other wallet private-key to send balance to main account address

```javascript
const privateKeys = ["your_wallet_privatekey"]
```
## Running Example Demo using Dcoder & Termux

![App Screenshot](https://github.com/hanzvibes/tx-bot/raw/main/assets/termux1.png)

![App Screenshot](https://github.com/hanzvibes/tx-bot/raw/main/assets/termux2.png)

![App Screenshot](https://github.com/hanzvibes/tx-bot/raw/main/assets/dcoder1.png)

![App Screenshot](https://github.com/hanzvibes/tx-bot/raw/main/assets/dcoder2.png)

## Free JSON-RPC Provider

If you want to create free JSON-RPC Provider account

- 🌐 [Moralis](https://moralis.io/)
- 🌐 [Ankr](https://ankr.com/)
- 🌐 [Infura](https://infura.io/)


## Contact us

If you want discuss, feel free to visit

- 🌐 [Telegram Channel](https://t.me/whendistriser)
- 👥 [Find me on Facebook](https://fb.me/4RAEHAN/)

