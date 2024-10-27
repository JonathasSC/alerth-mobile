import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Achievements from "../pages/Achievements.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/achievements",
    name: "achievements",
    component: Achievements,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
