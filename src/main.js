import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'lib-flexible/flexible.js' // 移动端适配
import 'vant/es/toast/style';
import router from './router'
import store from './store';
import "./tailwindcss/tailwindcss.css"
createApp(App).use(router).use(store).mount('#app')
