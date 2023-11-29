<template>
  <div class="container">
    <page-header title="代理商攻略" @goback="router.push('/')" />
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="(item, index) in icons" :key="item.index">
        <template #icon>
          <img round width="30" height="30" :src="item" />
        </template>
        <template #text>
          <div class="video_desc">
            <span>{{ names[index] }}</span>
          </div>
        </template>
      </van-grid-item>
    </van-grid>
    <div class="step-div" v-for="item in steps" @click="watchIt(item)">
      <div><van-icon :name="item.icon" color="#0bbd8b" /><h4 style="display: inline;">{{ item.title }}</h4></div>
      <div>{{ item.desc }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PageHeader from '../components/PageHeader.vue';
import feiguo from "../assets/icons/feiguo.png";
import hayek from "../assets/icons/hayek.png";
import bnb from "../assets/icons/bnb.png";
import alipay from "../assets/icons/alipay.png";
import wechat from "../assets/icons/wechat.png";

const router = useRouter();

const icons = ref([feiguo, bnb, hayek, wechat, alipay]);
const names = ref(['飞瓜', '币安', 'Hayek', '微信', '支付宝']);
const steps = ref([
  {to:'/semmdesc', icon: 'fire', title: '项目介绍', desc: '带你快速了解每分钟赚取40元人民币的好项目，充分理解项目概况和项目运作流程。'},
  {to:'/bnbpage', icon: 'question', title: '安装币安 APP 并注册账号', desc: '学习加密货币交易所软件（币安）的下载、安装及使用流程，以及相关注意事项。'},
  {to:'/hayekpage', icon: 'info', title: '安装 Hayek-APP 并注册账号', desc: '学习去中心化区块链软件（Hayek）的下载、安装及使用流程，以及相关注意事项。'},
  {to:'/recharge', icon: 'checked', title: 'Hayek-APP 账号充值', desc: '快速学习加密货币买入、卖出、跨链转账操作流程，以及相关注意事项。'},
  {to:'/agentpage', icon: 'diamond', title: '如何成为代理商', desc: '快速学习如何成为代理商，如何买入和卖出会员账号相关操作流程。'}
])

const watchIt = (item) => {
  console.log(item.to);
  router.push(item.to);
}
</script>

<style scoped>
.container{
  padding: 0 16px;
  font-size: 16px;
}
.step-div{
  border-radius: 8px;
  border: 1px solid lightgray;
  min-height: 80px;
  padding: 6px;
  margin: 16px 0px;
}

.step-div h4{
  display: inline;
  margin-left: 10px;
}

.step-div > :nth-child(2) {
  font-size: 14px;
  color: #8f8a8a;
  line-height: 24px;
}
</style>