import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rawDisplayer from './components/RawDisplayer.vue'

Vue.config.productionTip = false

Vue.component('rawDisplayer', rawDisplayer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
