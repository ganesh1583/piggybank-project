# piggybank-project

A simple Ethereum smart contract and frontend dApp that lets users deposit and withdraw Ether — like a digital piggy bank.
Built with Solidity, Hardhat, React, Vite, and Ethers.js.

Project Structure
ether-piggy-bank/
├── backend/                 # Hardhat setup
|	  ├── .env 
|	  ├── .env.example
│   ├── contracts/
│   │   └── EtherPiggyBank.sol
│   ├── scripts/
│   │   └── deploy.js
│   └── hardhat.config.js
│
├── frontend/                # Vite + React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── contracts/
│   │   │   └── etherPiggyBank.js  # ABI + Address
│   │   └── main.jsx
│   └── vite.config.js



Run Locally
Install Dependencies
	cd backend
	npm install
	cd frontend
	npm install

Deploy Contract to Sepolia (use .env)
	cd backend
	npx hardhat run scripts/deploy.js --network sepolia

Start the Frontend
	cd frontend
	npm run dev

MetaMask Setup
	Connect your MetaMask wallet
	Switch to Sepolia Testnet
	Get test ETH from a faucet

# .env.example
# Replace with your own from Alchemy/Infura/QuickNode
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key

# Replace with your wallet private key (NEVER commit real .env!)
PRIVATE_KEY=your-private-key-here

(also make changed in your hardhat.config.js related to network)
