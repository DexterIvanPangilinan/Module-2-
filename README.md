# Module-2-
One specialized resource that lets people build blockchain networks and develop Dapps without middlemen is called Avalanche. Avalanche aims to be the solution for standard blockchain systems' problems with throughput and scalability. Because of the Avalanche consensus protocol, the platform offers remarkably quick transactions and finality in milliseconds. Developers may create blockchain networks with unique features and those that are most required by use cases thanks to Avalanche's layered architecture, which can adapt to scalability difficulties.

# Follow these steps to get the project up and running
1. Clone or download the project.
2. Run npm install to install the dependencies.
3. Run the npx hardhat node command to start the local blockchain.
4. Open a new terminal and run the npx hardhat run --network localhost scripts/deploy.js command to deploy the Bank contract.
5. Running npm run dev will start the development server.

# Set up MetaMask to use the Hardhat node.
1. Open your browser and navigate to the MetaMask addon.
2. In the upper right corner, click the account symbol and select "Settings".
3. Select "Add Network" from the "Networks" tab.
4. Fill in the following details:
     - The network name is Dex.
     - RPC URL: http://127.0.0.1:8545/.
     - The chain ID is 31337.
     - The currency symbol is: ETH.
5. To add the Hardhat network to MetaMask, click the "Save" button.

# Hardhat adds accounts using private keys for testing.
1. In the MetaMask extension, select the account icon in the upper right corner.
2. Choose "Import Account" or "Import Account Using Private Key" (depending on your MetaMask version).
3. Fill in the "Private Key" section using one of the private keys provided by Hardhat.
4. To view the list of private keys, open the terminal where you launched the Hardhat local network.
5. The private keys are displayed with the accounts produced by Hardhat.
6. To add the account to MetaMask, click "Import".
7. Repeat the procedures above to create additional accounts for testing.
   
# Usage
 To use the application, follow these directions:
1. link MetaMask to the Hardhat local network, then link your wallet to the program.
2. Click on Transfer Funds and enter the recipient's address and the amount you want to transfer.
3. To begin the transaction, click the "Transfer" button.
4. Confirm the transaction via MetaMask.
5. The transaction will be registered in the console, and the account balance will be adjusted.
   
# You can also personalize your account name.

1. Enter a new name in the input field.
2. To enter your new account name, click the "Update Name" button.
3. Confirm the transaction via MetaMask.
4. The account name will be altered, and the changes will be reflected in the account details.

# Author
Dexter Ivan A. Pangilinan 3.1 BSIT


