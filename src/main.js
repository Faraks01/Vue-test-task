import Vue from 'vue'
import './assets/fonts/fonts.scss'
import App from './App.vue'
import store from './store/index'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
