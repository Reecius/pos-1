<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-2 col-xl-2 categories">
				<app-sales-category></app-sales-category>
			</div>
			<div class="col-md-6 col-xl-7 group-sales">
				<app-sales-group></app-sales-group>
				<app-sales-item class="items"></app-sales-item>
			</div>
			<div class="col-md-4 col-xl-3">
				<app-pre-purchase></app-pre-purchase>
			</div>
		</div>
		<app-sales-footer></app-sales-footer>
	</div>
</template>

<script>
	import SalesCategory from "@/components/Sales/SalesCategory/SalesCategory.vue";
	import SalesGroup from "@/components/Sales/SalesGroup/SalesGroup.vue";
	import SalesItem from "@/components/Sales/SalesItem/SalesItem.vue";
	import PrePurchaseSalesSection from '@/components/Sales/PrePurchaseSalesSection/PrePurchaseSalesSection.vue';
	import SalesFooter from '@/components/Sales/SalesFooter.vue';
import PrePurchaseSalesSectionVue from '../components/Sales/PrePurchaseSalesSection/PrePurchaseSalesSection.vue';

	export default {
		components: {
			appSalesCategory: SalesCategory,
			appSalesGroup: SalesGroup,
			appSalesItem: SalesItem,
			appPrePurchase: PrePurchaseSalesSectionVue,
			appSalesFooter: SalesFooter
		}
	};
</script>

<style lang="scss" scoped>
	.container-fluid {
		// padding: 0 30px;
		// height: 100%;
	}

	.row {
		height: 100%;
	}

	.group-sales {
		// height: 100%;
		height: 10px;
	}

	.items {
		margin-top: 10px;
		height: calc(100vh - 360px);
		// background-color: red;
	}

	.categories {
		height: 100%;
	}
</style>

