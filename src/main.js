import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Ripple from 'vue-ripple-directive'

Vue.config.productionTip = false
Vue.directive('ripple', Ripple);

new Vue({
  render: h => h(App),
}).$mount('#app')
