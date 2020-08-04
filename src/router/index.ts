import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "../store";

import Home from "../views/Home.vue"
import Main from "../views/Main.vue"
import Create from "../views/Create.vue"
import Detail from "../views/Detail.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"

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
  console.log('to')
  console.log(to)
  console.log('from')
  console.log(from)
  console.log('next')
  console.log(next)
  
  console.log('==============')
  if(to.matched.some(record => record.meta.requiresAuth)) {
    console.log('masuk ke require auth')
    console.log(store.getters.isLoggedIn)
    console.log(to.path)
    if (store.getters.isLoggedIn === '') {
      console.log('masuk ke belum ada token jadi di lempar ke login')
      next('/login')
    } 
    
  } 
  else if (store.getters.isLoggedIn !== '' && to.path === '/login') {
    console.log('mencoba masuk ke login, tapi mental')
    next('/')
  }
  next()
});


export default router;
