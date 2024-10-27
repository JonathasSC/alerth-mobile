<template>
  <router-link to="/">
    <img src="../assets/voltarMenu.jpg" class="voltarMenu" alt="Voltar para o menu anterior">
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

  <h2 style="margin-left: 15px;">Recompensas</h2>
  <div class="recompensas-container">
    <CardRecompensas :completed="true" :xpLevel="10" />
    <CardRecompensas :completed="true" :xpLevel="25" />
    <CardRecompensas :completed="false" :xpLevel="50" />
    <CardRecompensas :completed="false" :xpLevel="75" />
    <CardRecompensas :completed="false" :xpLevel="100" />
  </div>

  <h2 style="margin-left: 15px;">Lojinha</h2>
  <div class="lojinha-container">
    <CardLojinha :items="productItems" />
  </div>
</template>

<script>
import CardRecompensas from "../components/cardRecompensas.vue";
import CardLojinha from "../components/cardLojinha.vue";
// import imagemExemplo from "../assets/medal.png"

export default {
  components: {
    CardRecompensas,
    CardLojinha,
  },
  data() {
    return {
      productItems: [
        // na imagem, importa a imagem e chama como variável logo abaixo

      // { imageSrc: imagemExemplo, price: "$20" },
      { imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-RKAfwqGhTdxO_3Jo4TM3Gi17xP5-sT9WA&s", price: "20 C" },
      { imageSrc: "", price: "25 C" },
      { imageSrc: "", price: "20 C" },
      { imageSrc: "", price: "25 C" },
      { imageSrc: "", price: "20 C" },
      { imageSrc: "", price: "25 C" },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inder&display=swap");

html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  .voltarMenu {
  position: absolute;
  top: 20px;
  left: 30px;
  max-width: 100%;  
  height: auto;
}


.infoXP__C {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 60px;
  font-weight: bold;
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
  width: 100%; 
  margin: 0;    
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
  flex-wrap: nowrap;
  gap: 10px;
  padding: 10px; 
  overflow-x: auto;
  max-width: 100%; 
}


.lojinha-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 15px;
}
</style>