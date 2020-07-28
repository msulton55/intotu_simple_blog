import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => 
      import("../views/Home.vue")
  },
  {
    path: "/create",
    name: "Create",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Create.vue")
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => 
      import("../views/Detail.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../views/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
