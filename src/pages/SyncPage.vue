<template>
  <div class="container">
    <div class="notice-bar">
      <div>正在同步區塊資訊...</div>
      <div>{{ progress }}</div>
    </div>
    <img class="syncing-img" :src="syncing" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import syncing from "../assets/syncing.jpg";

const router = useRouter();

let timerId = 0;
const progress = ref('');

const stopTimer = () => {
  if(timerId>0) clearInterval(timerId);
  timerId = 0;
}

const querySync = async() =>{
  const urlRPC = import.meta.env.VITE_RPC_LOCAL;
  const provider = new ethers.providers.JsonRpcProvider(urlRPC);
  provider.send('eth_syncing').then(result =>{
    if(result !== false && (result.highestBlock-result.currentBlock) > 100){
      let percent = 1.0 * result.currentBlock / result.highestBlock * 100;
      progress.value = `${percent.toFixed(1)}%`;
    } else {
      stopTimer();
      router.push('/');
    }
  })
}


onMounted(async() => {
  console.log('Syncing-onMounted------begin');
 
  setTimeout(querySync, 500);
  timerId = setInterval(querySync, 5000);
  
  console.log('Syncing-onMounted------end');
});

onBeforeUnmount(async () =>{
  console.log('Syncing-onBeforeMount---------begin');
  stopTimer();
  console.log('Syncing-onBeforeMount---------end');
})
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  background-color: #4a8fd3;
}
.notice-bar{
  position: absolute;
  width: 100%;
  height: 40px;
  background-color: #37d0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.notice-bar div{
  color: white;
  margin: 0px 10px;
}
.syncing-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>