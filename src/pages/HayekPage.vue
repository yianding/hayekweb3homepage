<template>
  <div class="container">
    <page-header title="安装Hayek APP" @goback="router.go(-1)" />
    <van-collapse v-model="activeNames">
      <van-collapse-item name="p1">
        <template #title>
          <div><van-icon name="question-o" color="red" /> 操作流程</div>
        </template>
        <div class="step">第一步: 下载安装 Hayek-APP</div>
        <div class="stepDesc">
          <div>复制朋友分享的链接到浏览器打开 → 点击下载安卓 APP → 点下载 （最后三个字母是apk 才能下载） → 点继续安装 → 安装成功</div>
        </div>
        <div class="step">第二步：注册 Hayek 账号</div>
        <div class="stepDesc">
          <div>1 、如果手机出现 “ 病毒 ” 提示：</div>
          <div>打开 Hayek-APP 点“解除管控” → 点连接网络 → 点返回</div>
          <div>2 、注册 Hayek 账号：</div>
          <div>打开 Hayek-APP → 点开始使用 → 点去中心化节点 → 点继续 → 输入助记词 （可以是一句自己记得住的话） → 输入钱包密码 → 点启用 → 正在加载中，请稍后.... → 进入Hayek 官网首页 → 点我的钱包 → 注册 Hayek 账号成功</div>
        </div>
      </van-collapse-item>
      <van-collapse-item name="p2">
        <template #title>
          <div><van-icon name="warning-o" color="red" /> 补充说明</div>
        </template>
        <div class="stepDesc">
          <div>1、点下载时：hayek-fdroid-m64-v8a-release.apk,最后三个字母如果不是 apk，返回换另外的浏览器下载；</div>
          <div>2、安装时如果跳出提示：“<span style="color:red">检测出风险，该应用已感染病毒</span>”等类似警示语，不要慌、不要理会，请选择“继续安装”的选项继续安装。中国目前很多没有上架的 APP 都被一律贴上“病毒”等标签，真相是 360 杀毒软件免费后，网络 病毒几乎都销声匿迹了；</div>
          <div>3、注册时出现“解除管控”一定先要处理好，忽略这一步往前走注册了会导致 APP 连不上网；</div>
          <div>4、助记词一定要记住，最好的方式把助记词和密码截图收藏起来或用本子记下来， <span style="color:red">忘记助记词的后果是这个账号的资产是 永远找不回来了</span>；</div>
          <div>5、“正在加载中，请稍后....”背后是区块链的区块在同步，目前哈耶克平台已产生了 100 万个区块，同步时间会有点长，务必请耐心等候，网络好 5 分钟左右同步好区块，网络一般 10 分钟左右同步好区块；</div>
          <div>6、十几分钟以上没有同步好按以下步骤操作： 手机设置 应用 应用管理点 HAYEK 点强行停止 回到并双击哈耶克 APP “正在加载中，请稍后....”等待同步 显示 100%,同步成功</div>
          <div>7、哈耶克的钱包地址是一串自动生成加密的哈希码数值账号，在区块链上可以进行任何虚拟币的转进转出；</div>
          <div>8、配置太低的手机是同步不了哈链的，区块链算力非常大，手机芯片版本过低算力不够；</div>
          <div>9、Hayek 是区块链应用端的一个浏览器，区块链时刻会产生新的区块，使用时要保持区块更新的同步状态，养成一个过段时间往下拉的刷新动作；</div>
          <div>10、初次安装，有可能网站打开慢，感觉没反应这是正常，耐心等待就行，后台在运行配置。</div>
        </div>
      </van-collapse-item>
      <van-collapse-item name="p3">
        <template #title>
          <div><van-icon name="info-o" color="red" /> 温馨提示</div>
        </template>
        <div class="stepDesc">
          <div>在使用过程中出现以下问题时，建议重启APP：</div>
          <div>1、不能查看到最新的视频，需要重启APP并完成数据同步；</div>
          <div>2、不能显示视频封面或播放视频失败时，建议重启APP；</div>
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