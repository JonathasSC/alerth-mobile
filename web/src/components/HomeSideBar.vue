<template>
  <div class="sidebar">
    <div class="sidebar__content" :class="{ active: isActive }">
      <ul class="sidebar__list">
        <h1 class="sidebar__title">Conta</h1>
        <li class="sidebar__item">
          <router-link class="sidebar__link" to="/profile">Perfil</router-link>
        </li>
        <li class="sidebar__item">
          <a class="sidebar__link" href="#preferencias">Preferências</a>
        </li>
        <li class="sidebar__item">
          <router-link class="sidebar__link" to="/achievements">Conquistas</router-link>
        </li>

      </ul>
      <ul class="sidebar__list">
        
          <li><router-link to="/login">Sair da conta</router-link></li>
        
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.hidden {
  opacity: 0;
  display: none;
  pointer-events: none;
}

.sidebar {
  top: 0;
  width: 100%;
  height: 100vh;
  position: absolute;
  pointer-events: none;
}

.sidebar__content {
  opacity: 0;
  z-index: 0;
  left: -240px;
  height: 100%;
  width: 240px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  background-color: var(--color-slate-50);
  padding: var(--padding-lg);
  padding-top: var(--padding-2xl);
  transition: left 0.3s ease;
}

.active {
  left: 0;
  opacity: 1;
  z-index: 5;
  pointer-events: auto;
}

.sidebar__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.sidebar__title {
  color: var(--color-blue-primary);
  font-size: var(--font-size-md);
  font-weight: 700;
}

.sidebar__link {
  text-decoration: none;
  margin-left: 10px;
  color: var(--color-slate-400);
  font-weight: 500;
}
</style>
