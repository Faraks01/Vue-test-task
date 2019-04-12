import Vue from 'vue'
import Vuex from 'vuex'

import { Admin } from './modules/Admin'
import { Static } from './modules/Static'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Admin,
		Static
	}
})
