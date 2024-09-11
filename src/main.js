import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js";
import { createPinia } from "pinia";
import { i18n } from "./i18n/i18n.js";


import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import '/node_modules/primeflex/primeflex.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/primeicons/primeicons.css'

import PrimeVue from 'primevue/config';
import Textarea from 'primevue/textarea';
import SelectButton from 'primevue/selectbutton';
import OverlayPanel from 'primevue/overlaypanel';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

const pinia = createPinia();

const app = createApp(App);
app.use(PrimeVue);
app.use(pinia);
app.use(i18n);
app.use(router);
app.use(ToastService);

app.component('Textarea', Textarea)
app.component('SelectButton', SelectButton)
app.component("OverlayPanel", OverlayPanel);
app.component("Button", Button);
app.component("Toast", Toast);

app.mount('#app')