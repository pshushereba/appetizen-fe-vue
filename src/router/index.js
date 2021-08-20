import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import LiveStream from "../views/LiveStream.vue";
import Settings from "../views/Settings.vue";
import AccountHome from "../views/AccountHome.vue";
import Pricing from "../views/Pricing.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Explore from "../views/Explore.vue";


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
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "AccountHome",
        component: AccountHome,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "/dashboard/settings",
        name: "Settings",
        component: Settings,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "/dashboard/live",
        name: "LiveStream",
        component: LiveStream
      },
      {
        path: "/dashboard/explore",
        name: "Explore",
        component: Explore
      }
    ]
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (this.$store.getters.isLoggedIn) {
//       next();
//       return;
//     }
//     next({
//       path: '/login',
//       // query: { redirect: to.fullPath }
//     });
//   } else {
//     next();
//   }
// });

export default router;
