import Vue from 'vue'
import App from './App.vue'
import CgUI from './lib/CgUI/index'
import './lib/CgUI/styles/global.css'

Vue.config.productionTip = false

Vue.use(CgUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
