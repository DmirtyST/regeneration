import { createApp } from 'vue'
import "@fontsource/roboto/400.css"
import "@fontsource/roboto-condensed/700.css"
import "@fontsource/source-serif-pro/400.css"
import "@fontsource/source-serif-pro/600.css"

import './style/global.scss'
import App from './App.vue'
import router from "./router/index";
createApp(App).use(router).mount('#app')
