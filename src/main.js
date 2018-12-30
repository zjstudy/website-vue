// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@g/less/index.less'
import animated from 'animate.css'
import aliicon from '@g/icon/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(aliicon)
Vue.use(animated)
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
