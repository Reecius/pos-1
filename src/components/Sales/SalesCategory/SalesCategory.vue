<template>
	<div >
		<h4>Categories</h4>
		<hr />
		<div v-dragscroll.y="true" class="category">
			<!-- <b-button-group vertical> -->
			<app-sales-category-button
				v-for="(category, index) in categories"
				v-bind:key="index"
				:category="category"
				class="category-btn"
			></app-sales-category-button>
			<!-- </b-button-group> -->
		</div>
	</div>
</template>

<script>
	import SalesCategoryButton from "@/components/Sales/SalesCategory/SalesCategoryComponents/SalesCategoryButton.vue";

	export default {
		data() {
			return {
				categories: [
					"Cat 1",
					"Cat 2",
					"Cat 3",
					"Category four",
					"Cat 5",
					"Cat 6",
					"Cat 7",
					"Cat 8",
					"Cat 9"
				]
			};
		},
		components: {
			appSalesCategoryButton: SalesCategoryButton
		}
	};
</script>

<style lang="scss" scoped>
	.category {
		height: calc(100vh - 261px);
		overflow: hidden;
	}
</style>

