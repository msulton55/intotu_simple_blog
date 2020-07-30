import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "../views/Home.vue"
import Main from "../views/Main.vue"
import Create from "../views/Create.vue"
import Detail from "../views/Detail.vue"

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
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
