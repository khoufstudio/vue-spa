import Vue from 'vue'
import Vuex from 'vuex'

// IMPORT MODULE SECTION
import auth from './stores/auth.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	// SEMUA MODULE YANG DIBUAT AKAN DITEMPATKAN DI DALAM BAGIAN  BAGIAN INI DAN DIPISAHKAN DENGAN KOMA UNTUK SETIAP MODULE-NYA
	modules: {
		auth
	},

	state: {
		token: localStorage.getItem('token'),
		errors: []
	},
	getters: {
	  //KITA MEMBUAT SEBUAH GETTERS DENGAN NAMA isAuth
    //DIMANA GETTERS INI AKAN BERNILAI TRUE/FALSE DENGAN KONDISI BERDASARKAN
    //STATE token.
    
    isAuth: state => {
    	return state.token != "null" && state.token != null
    }
	},
	mutations: {
		// SEBUAH MUTATIONS YANG BERFUNGSI UNTUK MEMANIPULASI VALUE DARI STATE token
		SET_TOKEN(state, payload) {
			state.token = payload
		} ,
		SET_ERRORS(state, payload) {
			state.errors = payload
		}, 
		CLEAR_ERRORS(state) {
			state.errors = []
		}
	}
})

export default store
