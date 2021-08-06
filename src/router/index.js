import Vue from "vue";
import VueRouter from "vue-router";
import Park312 from "../views/Park312.vue";
import ParkSearch from "../views/ParkSearch.vue";
import ParkShow from "../views/ParkShow.vue";
import ParkEventNew from "../views/ParkEventNew.vue";
import ParkEventIndex from "../views/ParkEventIndex.vue";
import ParkEventShow from "../views/ParkEventShow.vue";
import ParkEventEdit from "../views/ParkEventEdit.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Park312",
    component: Park312,
  },
  {
    path: "/park_search",
    name: "ParkSearch",
    component: ParkSearch,
  },
  {
    path: "/park_event/new",
    name: "ParkEvent-new",
    component: ParkEventNew,
  },
  {
    path: "/park_events",
    name: "ParkEvent-index",
    component: ParkEventIndex,
  },
  {
    path: "/park_events/:id",
    name: "ParkEvent-show",
    component: ParkEventShow,
  },
  {
    path: "/park_events/:id/edit",
    name: "ParkEvent-edit",
    component: ParkEventEdit,
  },
  {
    path: "/parks/:id",
    name: "Park-show",
    component: ParkShow,
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
