<template>
	<button>{{ item }}</button>
</template>

<script>
	export default {
		props: ['item']
	}
</script>

<style lang="scss" scoped>
	button {
		font-size: 1.2em;
		border-radius: 20px;
		color: #c5c5c5;
		background-color: #272727;
		border: 2px solid #7fd200;
		margin: 5px;
		width: 120px;
		height: 90px;

		&:focus {
			outline: none;
		}

		&:active {
			background-color: #7fd200;
			color: #272727;
		}
	}
</style>