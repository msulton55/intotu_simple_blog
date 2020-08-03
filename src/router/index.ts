import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "../store";

import Home from "../views/Home.vue"
import Main from "../views/Main.vue"
import Create from "../views/Create.vue"
import Detail from "../views/Detail.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import { nextTick } from 'vue/types/umd';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/", component: Home,
    children: [
      {
        path: "/",
        component: Main
      },
      {
        path: "/create",
        component: Create
      },
      {
        path: "/detail/:id",
        component: Detail
      }
    ],
    meta : {
      requiresAuth: true
    },
    beforeEnter : function (to, from, next) {
      
    }
    
  },
  {
    path: "/login", 
    component: Login
  },
  {
    path: "/register",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    else 
      next('/login') 
  } else {
    next() 
  }
});


export default router;
