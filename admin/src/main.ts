import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.ts'
import EleForm from 'vue-ele-form'

Vue.config.productionTip = false

Vue.use(EleForm)

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
