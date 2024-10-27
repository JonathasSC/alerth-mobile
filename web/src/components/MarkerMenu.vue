<template>
  <section class="menu">
    <div class="menu__content">
      <div class="search">
        <input
          class="search__input"
          type="search"
          v-model="searchQuery"
          placeholder="Pesquisar..."
        />
        <button class="search__btn" @click="searchLocation">
          <span class="material-symbols-outlined">search</span>
        </button>
      </div>
      <div class="categories">
        <button
          v-for="category in categories"
          :key="category.service_category_id"
          class="category-btn"
          @click="selectCategory(category.service_category_id)"
        >
          {{ category.category }}
        </button>
      </div>
      <button class="send-btn" @click="sendToWebSocket">
        Enviar ocorrência
      </button>
    </div>
  </section>
</template>

<script>
import serviceCategoryService from "../services/serviceCategoryService";
import WebSocketService from "../services/webSocketService";

export default {
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
</script>

<style scoped>
.menu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 16px 16px 0 0;
  padding: 25px;
}

.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search__input {
  width: 100%;
}

.search__btn {
  background: none;
}

.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.category-btn {
  padding: 10px;
  background: #eef5ff;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.category-btn:hover {
  background: #d0e1ff;
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
