<template>
  <button
    class="burger-btn"
    :class="{ active: isActive }"
    @click="toggleMenu"
    aria-label="Toggle menu"
  >
    <span class="burger-btn__line"></span>
    <span class="burger-btn__line"></span>
    <span class="burger-btn__line"></span>
  </button>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
});
</script>

<style>
.burger-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  background-color: var(--color-slate-50);
  border-radius: var(--border-radius-sm);
}

.burger-btn__line {
  display: block;
  width: 30px;
  height: 3px;
  margin: 5px 0;
  transition: all 0.3s ease;
  background: var(--color-blue-primary);
}

.burger-btn.active .burger-btn__line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.burger-btn.active .burger-btn__line:nth-child(2) {
  opacity: 0;
}

.burger-btn.active .burger-btn__line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
</style>
