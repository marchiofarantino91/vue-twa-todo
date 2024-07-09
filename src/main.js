import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueTelegram from 'vue-tg'
import router from './router'
createApp(App)
.use(VueTelegram)
.use(router).mount('#app')
