<template>
  <div class="sidebar">
    <div class="sidebar__content" :class="{ active: isActive }">
      <ul class="sidebar__list">
        <h1 class="sidebar__title">Conta</h1>
        <li class="sidebar__item">
          <a class="sidebar__link" href="#perfil">Perfil</a>
        </li>
        <li class="sidebar__item">
          <a class="sidebar__link" href="#preferencias">Preferências</a>
        </li>
        <li class="sidebar__item">
          <a class="sidebar__link" href="#conquistas">Conquistas</a>
        </li>
      </ul>
      <ul class="sidebar__list">
        <li>Trocar de conta</li>
        <li>Sair da conta</li>
      </ul>
    </div>
    <div
      :class="{ hidden: !isActive }"
      class="backdrop"
      @click="$emit('close')"
    ></div>
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
.backdrop {
  width: 100%;
  height: 100%;
  background-color: #0000002d;
  transition: opacity 0.3s ease;
  z-index: 10;
  opacity: 1;
}

.hidden {
  opacity: 0;
  pointer-events: none;
}

.sidebar {
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
}

.sidebar__content {
  left: -240px;
  height: 100%;
  z-index: 11;
  width: 240px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  background-color: var(--color-slate-50);
  padding: var(--padding-lg);
  padding-top: var(--padding-2xl);
  transition: left 0.3s ease; /* Animação do slide */
}

.active {
  left: 0;
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
