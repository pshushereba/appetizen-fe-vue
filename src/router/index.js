import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Settings from "../views/Settings.vue";
import AccountHome from "../views/AccountHome.vue";
import Pricing from "../views/Pricing.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/dashboard/home",
        component: AccountHome,
        alias: "/dashboard"
      },
      {
        path: "/dashboard/settings",
        component: Settings
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
