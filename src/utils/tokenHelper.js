import { ethers } from 'ethers';

const daiAddress = import.meta.env.VITE_DAI_ADDRESS;
const maticAddress = import.meta.env.VITE_MATIC_ADDRESS;

// Hayek链上【Hayek】币的余额
const balanceOf = async (wallet) => {
  const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
  const result = await provider.getBalance(wallet);
  let balance = ethers.utils.formatEther(result);
  return balance;
}

// Hayek链上【DAI】币的余额
const balanceOfDAI = async (wallet) => {
  const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
  const smmAbi = ["function balanceOf(address account) external view returns (uint256)"];

  console.log('balanceOfDAI: ', daiAddress);
  const contract = new ethers.Contract(daiAddress, smmAbi, provider);
  const result = await contract.balanceOf(wallet);
  let balance = ethers.utils.formatEther(result);
  return balance;
}

// Hayek链上【Matic】币的余额
const balanceOfMatic = async (wallet) => {
  const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
  const smmAbi = ["function balanceOf(address account) external view returns (uint256)"];

  console.log('balanceOfMatic: ', maticAddress);
  const contract = new ethers.Contract(maticAddress, smmAbi, provider);
  const result = await contract.balanceOf(wallet);
  let balance = ethers.utils.formatEther(result);
  return balance;
}

// Polygon链上【Polygon】币的余额
const balanceOfDaiOnPolygon = async(wallet) =>{
  const provider = new ethers.providers.Web3Provider(window.polygon);
  const daiAbi = ["function balanceOf(address) external view returns (uint)"];
  const contract = new ethers.Contract("0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", daiAbi, provider);
  const result = await contract.balanceOf(wallet);
  let balance = ethers.utils.formatEther(result);
  return balance;
}

// Polygon链上【Matic】币的余额
const balanceOfMaticOnPolygon = async(wallet) =>{
  const provider = new ethers.providers.Web3Provider(window.polygon);
  const result = await provider.getBalance(wallet);
  let balance = ethers.utils.formatEther(result);
  return balance;
}

const blockNumber = async () =>{
  const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
  let number = await provider.getBlockNumber();
  return number;
}

// Hayek链上【Hayek】币转账
const transferHyk = async(address, amount) =>{
  const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
  const signer = provider.getSigner();  

  try{
    let _amount = ethers.utils.parseEther(amount.toString());
    const tx = await signer.sendTransaction({ to: address, value: _amount });
    await tx.wait();
    return true;
  } catch (error){
    console.log(error);
    return false;
  }
}

// Polygon链上【Matic】币转账
const transferMatic = async(address, amount) =>{
  const provider = new ethers.providers.Web3Provider(window.polygon);
  const signer = provider.getSigner();

  try{
    let _amount = ethers.utils.parseEther(amount);
    const tx = signer.sendTransaction({to: address, value: _amount});
    await tx.wait();
    return true;
  } catch (error){
    console.log(error);
    return false;
  }
}

const _ERC20transfer = async(provider, raddress, amount, ERC20address, deci)=> {
  const ERC20ABI = ["function transfer(address to, uint256 amount) external returns (bool)"];
  try {
    const signer = provider.getSigner()
    const contract = new ethers.Contract(ERC20address, ERC20ABI, provider);
    const daiWithSigner = contract.connect(signer);     
    const daiamount = ethers.utils.parseUnits(amount, deci);
    const tx = await daiWithSigner.transfer(raddress, daiamount, { gasLimit: 80000 });
    return true;
  } catch (error){
    console.log(error);
    return false;
  }
}

// Hayek链上【ERC20】币转账
const hayekTransfer = async(target, amount, addrErc20) =>{
  const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
  _ERC20transfer(provider, target, amount, addrErc20, 18);
}

// Polygon链上【ERC20】币转账
const polygonTransfer = async(target, amount, addrErc20) =>{
  const provider = new ethers.providers.Web3Provider(window.polygon);
  _ERC20transfer(provider, target, amount, addrErc20, 18);
}

export { balanceOf, balanceOfDAI, balanceOfMatic, balanceOfDaiOnPolygon, balanceOfMaticOnPolygon, blockNumber, transferHyk, transferMatic, hayekTransfer, polygonTransfer }