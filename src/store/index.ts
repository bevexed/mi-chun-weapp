import Vue from 'vue'
import Vuex from 'vuex'

import User from './user'
import Product from './product'
import Address from './address'
import Commission from './commission'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		User,
		Product,
		Address,
		Commission
	}
})
