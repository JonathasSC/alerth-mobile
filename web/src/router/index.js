import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import AchievementsView from "../pages/AchievementsView.vue";
import RegisterView from "../pages/RegisterView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },

  {
    path: "/achievements",
    name: "achievements",
    component: AchievementsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
