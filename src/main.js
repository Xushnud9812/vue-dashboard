import { createApp } from "vue";
import "./style.css";
import "@/assets/style.css";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import { vMaska } from "maska"

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import CanvasJSChart from "@canvasjs/vue-charts";
import JsonExcel from "vue-json-excel3";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.component("downloadExcel", JsonExcel);
app.component("Icon", Icon);
app.directive("maska", vMaska);
app.use(router);
app.use(pinia);
app.use(CanvasJSChart);
app.mount("#app");
