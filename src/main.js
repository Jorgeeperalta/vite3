import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import VueConfetti from 'vue-confetti'
import { Button } from 'vant';
import { Calendar } from 'vant';
import  router  from "./router";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css"; // vue3-openlayers version < 1.0.0-*
import 'vant/lib/index.css';

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()
const app = createApp(App)
app.use(OpenLayersMap /* options */);
app.use(router)
app.use(vuetify)
app.use(pinia)
app.use(VueConfetti)
app.use(Button)
app.use(Calendar);
app.provide('message','variable   global');
app.mount('#app')
