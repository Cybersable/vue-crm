import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue")
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/History.vue")
  },
  {
    path: "/detail/:id",
    name: "detail-record",
    component: () => import("../views/DetailRecord.vue")
  },
  {
    path: "/planing",
    name: "planing",
    component: () => import("../views/Planing.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/record",
    name: "record",
    component: () => import("../views/Record.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  base: process.env.BASE_URL,
  routes
});

export default router;
