import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue';
import Sales from './views/Sales.vue';
import Tabs from './views/Tabs.vue';
import Tables from './views/Tables.vue';
import BackOffice from './views/BackOffice.vue';

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'main',
			component: Main
		},
		{
			path: '/sales',
			name: 'sales',
			component: Sales
			// route level code-splitting
			// this generates a separate chunk (sales.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// component: () => import(/* webpackChunkName: "sales" */ './views/Sales.vue')
		},
		{
			path: '/tabs',
			name: 'tabs',
			component: Tabs
		},
		{
			path: '/tables',
			name: 'tables',
			component: Tables
		},
		{
			path: 'back-office',
			name: 'back-office',
			component: BackOffice
		}
	]
})
