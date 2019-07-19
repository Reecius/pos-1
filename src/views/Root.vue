<template>
	<div class="root">
		<app-header class="header"></app-header>
		<router-view class="view"></router-view>
	</div>
</template>

<script>
	import Header from "@/components/Header/Header.vue";

	export default {
		components: {
			appHeader: Header
		}
	};
</script>


<style lang="scss" scoped>
	.root {
		height: 100%;
		// background: blue;
	}
</style>
