import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import AchievementsView from "../pages/AchievementsView.vue";
import RegisterView from "../pages/RegisterView.vue";
import Profile from "../pages/Profile.vue";
import LoginView from "../pages/LoginView.vue";

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
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/achievements",
    name: "achievements",
    component: AchievementsView,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;