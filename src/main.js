import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import'normalize.css/normalize.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import NPlayer from "@nplayer/vue";
import { createPinia } from 'pinia';
import vue3videoPlay from 'vue3-video-play'
import 'vue3-video-play/dist/style.css'
// import 'https://at.alicdn.com/t/c/font_3910319_df5f9z2tjtl.css?spm=a313x.7781069.1998910419.81&file=font_3910319_df5f9z2tjtl.css'
const pinia=createPinia()

createApp(App).use(pinia).use(router).use(vue3videoPlay).use(NPlayer).use(Antd).mount('#app')
