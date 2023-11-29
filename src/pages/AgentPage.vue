<template>
  <div class="container">
    <page-header title="成为代理商" @goback="router.go(-1)" />
    <van-collapse v-model="activeNames">
      <van-collapse-item name="p1">
        <template #title>
          <div><van-icon name="question-o" color="red" /> 操作流程</div>
        </template>
        <div class="step">第一步：买入会员账号，操作流程：</div>
        <div class="stepDesc">
          <div>输入 web3://xvideos.wen3 或首页笑眯眯链接进入网站 → 点最右上角“会员” → 点“申请成为代理商” → 了解“职责概述” → 了解“工作流程” → 了解“详细说明” → 点“下一步” → 输入微信号和微信号二维码 → 输入密码 → 输入购买会员账号数量 → 点授权、输入密码 → 购买成功 成为笑眯眯代理商</div>
        </div>
        <div class="step">第二步：卖出会员账号，操作流程：</div>
        <div class="stepDesc">
          <div>打开 Hayek-APP 打开笑眯眯网站 → 进入代理商界面 → 加用户微信 → 开通用户VIP 会员 → 收取用户微信转账 240 元人民币 → 回代理商界面点该已付费用户“确定收款” → 用户 VIP 会员开通</div>
        </div>
      </van-collapse-item>
      <van-collapse-item name="p2">
        <template #title>
          <div><van-icon name="warning-o" color="red" /> 补充说明</div>
        </template>
        <div class="stepDesc">
          <div>1、成为代理商提前模拟演练每个业务流程，提前入驻代理商平台：国内代理商要翻墙，币安买进 DAI 币、MATIC 币，把币安上的转入 Hayek 平台，用 DAI 币购买 VIP 会员账号，再帮用户先开通 VIP 会员，收取微信 240 元人民币等；</div>
          <div>2、代理商加上用户微信后先开通 VIP 会员，如果用户没有微信转账，代理商没有“确定收款”要取消订单，该 VIP 会员自动失效；</div>
          <div>3、用户微信转账代理商收钱后，恶意取消订单或没有及时点“确定收款”，微信用户联系代理商未果，会到客服投诉代理商，投诉达到三次代理商的资格取消；</div>
          <div>4、代理商已购买的 VIP 会员账号，随时可以退回的。</div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const activeNames = ref(['p1']);
</script>

<style scoped>
.step{
  color: black;
  font-weight: 500;
}
.stepDesc{
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 10px;
}
</style>