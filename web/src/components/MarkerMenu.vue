<template>
  <section class="menu">
    <div class="menu__content">
      <div class="search">
        <h2 class="search__title">Digite o endereço da ocorrência</h2>
        <div class="search__input-wrapper">
          <input
            class="search__input"
            type="search"
            v-model="searchQuery"
            placeholder="Rua ou Bairro, cidade"
            @keydown.enter="searchLocation" 
          />
          <button class="search__btn" @click="searchLocation">
            <span class="material-symbols-outlined" style="color: #3888FF;">search</span>
          </button>
        </div>
      </div>

      <!-- <div class="categories" v-if="Array.isArray(categories)">
        <button
          v-for="category in categories"
          :key="category.service_category_id"
          class="category-btn"
          @click="selectCategory(category.service_category_id)"
        >
          {{ category.category }}
        </button>
      </div> -->

<CardIcon></CardIcon>

      <button class="send-btn" @click="sendToWebSocket">
        Enviar ocorrência
      </button>
    </div>
  </section>
</template>

<script>
import serviceCategoryService from "../services/serviceCategoryService";
import WebSocketService from "../services/webSocketService";
import CardIcon from "./CardIcon.vue";

export default {

components: {
CardIcon
},

  data() {
    return {
      categories: [],
      searchQuery: "",
    };
  },
  async mounted() {
    try {
      const response = await serviceCategoryService.getAll();
      this.categories = response.data;
      const wsUrl = import.meta.env.VITE_WS_BASE_URL;
      WebSocketService.connect(wsUrl);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  },
  methods: {
    async searchLocation() {
      if (!this.searchQuery) return;

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          this.searchQuery
        )}`
      );

      const data = await response.json();
      if (data.length > 0) {
        const location = data[0];
        this.$emit("locationFound", {
          lat: location.lat,
          lon: location.lon,
        });
      } else {
        console.error("Local não encontrado.");
      }
    },
    selectCategory(categoryId) {
      localStorage.setItem("selectedCategory", categoryId);
      this.$emit("categorySelected", {
        categoryId,
        location: this.$props.selectedLocation,
      });
    },
    sendToWebSocket() {
      const lastLocation = JSON.parse(localStorage.getItem("lastLocation"));
      const selectedCategory = localStorage.getItem("selectedCategory");

      if (lastLocation && selectedCategory) {
        const message = {
          lat: lastLocation.lat,
          lng: lastLocation.lng,
          service_category: selectedCategory,
        };

        WebSocketService.send(message);
        console.log("Mensagem enviada:", message);
        location.reload();
      } else {
        console.error(
          "Dados de localização ou categoria não encontrados no localStorage."
        );
      }
    },
  },
};

localStorage.removeItem("lastLocation");
localStorage.removeItem("selectedCategory");

</script>

<style scoped>
.menu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: var(--padding-lg);
  overflow: hidden;
}

.search {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.search__title {
  font-size: var(--font-size-sm);
  margin-bottom: var(--margin-sm);
  color: #758EB5;
}

.search__input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.search__input {
  flex: 1;
  padding: 10px;
  padding-right: 40px; 
  border-radius: 8px;
  border: 1px solid #ccc;
}

.search__btn {
  position: absolute;
  right: 10px; 
  background: transparent;
  border: none;
  color: #aaa;
  cursor: pointer;
  padding: 0;
}

.search__btn span {
  font-size: 24px;
}

.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-sm);
  margin-top: var(--margin-sm);
}

.category-btn {
  padding: var(--padding-sm);
  background: #eef5ff;
  width: 100%;
  border: none;
  border-radius: var(--border-radius-sm);
}

.menu__content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.send-btn {
  height: 48px;
  width: 100%;
  background-color: var(--color-blue-primary);
  border-radius: var(--border-radius-sm);
  color: var(--color-slate-50);
}
</style>
