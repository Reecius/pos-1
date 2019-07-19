<template>
	<button @click="test">{{ group }}</button>
</template>

<script>
	export default {
		props: ["group", "clickable"],
		methods: {
			test() {
				if ((this.clickable === "clicked")) {
					console.log("clicked!!!!");
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	button {
		font-size: 1.2em;
		border-radius: 20px;
		color: #c5c5c5;
		background-color: #272727;
		// border: 2px solid #7fd200;
		border: 2px solid #710b95;
		margin: 0 5px;
		width: 120px;
		height: 90px;

		&:focus {
			outline: none;
		}

		&:active {
			// background-color: #7fd200;
			background-color: #710b95;
			color: #272727;
		}
	}
</style>