import { createApp } from 'vue'
import './style.css'
import '@/assets/style.css'
import App from './App.vue'
import router from "./router";
import { Icon } from '@iconify/vue';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import CanvasJSChart from '@canvasjs/vue-charts';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);

app.component("Icon", Icon)
app.use(router);
app.use(pinia)
app.use(CanvasJSChart);
app.mount('#app')
