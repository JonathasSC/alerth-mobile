import { createRouter, createWebHistory } from 'vue-router';
import Inicial from '../pages/Inicial.vue';
import conquistas from '../pages/Conquistas.vue'

const routes = [
  {
    path: '/',
    name: 'Inicial',
    component: Inicial,
  },

  {
    path: '/conquistas',
    name: 'conquistas',
    component: conquistas,
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;