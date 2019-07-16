import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		auth: false
	},
	mutations: {
		authenticate(state, payload) {
			console.log('Something')
			state.auth = payload;
		}
	},
	actions: {
		actionAuth({commit}, payload) {
			commit('authenticate', payload);
		}
	}
})
