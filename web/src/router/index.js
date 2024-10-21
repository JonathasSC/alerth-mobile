import { createRouter, createWebHistory } from 'vue-router';
import Inicial from '../pages/Inicial.vue';
import Cadastro from '../pages/Cadastro.vue';

const routes = [
  {
    path: '/',
    name: 'Inicial',
    component: Inicial,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
