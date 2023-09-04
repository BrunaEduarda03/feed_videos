import { createRouter, createWebHistory } from "vue-router";

import SignIn from "./components/SignIn.vue";
import Videos from "./components/Videos.vue";
const routes = [
  {
    path: "/",
    redirect: "/SignIn",
  },
  {
    name: "SignIn",
    component: SignIn,
    path: "/SignIn",
  },
  {
    name: "feed-videos",
    component: Videos,
    path: "/feed-videos",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
