<template>
  <router-link to="/">
    <img src="../assets/voltarMenu.jpg" class="back-menu__icon" alt="Voltar para o menu anterior" />
  </router-link>

  <ConquestCard></ConquestCard>

  <h2 class="title">Recompensas</h2>
  <div class="rewards-container">
    <CardRecompensas :completeReward="true" :xp="10" />
    <CardRecompensas :completeReward="true" :xp="25" />
    <CardRecompensas :completeReward="false" :xp="50" />
    <CardRecompensas :completeReward="false" :xp="75" />
    <CardRecompensas :completeReward="false" :xp="100" />
  </div>

  <h2 class="title">Lojinha</h2>
  <div class="shop-container">
    <CardLojinha :items="shopItems" />
  </div>
</template>
<script>
import CardRecompensas from "../components/CardReward.vue";
import CardLojinha from "../components/CardShop.vue";
import ConquestCard from "../components/ConquestCard.vue";

export default {
  components: {
    CardRecompensas,
    CardLojinha,
    ConquestCard
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

.title {
  margin-top: var(--margin-md);
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