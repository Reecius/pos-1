<template>
	<div>
		<h4>Groups</h4>
		<hr />
		<!-- <div class="row" > -->
			<div v-dragscroll v-on:dragscrollstart="notClickable" v-on:dragscrollend="clickable" class="no-overflow">
				<b-button-group>
					<app-sales-group-button v-for="(group, index) in groups" v-bind:key="index" :group="group" :clickable="isClickable"></app-sales-group-button>
				</b-button-group>
			</div>
		<!-- </div> -->
	</div>
</template>

<script>
	import SalesGroupButton from "@/components/Sales/SalesGroup/SalesGroupComponents/SalesGroupButton.vue";

	export default {
		data() {
			return {
				groups: [
					"Group 1",
					"Group 2",
					"Group 3",
					"Group 4",
					"Group 5",
					"Group 6",
					"Group 7",
					"Group 8",
					"Group 9",
					"Group 10",
					"Group 11",
					"Group 12",
					"Group 13"
				],
				isClickable: ''
			};
		},
		components: {
			appSalesGroupButton: SalesGroupButton
		},
		methods: {
			clickable() {
				setTimeout(() => {
					this.isClickable = 'clicked';
				}, 50);
			},
			notClickable() {
				this.isClickable = '';
			}
		}
	};
</script>

<style lang="scss" scoped>
	.row {
		margin: 0;
	}

	.no-overflow {
		overflow: hidden;
	}

	.clicked {
		
	}
</style>

