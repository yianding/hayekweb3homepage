<template>
  <div class="container">
    <page-header title="MATIC 币" @goback="router.go(-1)" />
    <van-form label-width="60" @submit="onSubmit">
      <van-cell-group title="Hayek鏈上資產">
        <van-cell title="MATIC@hayek" :value="formData1.balance">
          <template #icon>
            <img width="16" height="16" style="margin-top: 3px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhpJREFUSEu1VTFS40AQ7JEcQElXxRNEdiEhGeYlmJDC9wZ8bzhThDYvscgICclQeDlSHYG1czUrjbystLYI2MDl2lpNz3TP9BC++dCh+P8ejjJjJldgzhiUyXsCF0x4YkPFj19lvi9GEEAC1/VkRcC0CcCF/QUVBM7QggG8NkyPIaBBgOo+vQNjYYMSraNo+3h882EB9DiVzSwYYZHclr/9anoA5TLdNFnzOplX1+MptAn1vvkE0GUeyGYfWOjbDuD9TzqNCBsG8nReXkqw8j6ZgenKDawCx1Gd+7QpiGFcqiYdgFKTzMvenYB+BrEUWn1c3q0udbyRRtAku2DVMmUmvk5vq7UGE1D5r4/7AmPhiytVE9NKq7AAehnF21Mtuw1+1gZ9CfD/k4ATEF6Y8RHHW9sUpp68KbAFqJbJCqCZ0qMzAGAvABGOmHFORAUzFwIgCVbL5A1ALl3YAciU+lSEKHKrGXrj3jUUBbgeA+Bmq8CDFQCYJvPq1BP4kAbyXKzkFcDfIEW+8mM1aDU6IcKzitxosOtIS1HTvzvlx7SpGmGvtds21Y70hooznyZxThmc/qBZ3+4ZnK9JB9BV4RhWyCpAVAw5rLrBoFXYeVCb/g6z61rsiyCt/9zJoLpGqfFGLRxj8ORvrN3CkT0wrEdzHThuZs0Td2XqGpUVilz7fyjUqKVfm3hKjAt36YvQQyvSBzkIEKpw7P1/KzyiKH8q7O8AAAAASUVORK5CYII=" />
          </template>
        </van-cell>
        <van-field v-model="formData1.target" name="targetAddr" label="收款地址" label-align="top" :rules="[{ required: true, message: '請輸入收款地址' }]" />
        <van-field v-model.number="formData1.amount" name="transferAmount" label="轉帳金額" :rules="[{ required: true, message: '請輸入轉帳金額' }, { validator: v => v>0, message: '轉帳金額應大於 0 ！', trigger: 'onSubmit' }]" />
      </van-cell-group>
      <div class="footer">
        <van-button type="danger" native-type="submit" size="small" @click="ttype=1" disabled>轉帳到Polygon</van-button>
        <div style="width: 20px;"></div>
        <van-button type="primary" native-type="submit" size="small" @click="ttype=2" disabled>Hayek鏈轉帳</van-button>
      </div>
    </van-form>
    <van-form label-width="60" @submit="onSubmit">
      <van-cell-group title="Polygon鏈上資產">
        <van-cell title="MATIC@Polygon" :value="formData2.balance">
          <template #icon>
            <img width="16" height="16" style="margin-top: 3px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhpJREFUSEu1VTFS40AQ7JEcQElXxRNEdiEhGeYlmJDC9wZ8bzhThDYvscgICclQeDlSHYG1czUrjbystLYI2MDl2lpNz3TP9BC++dCh+P8ejjJjJldgzhiUyXsCF0x4YkPFj19lvi9GEEAC1/VkRcC0CcCF/QUVBM7QggG8NkyPIaBBgOo+vQNjYYMSraNo+3h882EB9DiVzSwYYZHclr/9anoA5TLdNFnzOplX1+MptAn1vvkE0GUeyGYfWOjbDuD9TzqNCBsG8nReXkqw8j6ZgenKDawCx1Gd+7QpiGFcqiYdgFKTzMvenYB+BrEUWn1c3q0udbyRRtAku2DVMmUmvk5vq7UGE1D5r4/7AmPhiytVE9NKq7AAehnF21Mtuw1+1gZ9CfD/k4ATEF6Y8RHHW9sUpp68KbAFqJbJCqCZ0qMzAGAvABGOmHFORAUzFwIgCVbL5A1ALl3YAciU+lSEKHKrGXrj3jUUBbgeA+Bmq8CDFQCYJvPq1BP4kAbyXKzkFcDfIEW+8mM1aDU6IcKzitxosOtIS1HTvzvlx7SpGmGvtds21Y70hooznyZxThmc/qBZ3+4ZnK9JB9BV4RhWyCpAVAw5rLrBoFXYeVCb/g6z61rsiyCt/9zJoLpGqfFGLRxj8ORvrN3CkT0wrEdzHThuZs0Td2XqGpUVilz7fyjUqKVfm3hKjAt36YvQQyvSBzkIEKpw7P1/KzyiKH8q7O8AAAAASUVORK5CYII=" />
          </template>
        </van-cell>
        <van-field v-model="formData2.target" name="targetAddr" label="收款地址" label-align="top" :rules="[{ required: true, message: '請輸入收款地址' }]" />
      <van-field v-model.number="formData2.amount" name="transferAmount" label="轉帳金額" :rules="[{ required: true, message: '請輸入轉帳金額' }, { validator: v => v>0, message: '轉帳金額應大於 0 ！', trigger: 'onSubmit' }]" />
      </van-cell-group>
      <div class="footer">
        <van-button type="danger" native-type="submit" size="small" @click="ttype=3">轉帳到Hayek</van-button>
        <div style="width: 20px;"></div>
        <van-button type="primary" native-type="submit" size="small" @click="ttype=4">Polygon鏈轉帳</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppData } from '@/store/appData';
