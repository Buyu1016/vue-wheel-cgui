import Vue from 'vue'
import App from './App.vue'
import CgUI from './lib/CgUI/index'

Vue.config.productionTip = false

Vue.use(CgUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
