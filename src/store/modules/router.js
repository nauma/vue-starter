export default {
	namespaced: true,

	state: {
			text: 'Hello main'
	},

	mutations: {
		setText (store, text) {
			store.text = text
		}
	}
}
