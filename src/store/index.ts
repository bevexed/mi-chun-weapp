import Vue from 'vue'
import Vuex from 'vuex'

import User from './user'
import Product from './product'
import Address from './address'
import Commission from './commission'
import Order from './order'
import Income from './income'
import Customer from './customer'
import Message from './message'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		User,
		Product,
		Address,
		Commission,
		Order,
		Income,
		Customer,
		Message
	}
})
