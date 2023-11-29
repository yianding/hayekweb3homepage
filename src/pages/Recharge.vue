<template>
  <div class="container">
    <page-header title="Hayek 账号充值" @goback="router.go(-1)" />
    <van-collapse v-model="activeNames">
      <van-collapse-item name="p1">
        <template #title>
          <div><van-icon name="question-o" color="red" /> 操作流程</div>
        </template>
        <div class="step">第一步：币安上买进 DAI 币和 MATIC 币，操作流程：</div>
        <div class="stepDesc">
          <div>1、购买 USDT: 打开币安 APP，进入首页 → 点右上角充值 → 点快捷买币 → 点左边灰色“快捷区” → 在”我要买”点 USDT → 在“购买金额”中输入金额 → 点 0 手续费购买 → 选择付款方式（微信还是支付宝、银行卡） → 点确认购买 → 加卖家微信转账给卖家 → 微信提醒卖家已支付 → 卖家转入 USDT → 核对 USDT 数目 → 购买USDT 成功；</div>
          <div>2、购买 MATIC 币： 只是在“我要买”处点“更多”接着在“选择币种”栏中搜索“MATIC”，其他所有步骤和购买 USDT 是一致的；</div>
          <div>3、USDT 币兑成 DAI 币：在最下方点“交易” → 点最上方的“闪兑” → 市价,先在最右方的箭头搜索币种 USDT,再输入数目 → 下方箭头搜索 DAI 后会自动显示 DAI 的数目（如：从 10USDT 到 9.96050188DAI） → 点询价 → 点充值 → 兑换 DAI 成功；</div>
        </div>
        <div class="step">第二步：币安链上的 DAI 币和 MATIC 币通过 Polyon 链转至哈平台上的 Polygon 链 ，操作流程：</div>
        <div class="stepDesc">
          <div>点最右下的“资金” → 点“提现” → 点“币种列表”中 DAI → 点“通过区块链转账” → 地址：输入哈链钱包地址（从哈链复制“我的钱包”账号再粘贴）→ 点“主网络”选择 Polygon → 输入提现数量 → 选择钱包：点现货账户 → 点提现 → 回哈链点“我的钱包”中“Polygon 链上资产”处等待到账 → 到账，跨链转账成功</div>
        </div>
        <div class="step">第三步：哈平台上的 Polygon 链 DAI 币和 MATIC 币转至 Hayek 链，操作流程：</div>
        <div class="stepDesc">
          <div>1、DAI 币转入“hayek 链上资产”：打开 app 点“我的钱包”  → 下拉到 Polygon 链上资产 → 找到 “DAI@Polygon” 输入转账金额 → 点“转账” → 回“hayek 链上资产”等待 20 分钟左右 → 在 DAI@hayek 处显示到账</div>
          <div>2、MATIC 币转入“hayek 链上资产” ：操作和上面操作一样。hayek 链上 DAI 币和 MATIC 币转出反向操作就可以了。</div>
        </div>
      </van-collapse-item>
      <van-collapse-item name="p2">
        <template #title>
          <div><van-icon name="warning-o" color="red" /> 补充说明</div>
        </template>
        <div class="stepDesc">
          <div>1、1USDT=1DAI=1 美元；币与币之间闪兑时会有一定的手续费，跨链转账有固定按笔算的手续费；</div>
          <div>2、币安上的 DAI 和 MATIC 币是不能直接转到 Hayke 平台的，需要从 币安的 Polygon 链 链先转至Hayek 的 的 Polygon 链 链上； MATIC 币充当 ges 费；</div>
          <div>3、不管手机提示什么警示语都选择继续，币安是目前世界最大的虚拟币交易平台之一，在币安购买 DAI 等虚拟币是目前中国内地人最可靠的途径，值得信赖；</div>
          <div>4、Hayek 链等钱包地址是一串哈希码数值，如 0xee8139798f7b7CBF18abc752471eD792888Ae03B 没有任何前后缀的，在使用过程中在确定前再核实一遍，切莫出错；</div>
          <div>5、币安快捷区购买虚拟币是小数额的，想购买大额虚拟币可选择“快捷区”旁边的其他两个选项；</div>
          <div>6、币安平台当天购买的币平台内可以自由转账、兑换，跨链转账需要等待 24 小时以上；跨链转账是需要时间等待的，就相当于银行跨行转账需要时间的。</div>
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