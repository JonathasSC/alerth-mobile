<template>
    <div class="reward-card">
      <div class="reward-card__header">
        <p class="reward-card__xp">{{ xp }}XP</p>
      </div>
  
      <div class="reward-card__content">
        <slot></slot>
      </div>
  
      <img
        v-if="completeReward"
        src="../assets/check.png"
        alt="Recompensa conquistada"
        class="reward-card__check-icon"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      completeReward: {
        type: Boolean,
        required: true,
      },
      xp: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .reward-card {
    min-width: 100px;
    height: 150px;
    margin: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  
  .reward-card__header {
    background-color: #758eb5;
    padding: 15px;
    text-align: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .reward-card__xp {
    font-size: 0.8em;
    color: white;
    font-weight: bold;
    margin: 0;
  }
  
  .reward-card__content {
    background-color: #ecf4ff;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  
  .reward-card__check-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  </style>
  