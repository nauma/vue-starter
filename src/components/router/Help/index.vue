<template lang="html">
	<div>
		<p>{{ text }}</p>
		<button
			type="button"
			@click="$router.go(-1)">
				Go back
			</button>
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
	name: 'HelpRouter',

	created () {
		this.setText('Hello help page')
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
			titleTemplate: 'Help - %s'
		}
	}
}
</script>

<style lang="css" scoped>
</style>
