import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import VueDragscroll from 'vue-dragscroll';

Vue.config.productionTip = false

Vue.use(VueDragscroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
