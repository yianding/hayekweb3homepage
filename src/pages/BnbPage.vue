<template>
  <div class="container">
    <page-header title="安装币安 APP" @goback="router.go(-1)" />
    <van-collapse v-model="activeNames">
      <van-collapse-item name="p1">
        <template #title>
          <div><van-icon name="question-o" color="red" /> 操作流程</div>
        </template>
        <div class="step">第一步、科学上网</div>
        <div class="stepDesc">
          <div>虚拟币交易所币安需要翻墙才能下载安装。推荐飞瓜加速器翻墙，收费合理，信号稳定，支持在手机端、电脑端同时使用。只要是好用的翻墙软件都可以的。</div>
          <div>官网地址：<a href="javascript:void(0);">http://feiguo.org</a></div>
          <div>备用网址1：<a href="javascript:void(0);">http://feiguo.club</a></div>
          <div>备用地址2：<a href="javascript:void(0);">http://feiguoyun.club</a></div>
        </div>
        <div class="step">第二步、下载安装币安 APP</div>
        <div class="stepDesc">
          <div>打开翻墙软件 → 浏览器搜索下载安装币安 APP → 点继续安装 → 安装成功</div>
        </div>
        <div class="step">第三步、注册币安账号</div>
        <div class="stepDesc">
          <div>打开币安 APP → 选择注册账号 → 输入手机号 → 输入短信验证码 → 设置安全密钥方式 （推荐指纹） →  注册成功</div>
        </div>
      </van-collapse-item>
      <van-collapse-item name="p2">
        <template #title>
          <div><van-icon name="warning-o" color="red" /> 补充说明</div>
        </template>
        <div class="stepDesc">
          <div>1、币安账号注册目前身份证、护照均可注册，有一段时间只支持护照注册；</div>
          <div>2、下载币安 APP 时有的手机的安全设置或自带浏览器不支持下载，推荐换成 Edge 浏览器下载；</div>
          <div>3、不管手机提示什么警示语都选择继续，币安是目前世界最大的虚拟币交易平台之一，值得信赖；</div>
          <div>4、币安账号注册还可以用邮箱注册，流程是一样的；</div>
          <div>5、币安交易所 APP 安装好后使用时不需要翻墙的；</div>
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