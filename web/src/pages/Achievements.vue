<template>
  <router-link to="/">
    <img src="../assets/voltarMenu.jpg" class="back-menu__icon" alt="Voltar para o menu anterior" />
  </router-link>

  <div class="xp-currency">
    <p class="xp-currency__xp">1235 XP</p>
    <p class="xp-currency__coins">1235 C</p>
  </div>

  <div class="conquest-card">
    <img src="../assets/medal.png" alt="Troféu" />
    <h1>Diamante</h1>
    <p>
      Parabéns, você notificou 100 ocorrências </p>
  </div>

  <h2>Recompensas</h2>
  <div class="rewards-container">
    <CardRecompensas :completeReward="true" :xp="10" />
    <CardRecompensas :completeReward="true" :xp="25" />
    <CardRecompensas :completeReward="false" :xp="50" />
    <CardRecompensas :completeReward="false" :xp="75" />
    <CardRecompensas :completeReward="false" :xp="100" />
  </div>

  <h2>Lojinha</h2>
  <div class="shop-container">
    <CardLojinha :items="shopItems" />
  </div>
</template>
<script>
import CardRecompensas from "../components/cardRecompensas.vue";
import CardLojinha from "../components/cardLojinha.vue";

export default {
  components: {
    CardRecompensas,
    CardLojinha,
  },
  data() {
    return {
      shopItems: [
        {
          imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-RKAfwqGhTdxO_3Jo4TM3Gi17xP5-sT9WA&s",
          price: "1235 C"
        },
        { imagePath: "", price: "1235 C" },
        { imagePath: "", price: "1235 C" },
        { imagePath: "", price: "1235 C" },
        { imagePath: "", price: "1235 C" },
        { imagePath: "", price: "1235 C" },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inder&display=swap");

html,
body {
  overflow-x: hidden;
}

.back-menu__icon {
  position: absolute;
  top: 20px;
  left: 30px;
  max-width: 100%;
  height: auto;
}

.xp-currency {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 60px 10px 20px;
  font-weight: bold;
}

.xp-currency__xp {
  margin-right: 15px;
  font-size: 1em;
  color: #3888ff;
}

.xp-currency__coins {
  font-size: 1em;
  color: white;
  background-color: #3888ff;
  padding: 5px 10px;
  border-radius: 49px;
}

.conquest-card {
  text-align: center;
  padding: 20px 0;
  background-color: #ecf4ff;
  border-radius: 10px;
  width: 100%;
  margin: 0;
}

.conquest-card img {
  margin: 20px auto 0;
  width: 60px;
}

.conquest-card h1 {
  margin: 0 0 8px;
  padding: 0 20px;
  font-size: 1.5em;
  color: #027da4;
}

.conquest-card p {
  margin: 0 0 20px;
  padding: 0 20px;
  font-size: 0.9em;
  color: #758eb5;
  font-weight: bold;
}

h2 {
  color: #3888ff;
  margin-left: 15px;
}

.rewards-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  padding: 10px;
  overflow-x: auto;
  max-width: 100%;
}

.shop-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 15px;
}
</style>