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
const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()
const app = createApp(App)
app.use(vuetify)
app.use(pinia)
app.use(VueConfetti)
app.provide('message','var global');
app.mount('#app')
