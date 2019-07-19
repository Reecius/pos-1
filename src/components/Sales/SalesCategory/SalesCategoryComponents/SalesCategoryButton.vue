<template>
	<button>{{ category }}</button>
</template>

<script>
	export default {
		props: ['category']
	}
</script>

<style lang="scss" scoped>
	button {
		font-size: 1.2em;
		border-radius: 20px;
		color: #c5c5c5;
		background-color: #272727;
		// border: 2px solid #7fd200;
		border: 2px solid #E31A02;
		margin: 5px 0;
		width: 100%;
		height: 90px;

		&:focus {
			outline: none;
		}

		&:active {
			// background-color: #7fd200;
			background-color: #E31A02;
			color: #272727;
		}
	}
</style>


