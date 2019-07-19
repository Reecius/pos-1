<template>
	<div id="app">
		<app-root class="root"></app-root>
	</div>
</template>

<script>
	import Root from '@/views/Root.vue';

	export default {
		components: {
			appRoot: Root
		}
	};
</script>


<style lang="scss">

	html {
		// height: calc(100vh - 80px);
		// overflow: hidden;
		// background: purple;
		height: 100vh;
		width: 100vw;

	}

	body {
		background-color: #181818;
		font-size: 16px;
		height: 100%;
		width:  100%;
	}

	#app {
		font-family: "Proxima Nova", "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #c5c5c5;
		height: 100%;
		width:  100%;
		// background: orange;
	}

	hr {
		background-color: #c5c5c5;
	}

	.root {
		height: 100%;
	}

</style>
