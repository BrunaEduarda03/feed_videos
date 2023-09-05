import { createRouter, createWebHistory } from "vue-router";

import SignIn from "../views/SignIn.vue";
import Videos from "../views/Videos.vue";
import FavoriteVideos from "../views/FavoriteVideos.vue";
import auth from "../auth";

const routes = [
  {
    path: "/",
    redirect: "/SignIn",
  },
  {
    name: "SignIn",
    component: SignIn,
    path: "/SignIn",
    beforeEnter: auth,
  },
  {
    name: "feed-videos",
    component: Videos,
    path: "/feed-videos",
    beforeEnter: auth,
  },
  {
    name: "favoriteVideos",
    component: FavoriteVideos,
    path: "/favorite-videos",
    beforeEnter: auth,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
