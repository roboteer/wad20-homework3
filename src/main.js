import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
//import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  render: h => h(App),
}).$mount('#app')
