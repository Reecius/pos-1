<template>
	<div>
		<div class="btn-group-vertical">
			<div class="btn-group">
				<input class="text-center form-control" type="password" v-model="value" placeholder="Enter your pin"/>
				<button class="btn" @click="closeClickedFn">X</button>
			</div>
			<div class="btn-group">
				<button @click="addInput(1)" class="btn">1</button>
				<button @click="addInput(2)" class="btn">2</button>
				<button @click="addInput(3)" class="btn">3</button>
			</div>
			<div class="btn-group">
				<button @click="addInput(4)" class="btn">4</button>
				<button @click="addInput(5)" class="btn">5</button>
				<button @click="addInput(6)" class="btn">6</button>
			</div>
			<div class="btn-group">
				<button @click="addInput(7)" class="btn">7</button>
				<button @click="addInput(8)" class="btn">8</button>
				<button @click="addInput(9)" class="btn">9</button>
			</div>
			<div class="btn-group">
				<button @click="removeLastInput" class="btn">&lt;</button>
				<button @click="addInput(0)" class="btn">0</button>
				<button @click="clearInput" class="btn">cl</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
			};
		},
		props: {
			closeClickedFn: Function
		},
		methods: {
			addInput(inputValue) {
				console.log(inputValue);
				this.value = this.value + inputValue;
				this.checkAuth();
			},
			removeLastInput() {
				console.log('removeLastInput');
				this.value = this.value.slice(0, -1);
			},
			clearInput() {
				this.value = '';
			},
			checkAuth() {
				if(this.value.length === 6) {
					// Do auth on backend
					console.log('in checkAuth!');
					this.$store.dispatch("actionAuth", true);
				}
			}
		},
		computed: {
			
		}
	};
</script>


<style lang="scss" scoped>
	input {
		font-size: 3em;
		height: 100px;
		// margin-bottom: 20px;
	}

	.btn-group {
		background-color: #272727;
	}

	.btn {
		// color: #7fd200;
		color: red;
		// border: 1px solid #7fd200;
		border: 1px solid red;
		width: 90px;
		height: 100px;
		font-size: 3em;
		
		&:active {
			background-color: #7fd200;
			color: #000;
		}

		&:focus {
			box-shadow: none;
		}
	}

</style>

