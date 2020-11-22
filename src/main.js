import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios';
import App from './App.vue'
import BlogPosts from "./components/BlogPosts";
import Authors from "./components/Authors";
import Login from "./components/Login";

//import Author from "./models/Author";
import Post from "./models/Post";
import Profile from "./models/Profile";


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes =[
    {path:'/', component: Login},
    {path:'/browse', component: Authors},
    {path:'/posts', component: BlogPosts}
];
const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        profile: new Profile("Jo", "Doe", "jo.doe@example.com", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"),
        posts: [
            /*
            new Post("Felt cute, might delete later", "Sep 18, 2020 17:18",
               "https://i.pcmag.com/imagery/reviews/00EfzjLJNL6FNKVxviGg7Zw-2.1569473216.fit_scale.size_1182x667.jpg",
               new Author("Firstname", "Lastname", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")),
            new Post("Which weighs more, a pound of feathers or a pound of bricks?", "Sep 18, 2020 16:17", null, new Author(
              "John", "Doe", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"))
        */
        ],

        authors: []

    },
    getters: {
        posts: state => state.posts,

    },
    actions: {
        getProfile({commit}) {
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
                .then(resp => {
                    //console.log(resp);
                    let d = resp.data;
                    let p = new Profile(d.firstname, d.lastname, d.email, d.avatar); //because avatar->profile_src
                    commit('SET_PROFILE', p)
                }
            )

        },
        getAuthors({commit}){ //list of authors for "Browse" page
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
                .then(resp => {
                    console.log(resp);
                    commit('SET_AUTHORS', resp.data);
                })
        },
        getPosts(){
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
                .then(resp => {
                    //console.log(resp.data);
                    let posts = [];
                    for (let post of resp.data) {
                        console.log(post);
                        posts.push( new Post(post) );
                    }
                    this.state.posts = posts;
                    //does it work without mutations/commit? Seems to... Atleast as long as we need getPosts only in mounted()..
                })

        }

    },

    mutations: {
        SET_PROFILE(state, profiledata){
            state.profile = profiledata
        },
        SET_AUTHORS(state, data){
            state.authors = data
        }
    }
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
