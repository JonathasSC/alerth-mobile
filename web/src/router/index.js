import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Achievements from "../pages/Achievements.vue";
import Cadastro from '../pages/Cadastro.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
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
