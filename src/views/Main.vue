<template>
	<div>
		<app-terminal></app-terminal>
		<app-login v-if="this.$store.state.auth !== true"></app-login>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Terminal from "@/components/Terminal/Terminal.vue";
	import Login from "@/components/Login/Login.vue";

	export default {
		components: {
			appLogin: Login,
			appTerminal: Terminal
		}
	};
</script>
