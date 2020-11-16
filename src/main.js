import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
//import axios from 'axios'
import App from './App.vue'
import BlogPosts from "@/components/BlogPosts";


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const routes =[
  {path:'/', component: BlogPosts}
];
const router = new VueRouter({routes});

const store = new Vuex.Store({

});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
