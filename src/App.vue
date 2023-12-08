<template>
  <router-view></router-view>
</template>
<script setup>
import { onMounted } from 'vue'
import { useAppData } from '@/store/appData';
import { ethers } from 'ethers';
import { showToast } from 'vant';

const appData = useAppData();

const connectWallet = async () => {
  console.log('App: connectWallet-----1');
  try{
    const provider = new ethers.providers.Web3Provider(window.hayek || window.ethereum);
    if(!provider) {
      showToast('請先安裝小狐狸(Metamask)錢包');
      return;
    }
    const accounts = await provider.send('eth_requestAccounts', []);
    if(accounts[0]){
      appData.wallet = accounts[0];
      appData.isLogin = true;
      console.log('連接錢包成功-----', accounts);
      console.log('App: connectWallet-----ok');
    } else {
      showToast('連接錢包失敗');
      console.log('App: connectWallet-----failed-1');
    }
  }catch( error ){
    appData.isLogin = false;
    console.log(error);
    console.log('App: connectWallet-----failed-2');
    showToast('連接錢包失敗');
  }
}

onMounted(async() => {
  console.log('App-onMounted---------begin');

  appData.daiToken = import.meta.env.VITE_DAI_ADDRESS;

  await connectWallet();
  console.log('App-onMounted---------end', appData.daiToken);
})
</script>