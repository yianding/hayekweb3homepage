<template>
  <van-dialog title="轉帳操作" style="background-color: #f7f7f7;" v-model:show="showMe" :show-confirm-button="false">
    <van-form label-width="60" @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="target" name="targetAddr" label="收款地址" type="textarea" placeholder="輸入轉帳目標地址" rows="2" :rules="[{ required: true, message: '請輸入轉帳目標地址' }]" />
        <van-field v-model.number="amount" name="transferAmount" label="转出金額" placeholder="輸入轉帳金額" :rules="[{ required: true, message: '請輸入轉帳金額' }, { validator: v => v>0, message: '轉帳金額應大於 0 ！', trigger: 'onSubmit' }]" />
      </van-cell-group>
      <div class="footer">
        <van-button type="primary" native-type="submit" size="small"     
        :disabled="button.disabled" 
        :loading="button.loading" 
        :loading-text="button.loadingText" 
        :loading-type="button.loadingType">確定</van-button>
        <div style="width: 20px;"></div>
        <van-button type="default" size="small" @click="showMe=false">關閉</van-button>
      </div>
    </van-form>
  </van-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { showToast } from 'vant';
import { transferHyk } from '@/utils/tokenHelper';

const emit = defineEmits(['on-ok']);

const showMe = ref(false);
const target = ref('');
const amount = ref(0);

const button = reactive({
  disabled: false,
  loading: false,
  loadingText: '稍候...',
  loadingType: 'spinner'
})

const onSubmit = async (values) => {
  button.loading = true;
  button.disabled = true;
  const result = await transferHyk(target.value, amount.value);
  if(result){
    button.disabled = false;
    button.loading = false;
    showMe.value = false;
    showToast('操作成功！');
    emit('on-ok');
  } else {
    button.disabled = false;
    button.loading = false;
    showToast('操作失敗，請重試！');
  }
};

const showDialog = () => {
  target.value = '';
  showMe.value = true;
}

defineExpose({ showDialog });

</script>

<style scoped>
.footer {
  display: flex;
  justify-content:center;
  margin: 16px;
}

:deep(.van-button){
  width: 100px;
}

:deep(.van-cell:after){
  border-bottom-color: #aaaaaa;
}

</style>