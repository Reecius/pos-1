<template>
	<div>
		<button @click="loginClick" v-if="!loginClicked">Login</button>
		<app-login-pad v-if="loginClicked" :closeClickedFn="closeClicked"></app-login-pad>
	</div>
</template>

<script>
	import LoginPad from '@/components/Login/LoginPad.vue';

	export default {
		data() {
			return {
				loginClicked: false
			};
		},
		components: {
			appLoginPad: LoginPad
		},
		methods: {
			loginClick() {
				console.log("loginClicked");
				// this.$store.commit('authenticate', true);
				// this.$store.dispatch("actionAuth", true);
				this.loginClicked = true;
			},
			closeClicked() {
				this.loginClicked = false;
				localStorage.setItem('Test', 'This is some data');
				localStorage.removeItem('Test');
				localStorage.clear();
			}
		},
		computed: {

		}
	};
</script>

<style lang="scss" scoped>
	button {
		margin-top: 50px;
		padding: 20px;
		font-size: 5em;
		border-radius: 20px;
		color: #c5c5c5;
		background-color: #272727;
		// border: 2px solid #7fd200;
		border: 2px solid red;

		&:focus {
			outline: none;
		}

		&:active {
			background-color: #7fd200;
			color: #272727;
		}
	}
</style>
