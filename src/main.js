import './style.css'
import { createApp } from 'vue'
import pinia from './store'
import App from './App.vue'
import router from './router'

// 导入amfe-flexible：监听视口变化，设置rem基准值 1/10 宽度
import 'amfe-flexible'
import '@/utils/vant.js'

const app = createApp(App)

app.use(pinia);
app.use(router);
app.mount('#app');
