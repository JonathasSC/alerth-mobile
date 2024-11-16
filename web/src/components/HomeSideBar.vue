<template>
  <div class="sidebar">
    <div class="sidebar__content" :class="{ active: isActive }">

      <ul class="sidebar__list" style="margin-top: 100px;">
        <h1 class="sidebar__title">Conta</h1>
        <li class="sidebar__item">
          <router-link class="sidebar__link" to="/profile">Perfil</router-link>
        </li>
       
      </ul>

     

      <ul class="sidebar__list">
        <li><router-link to="/login"  class="sidebar__list-login">Sair da conta</router-link></li>
      </ul>

    </div>
  </div>
</template>

<script setup>
import ConquestCard from "../components/ConquestCard.vue";
defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.sidebar {
  top: 0;
  width: 100%;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  /* Evita o overflow da sidebar */
}

.sidebar__content {
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  background-color: var(--color-slate-50);
  transition: left 0.3s ease;
  overflow-y: auto;
  /* Permite rolagem apenas se necessário dentro do conteúdo */
}

.active {
  left: 0;
  opacity: 1;
}

.sidebar__list {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.sidebar__list:last-child {
  margin-top: var(--margin-lg); /* Garantir espaço antes do último grupo */
}

.sidebar__item {
  display: block;
  margin: var(--margin-sm) 0 var(--margin-sm) var(--margin-md);
  color: #758EB5;
  font-weight: bold;
  text-decoration: none;
}

.sidebar__list-login {
  color: red;
  font-weight: bold;
  margin-left: var(--margin-lg);

}



.sidebar__title {
  color: var(--color-blue-primary);
  font-size: var(--font-size-md);
  font-weight: 700;
  margin-left: var(--margin-md);
  margin-top: var(--margin-md);
}

.sidebar__link {
  text-decoration: none;
  margin-left: 10px;
  color: var(--color-slate-400);
  font-weight: 500;
}

.conquest-card {
  padding: 10px;
  background-color: var(--color-white);
  border-radius: 8px;
}
</style>