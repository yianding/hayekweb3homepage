<template>
  <div class="container">
    <page-header title="项目介绍" @goback="router.go(-1)" />
    <div class="desc-item">
      <div class="item-title"><div>一</div><div>精美绝伦</div></div>
      <div>笑眯眯是一个对标世界第一大成人网站的成人网站，内容之丰富，画面高清且精美绝伦，每一个视频都是精品中的精品，让人爱不释手，美梦入眠。实时更新，只有您想不到的，没有您看不到的；</div>
    </div>
    <div class="desc-item">
      <div class="item-title"><div>二</div><div>永远在线</div></div>
      <div>笑眯眯成人网站构建在第三代互联网 Hayek 平台上。只要您的手机有信号，无需翻墙，永远在线，是一个看一辈子的精品成人网站；</div>
    </div>
    <div class="desc-item">
      <div class="item-title"><div>三</div><div>性价比高</div></div>
      <div>看片全程无广告。好的国外成人网站每月 VIP 会员费是 10 美元，笑眯眯成人网站只需一次性缴费 240 元人民币，就可成为笑眯眯的终生 VIP 会员，之后无任何附加费用。世界各地美女帅哥陪伴您一生，带给您一生无尽的欢乐！</div>
    </div>
    <div class="desc-item">
      <div class="item-title"><div>四</div><div>挖矿赚钱</div></div>
      <div>一边欣赏美女帅哥花哨的高难度动作，手机一边挖矿赚钱（Hayek 手机挖矿，看视频时挖矿 hayek 币效率最高），赚回的远不止 VIP 会员费；如果成为笑眯眯项目的代理商，可以快速（只需三个月）赚取到您人生想象不到的财富——每分钟赚 40 元人民币。</div>
    </div>
    <div class="desc-footer">
      <div></div>
      <div>您还等什么呢？要么成为笑眯眯的代理商赚取大钱，要么成为笑眯眯的 VIP 会员，从此享受不一样的快乐人生—— 看片还能挖矿的双重快乐！</div>
      <div>一起来 ， 行动起来！ ！web3://xvideos.web3 笑眯眯成人网站带给您的不只是看片时的笑眯眯，更可以让您数钱时数到笑眯眯！</div>
      <div>妥妥的小白都能成为笑眯眯的代理商不是梦！</div>
    </div>
  </div>
  <br />
</template>

<script setup>
import { useRouter } from 'vue-router';
import PageHeader from '../components/PageHeader.vue';

const router = useRouter();

</script>

<style scoped>
.desc-item{
  margin: 10px 16px;
  font-size: 14px;
}
.item-title{
  display: flex;
  font-size: 16px;
}

.item-title > :nth-child(1) {
  width: 40px;
  height: 24px;
  border: 1px solid #de3636;
  color: #de3636;
  text-align: center;
}

.item-title > :nth-child(2) {
  border-bottom: 1px solid #de3636;
  border-top: 1px solid #fff;
  height: 24px;
  padding: 0px 10px;
  color: #9a1b24;
}

.desc-item > :nth-child(2) {
  margin-top: 10px;
  line-height: 24px;
  color: #8f8a8a;
}

.desc-footer {
  margin: 10px 16px;
  font-size: 14px;
  line-height: 24px;
}

</style>