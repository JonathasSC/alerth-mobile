<template>
  <main>
    <BurguerBtn
      class="burguer-btn"
      :isActive="isActiveBurguer"
      @click="toggleMenu"
    />

    <HomeSideBar
      class="home-sidebar"
      :isActive="isMenuOpen"
      @close="toggleMenu"
    />

    <EventMap ref="eventMap" />

    <MarkerMenu
      class="marker-menu"
      @locationFound="moveToLocation"
      @categorySelected="sendEventToWebSocket"
    />
  </main>
</template>

<script setup>
import { ref } from "vue";
import MarkerMenu from "../components/MarkerMenu.vue";
import EventMap from "../components/EventMap.vue";
import BurguerBtn from "../components/BurguerBtn.vue";
import HomeSideBar from "../components/HomeSideBar.vue";

const isMenuOpen = ref(false);
const isActiveBurguer = ref(false);
const eventMap = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  isActiveBurguer.value = !isActiveBurguer.value;
};
const moveToLocation = ({ lat, lon }) => {
  eventMap.value.moveToLocation({ lat, lon });
};

const sendEventToWebSocket = ({ categoryId, location }) => {
  if (location) {
    const message = {
      lat: location.lat,
      lon: location.lon,
      service_category_id: categoryId,
    };

    if (eventMap.value.websocket) {
      eventMap.value.websocket.send(JSON.stringify(message));
    }
  }
};
</script>

<style scoped>
.burger-btn {
  z-index: 3;
  left: 10px;
  top: 10px;
}
.burger-btn,
.home-sidebar {
  position: absolute;
}

.home-sidebar {
  z-index: 2;
}

.marker-menu {
  z-index: 1;
}
</style>
