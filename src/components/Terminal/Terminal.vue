<template>
	<div>
		<app-terminal-header></app-terminal-header>
		<h6 v-if="this.$store.state.auth">User: Reece</h6>
		<app-terminal-body v-if="this.$store.state.auth"></app-terminal-body>
	</div>
</template>

<script>
	import TerminalHeader from '@/components/Terminal/TerminalHeader.vue';
	import TerminalBody from '@/components/Terminal/TerminalBody.vue';

	export default {
		components: {
			appTerminalHeader: TerminalHeader,
			appTerminalBody: TerminalBody
		}
	};
</script>

<style lang="scss" scoped>

</style>
