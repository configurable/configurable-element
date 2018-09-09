import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

if (process.env.NODE_ENV === 'development') {
  var devtools = require('@vue/devtools')
  devtools.connect( /* host, port */ )
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')