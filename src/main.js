import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
//import axios from 'axios'
import App from './App.vue'
import BlogPosts from "@/components/BlogPosts";
import Author from "./models/Author";
import Post from "./models/Post";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes =[
    {path:'/', component: BlogPosts}
];
const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        posts: [
            new Post("Felt cute, might delete later", "Sep 18, 2020 17:18",
               "https://i.pcmag.com/imagery/reviews/00EfzjLJNL6FNKVxviGg7Zw-2.1569473216.fit_scale.size_1182x667.jpg",
               new Author("test", "test", "test"))
        ]
    },
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
