import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueCookie from 'vue-cookie'
import VueMeta from 'vue-meta'

import store from '@/store'
import router from '@/router'
let unsync = sync(store, router)

import App from '@/App'

Vue.use(VueCookie)
Vue.use(VueMeta)


Vue.config.productionTip = false;

new Vue({
	router,
	store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
