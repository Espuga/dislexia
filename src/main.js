import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'


import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import '/node_modules/primeflex/primeflex.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/primeicons/primeicons.css'

import PrimeVue from 'primevue/config';
import Textarea from 'primevue/textarea';
import SelectButton from 'primevue/selectbutton';


const app = createApp(App);
app.use(PrimeVue);

app.component('Textarea', Textarea)
app.component('SelectButton', SelectButton)

app.mount('#app')