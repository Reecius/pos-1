<template>
	<div>
		<h4>Items</h4>
		<hr />
		<div v-dragscroll class="items">
			<app-sales-item-button v-for="(item, index) in items" v-bind:key="index" :item="item"></app-sales-item-button>
		</div>
	</div>
</template>

<script>
	import SalesItemButton from "@/components/Sales/SalesItem/SalesItemComponents/SalesItemButton.vue";

	export default {
		data() {
			return {
				items: [
					"Item 1",
					"Item 2",
					"Item 3",
					"Item 4",
					"Item 5",
					"Item 6",
					"Item 7",
					"Item 8",
					"Item 9",
					"Item 10",
					"Item 11",
					"Item 12",
					"Item 14",
					"Item 15",
					"Item 16",
					"Item 17",
					"Item 18",
					"Item 19",
					"Item 20",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Item 21",
					"Last Item"
				]
			};
		},
		components: {
			appSalesItemButton: SalesItemButton
		}
	};
</script>

<style lang="scss" scoped>
	.items {
		height: calc(100vh - 420px);
		// height: 100%;
		overflow: hidden;
		// background-color: lime;
	}
</style>

