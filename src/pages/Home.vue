<template>
  <div class="container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img class="swipe-img" :src="swipe1" /></van-swipe-item>
      <van-swipe-item><img class="swipe-img" :src="swipe2" /></van-swipe-item>
      <van-swipe-item><img class="swipe-img" :src="swipe3" /></van-swipe-item>
    </van-swipe>
    <van-cell-group title="網絡狀態">
      <van-cell title="區塊號" :value="pageData.block_no" />
      <van-cell title="IPFS結點">
        <template #value>{{ pageData.ipfs_nodes }} / {{ pageData.gateway_nodes }} / {{ pageData.pin_nodes }}</template>
      </van-cell>
    </van-cell-group>
    <van-cell-group title="錢包資訊" class="wallet-cell">
      <van-cell title="地址" clickable @click="copyToClipboard(wallet, '錢包地址已複製！');" is-link>
        <template #value>
          <van-text-ellipsis row="1" :content="shortWallet1()"/>
        </template>
        <template #right-icon>
          <van-icon name="label-o" color="gray" size="16" style="margin-top: 3px;" />
        </template>
      </van-cell>
      <van-cell title="HYK" :value="pageData.balance" clickable @click="dlgTransfer.showDialog(total)" is-link />
      <van-cell title="DAI" :value="pageData.daiBalance" is-link to="/daipage" />
    </van-cell-group>
    <van-cell-group title="快速導航">
    <van-grid :column-num="3" :gutter="0">
      <van-grid-item icon="tv-o" text="精彩視頻" icon-color="#0bbd8b" url="web3://xvideos.web3/" />
      <van-grid-item icon="question-o" text="代理商指南" icon-color="#0bbd8b" to="/agentdoc" />
      <van-grid-item icon="hot-o" text="域名註冊" icon-color="#0bbd8b" url="web3://dns.web3/" />
      <van-grid-item icon="shield-o" text="科學上網" icon-color="#0bbd8b" url="web3://jiucai.web3" />
      <van-grid-item icon="refund-o" text="猜大小" icon-color="#0bbd8b" url="web3://bet365.web3/" />      
      <van-grid-item icon="video-o" text="短視頻" icon-color="#0bbd8b" url="web3://hayek.web3/web3tube/" />
      <van-grid-item icon="exchange" text="Uniswap兌換" icon-color="#0bbd8b" url="http://127.0.0.1:8080/ipfs/QmdbcZArpWHsjRpaNwYK7MagXzC6Wap58AHuBvvELfBogK/dapp/uniswapv2/" />
      <van-grid-item icon="cash-o" text="DOTC交易" icon-color="#0bbd8b" url="http://127.0.0.1:8080/ipfs/QmdbcZArpWHsjRpaNwYK7MagXzC6Wap58AHuBvvELfBogK/dapp/dotc/" />
      <van-grid-item icon="info-o" text="系統資訊" icon-color="#0bbd8b" url="./system/" />
    </van-grid>
  </van-cell-group>
  </div>
  <dialog-transfer ref="dlgTransfer" @on-ok="loadBalance" />
</template>
<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useAppData } from '@/store/appData';
import { useSemm } from '@/utils/useSemm';
import { ethers } from 'ethers';
import { balanceOf, balanceOfDAI, blockNumber } from '@/utils/tokenHelper';
import DialogTransfer from '../components/Dialog-Transfer.vue'
import swipe1 from "../assets/swipe/swipe1.jpg";
import swipe2 from "../assets/swipe/swipe2.jpg";
import swipe3 from "../assets/swipe/swipe3.jpg";

const router = useRouter();
const appData = useAppData();
const { shortWallet1, copyToClipboard } = useSemm();

const dlgTransfer = ref(null);
let wallet = computed(() => appData.wallet);
const pageData = reactive({
  block_no: '0',
  ipfs_nodes: '0',
  gateway_nodes: '0',
  pin_nodes: '0',
  balance: '0.00000000',
  daiBalance: '0.00000000'
})
let timerId = 0;

const loadBalance = () => {
  if(appData.wallet === '') return;
  balanceOf(appData.wallet).then(value =>{
    pageData.balance = (+value).toFixed(8);
    console.log('value=', value)
  })

  balanceOfDAI(appData.wallet).then(value =>{
    pageData.daiBalance = (+value).toFixed(8);
    console.log('value=', value)
  })

  blockNumber().then(value =>{
    pageData.block_no = value;
  })
}

const showIpfsNodes = () =>{
  pageData.ipfs_nodes = window._tw_.getIPFSnodes();
  pageData.gateway_nodes = window._tw_.getIPFSPublicGateways();
  pageData.pin_nodes = window._tw_.getIPFSPublicPins();
}

const checkSyncing = () =>{
  const urlRPC = import.meta.env.VITE_RPC_LOCAL;
  const provider = new ethers.providers.JsonRpcProvider(urlRPC);
  provider.send('eth_syncing').then(result =>{
    if(result !== false && (result.highestBlock-result.currentBlock) > 1000){
      router.push('/syncing')
    } else {
      // alert(result)
    }
  }).catch(error=>{
    console.log(error);
  })
}

const stopTimer = () => {
  if(timerId>0) clearInterval(timerId);
  timerId = 0;
}

onMounted(async() => {
  console.log('Home-onMounted------begin, login=', appData.isLogin, appData.wallet);
  setTimeout(() => {
    checkSyncing();
    loadBalance();
  }, 2000);
  if(window._tw_){
    showIpfsNodes();
    timerId = setInterval(() => {
      showIpfsNodes();
    }, 3000);
  }
  
  console.log('Home-onMounted------end');
});

onBeforeUnmount(async () =>{
  console.log('Home-onBeforeMount---------begin');
  stopTimer();
  console.log('Home-onBeforeMount---------end');
})
</script>

<style scoped>
.container{
  height: 100%;
  background-color: #f7f8fa;
}

.my-swipe{
  margin: 0px 10px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  min-height: 154px;
  background-color: #0bbd8b;
}

.swipe-img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>