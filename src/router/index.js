import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

Vue.use(VueRouter)

const route = (componentName, path, name) => ({
	path,
	name,
	component: () => import(`@/components/router/${componentName}`)
})

const router = new VueRouter({
	//mode: 'history',

	// reset position
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},

	routes: [
		route('Main', '/', 'main'),
		route('Help', '/help', 'help'),
	]
})

/*
router.beforeEach((to, from. next) => {
	//store.commit('nameCommit', data)
	next()
})

router.afterEach((to, from) => {

})
*/

export default router;
