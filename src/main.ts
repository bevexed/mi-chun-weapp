import Vue from 'vue'
import App from './App.vue'
import Store from './store'

Vue.prototype.$store = Store;


Vue.config.productionTip = false;

new App().$mount();
