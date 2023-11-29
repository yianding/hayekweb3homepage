import { ethers } from 'ethers';

const daiAddress = import.meta.env.VITE_TOKEN_ADDRESS;

const balanceOf = async (wallet) => {
  const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
  const result = await provider.getBalance(wallet);
  let balance = ethers.utils.formatEther(result);
  return balance;
}

const balanceOfDAI = async (wallet) => {
  const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
  const smmAbi = ["function balanceOf(address account) external view returns (uint256)"];

  console.log('balanceOfDAI: ', daiAddress);
  const contract = new ethers.Contract(daiAddress, smmAbi, provider);
  const result = await contract.balanceOf(wallet);
  let balance = ethers.utils.formatEther(result);
  return balance;
}

const balanceOfDaiOnPolygon = async(wallet) =>{
  const provider = new ethers.providers.Web3Provider(window.polygon);
  const daiAbi = ["function balanceOf(address) external view returns (uint)"];
  const contract = new ethers.Contract("0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", daiAbi, provider);
  const result = await contract.balanceOf(wallet);
  let balance = ethers.utils.formatEther(result);
  return balance;
}

const blockNumber = async () =>{
  const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
  let number = await provider.getBlockNumber();
  return number;
}

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

const hayekTransfer = async(target, amount, addrErc20) =>{
  const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
  _ERC20transfer(provider, target, amount, addrErc20, 18);
}

const polygonTransfer = async() =>{
  const provider = new ethers.providers.Web3Provider(window.polygon);
  _ERC20transfer(provider, target, amount, addrErc20, 18);
}

export { balanceOf, balanceOfDAI, balanceOfDaiOnPolygon, blockNumber, transferHyk, hayekTransfer, polygonTransfer }