import { showToast } from 'vant';
import { balanceOfMatic, balanceOfMaticOnPolygon, transferMatic } from '@/utils/tokenHelper';

const router = useRouter();
const appData = useAppData();

const ttype = ref(0);
const formData1 = reactive({ target: '', amount: '', balance: '0.00000000' })
const formData2 = reactive({ target: '', amount: '', balance: '0.00000000' })


const onSubmit = async () => {
  let result = false;
  if(ttype.value === 1){
    // result = await hayekTransfer('0x9989E22739753b10A885C2720B26C3344b23DFeA', formData1.amount, '0x81b9aae4ac06040F8b8E140153530F09023A5e2E')
  } else if(ttype.value === 2){
    // result = await hayekTransfer(formData1.target, formData1.amount, '0x81b9aae4ac06040F8b8E140153530F09023A5e2E')
  } else if(ttype.value === 3){ // 转账到Hayek
    result = await transferMatic('0xdede4493072d8d4998506f167b8bcb1bf8453975', formData2.amount)
  } else if(ttype.value === 4){ // Polygon链内转账
    result = await transferMatic(formData2.target, formData2.amount)
  }
  showToast(result ? '轉帳成功啦！' : '轉帳失敗啦！');
};

onMounted(async() => {
  if(appData.wallet === '') return;
  balanceOfMatic(appData.wallet).then(value =>{
    formData1.balance = (+value).toFixed(8);
    console.log('value=', value)
  })

  if(window.polygon){
    balanceOfMaticOnPolygon(appData.wallet).then(value =>{
      formData2.balance = (+value).toFixed(8);
      //showToast(formData2.balance);
    })
  }  
});

</script>

<style scoped>
.container{
  height: 100%;
  background-color: #f7f8fa;
}

.footer {
  display: flex;
  justify-content:center;
  background-color: white;
  padding: 10px 0px;
}

:deep(.van-divider){
  border-color: white;
  border-width: 1px;
}

</style>