<template>
	<div class="btn-group-vertical space-top">
		<div class="btn-group">
			<button @click="sales">Sales</button>
			<button @click="tabs">Tabs</button>
		</div>
		<div class="btn-group">
			<button @click="tables">Tables</button>
			<button @click="backOffice">Back Office</button>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			sales() {
				this.$router.push({name: 'sales'});
			},
			tabs() {
				this.$router.push({name: 'tabs'});
			},
			tables() {
				this.$router.push({name: 'tables'});
			},
			backOffice() {
				this.$router.push({name: 'back-office'});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.space-top {
		margin-top: 50px;
	}

	button {
		margin: 15px;
		padding: 20px;
		font-size: 3em;
		border-radius: 20px;
		color: #c5c5c5;
		background-color: #272727;
		border: 2px solid #7fd200;
		width: 300px; height: 150px;

		&:focus {
			outline: none;
		}

		&:active {
			background-color: #7fd200;
			color: #272727;
		}
	}
</style>


