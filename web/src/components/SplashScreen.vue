<template>
    <div class="splash-screen" v-if="showSplash">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showSplash: true,
      };
    },
    mounted() {
      setTimeout(() => {
        this.showSplash = false;
      }, 4000);
    },
  };
  </script>
  
  <style scoped>
  .splash-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-image: url('../assets/splash.jpg');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    color: #fff;
  }
  
  .logo {
    display: none; 
  }
  </style>
  