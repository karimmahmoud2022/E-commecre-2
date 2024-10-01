import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import WOW from 'wow.js';
import 'wow.js/css/libs/animate.css';

// !Language
import i18n from "./i18n/index";
import en from "./i18n/locales/en.json";
import ar from "./i18n/locales/ar.json";

// !Language
export default {
  en,
  ar,
};






const app = createApp(App)
 
app.use(router);


app.use(i18n);

app.mount('#app');


new WOW().init();