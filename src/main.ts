import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import min from '../lib/index.js'
// import vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(min)
// Vue.use(vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
