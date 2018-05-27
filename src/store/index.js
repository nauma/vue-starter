import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import modules from './modules'

const store = new Vuex.Store({
	/*
	state: {
		test: 1
	},

	mutations: {
		setTest (store, n) {
			store.test = n
		}
	},
	*/
	modules
})

export default store
