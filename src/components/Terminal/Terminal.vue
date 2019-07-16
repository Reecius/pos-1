<template>
	<div>
		<app-terminal-header></app-terminal-header>
		<app-some-other v-if="this.$store.state.auth"></app-some-other>
	</div>
</template>

<script>
	import TerminalHeader from '@/components/Terminal/TerminalHeader.vue';

	export default {
		components: {
			appTerminalHeader: TerminalHeader,
		}
	};
</script>

<style lang="scss" scoped>

</style>
