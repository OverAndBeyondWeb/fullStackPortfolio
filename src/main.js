import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from "./routes";

import 'normalize.css'
import './scss/main.scss'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      console.log(window.location.hash);
      return {
        selector: to.hash
      };
    }
  }
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
