import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
 
    setATM(atmContract);
  }

  const getBalance = async() => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  }

  const deposit = async() => {
    if (atm) {
      let tx = await atm.deposit(50);
      await tx.wait()
      getBalance();
    }
  }

  const withdraw = async() => {
    if (atm) {
      let tx = await atm.withdraw(15);
      await tx.wait()
      getBalance();
    }
  }
  const getAll = async () => {
    if (atm && balance !== undefined) {
      // Withdraw entire balance
      let tx = await atm.withdraw(balance);
      await tx.wait();
      getBalance();
    }
  };
  const exit = () => {
    setAccount(undefined);
    setATM(undefined);
    setBalance(undefined);
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }
  
    return (
        <center>
        <div>
          
          <p>Your Account: {account}</p>
          <p>Your Balance: {balance}</p><br></br>
          
          <button onClick={deposit}>Deposit 50 Token</button>  
          <button onClick={withdraw}>Withdraw 15 Token</button>  
          <button onClick={getAll}>Get all the Token</button> 
          <button onClick={exit}>Refresh</button>  
        </div>
        </center>
        
        
    )
}


  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
    <header><h1>Welcome to Dexter's ATM!</h1></header>
    {initUser()}
    <style jsx>{`
      .container {
        text-align: center;
        background-color: #f0f8ff; 
        padding: 20px;
        border-radius: 10px;
        margin-right: 10px;
      }
      header {
        background-color: #4682b4; 
        color: white;
        padding: 10px;
        border-radius: 10px;
        margin: 5px;
      }
      button {
        margin: 10px;
        padding: 10px 20px;
        background-color: #4CAF50; 
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: #45a049; 
      }
      p {
        font-size: 1.2em;
      }
    `}
    </style>
  </main>
)
}
