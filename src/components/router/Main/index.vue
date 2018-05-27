<template lang="html">
	<div>
		<p>{{ text }}</p>
		<router-link :to="{ name: 'help' }">Go help</router-link>
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
	name: 'MainRouter',

	created () {
		this.setText('Hello main page')
	},

	mounted () {

	},

	methods: {
		...mapMutations('router', ['setText'])
	},

	computed: {
		...mapState('router', ['text'])
	},

	data () {
		return {

		}
	},

	metaInfo () {
		return {
			titleTemplate: 'Home - %s'
		}
	}
}
</script>

<style lang="css" scoped>
</style>
