import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
//import Axios from 'axios';
import App from './App.vue'
import BlogPosts from "./components/BlogPosts";
import Author from "./models/Author";
import Post from "./models/Post";
import Profile from "./models/Profile";


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes =[
    {path:'/', component: BlogPosts}
];
const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        profile: new Profile("John", "Doe", "john.doe@example.com", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"),
        posts: [
            new Post("Felt cute, might delete later", "Sep 18, 2020 17:18",
               "https://i.pcmag.com/imagery/reviews/00EfzjLJNL6FNKVxviGg7Zw-2.1569473216.fit_scale.size_1182x667.jpg",
               new Author("Firstname", "Lastname", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")),
            new Post("Which weighs more, a pound of feathers or a pound of bricks?", "Sep 18, 2020 16:17", null, new Author(
              "John", "Doe", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"))
        ]

    },
    getters: {
        posts: state => state.posts
    }
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
