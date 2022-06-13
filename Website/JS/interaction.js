const ABI = window.abi;
const contractAddress = "0x0241eef4BbC149FFA80Eb3eb550530582b9249dD";
let account;
let balance;
let deposited;
let contract;
let netID;
let mode;
loginWithEth();

accountInterval = setInterval(function() {
    if (web3.eth.accounts[0] !== account) {
      account = web3.eth.accounts[0];
      updateInterface();
    }
  }, 100);


async function loginWithEth(){
    if(window.ethereum){
        await ethereum.request({ method: 'eth_requestAccounts' });
        window.web3 = await new Web3(ethereum);
        await getID();
        console.log(netID);
        if (netID != 61){
            console.log("The current Metamask/Web3 network is not Ethereum Classic, please connect to the ETC network.");
            alert("The current Metamask/Web3 network is not Ethereum Classic, please connect to the ETC network.");
            return("Failed to connect")
        }
        accountarray = await web3.eth.getAccounts();
        contract = new window.web3.eth.Contract(ABI, contractAddress, window.web3);
        account = accountarray[0];
        removeOverlay();
        UpdateDetails();
        document.getElementById('WalletB').innerText = "Connected";
    } else {
        alert("No ETHER Wallet available")
    }
    console.log(account);
}

web3.currentProvider.publicConfigStore.on('update', loginWithEth());


async function getID(){
    let idhex = web3.eth._provider.chainId;
    netID = parseInt(idhex, 16);

    return(netID);
}

async function getMode(){
    let modearray = await contract.methods.GetContractMode().call();
    mode = modearray;
    return(mode[0]);
}

async function getBalance(){
    let fbalance = await web3.eth.getBalance(account);
    balance = (fbalance / 10**18).toFixed(2);
    console.log(balance)
    return(balance)
}

async function getETCDeposited(){
    let fdeposited = await contract.methods.GetETCdeposited(account).call();
    deposited = (fdeposited / 10**18).toFixed(2);
    return(deposited);
}