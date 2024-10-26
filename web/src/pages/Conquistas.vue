<template>
  <router-link to="/">
    <div class="bar left"></div>
    <div class="bar right"></div>
  </router-link>

  <div class="infoXP__C">
    <p class="infoXP">1235XP</p>
    <p class="infoC">1235C</p>
  </div>

  <div class="containerConquista">
    <img
      src="../assets/medal.png"
      alt="Ícone de um troféu que representa uma conquista"
      class="imagemTrofeu"
    />
    <h1>Diamante</h1>
    <p>Parabéns, você notificou 100 ocorrências</p>
  </div>

  <h2>Recompensas</h2>
  <div class="recompensas-container">
    <CardRecompensas :completed="true" :xpLevel="10" />
    <CardRecompensas :completed="true" :xpLevel="25" />
    <CardRecompensas :completed="false" :xpLevel="50" />
    <CardRecompensas :completed="false" :xpLevel="75" />
    <CardRecompensas :completed="false" :xpLevel="100" />
  </div>

  <h2>Lojinha</h2>
  <div class="lojinha-container">
    <CardLojinha :items="productItems" />
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
      productItems: [
      { imageSrc: "link-da-imagem-3.jpg", price: "$20" },
      { imageSrc: "link-da-imagem-3.jpg", price: "$20" },
      { imageSrc: "link-da-imagem-4.jpg", price: "$25" },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inder&display=swap");

.infoXP__C {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 30px;
  font-weight: bold;
}

.bar {
  position: absolute;
  background-color: black;
}

.left {
  width: 10px;
  height: 30px;
  top: 10px;
  left: 30px;
  transform: rotate(243deg);
}

.right {
  width: 10px;
  height: 30px;
  top: 20px;
  left: 30px;
  transform: rotate(-69deg);
}

.infoXP {
  margin-right: 15px;
  font-size: 1em;
  color: #3888ff;
  font-weight: bold;
}

.infoC {
  font-size: 1em;
  color: white;
  background-color: #3888ff;
  padding: 5px 10px;
  border-radius: 49px;
}

.imagemTrofeu {
  margin: 0 auto;
  margin-top: 20px;
  width: 60px;
}

.containerConquista {
  text-align: center;
  padding: 20px 0;
  background-color: #ecf4ff;
  border-radius: 10px;
  width: calc(100% + 40px);
  margin-left: -20px;
}

.containerConquista h1 {
  margin: 20px 0 8px 0;
  padding: 0 20px;
  font-size: 1.5em;
  color: #027da4;
}

.containerConquista p {
  margin: 0 0 20px 0;
  padding: 0 20px;
  font-size: 0.9em;
  color: #758eb5;
  font-weight: bold;
}

h2 {
  font-family: "Inder", serif;
  color: #3888ff;
  margin-left: 10px;
}

.recompensas-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.lojinha-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>