<template>
	<div class="footer">
		<!-- <div class="spacer"></div> -->
		<div class="row">
			<div class="col-sm-8">
			</div>
			<div class="col-sm-4">
				<button class="ml-auto">Cancel</button>
				<button class="ml-auto">Done</button>
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
	.row {
		margin: 20px;
	}

	button {
		font-size: 1.2em;
		border-radius: 20px;
		color: #c5c5c5;
		background-color: #272727;
		border: 2px solid #7fd200;
		margin: 5px;
		width: 120px;
		height: 50px;

		&:focus {
			outline: none;
		}

		&:active {
			background-color: #7fd200;
			color: #272727;
		}
	}
</style>
