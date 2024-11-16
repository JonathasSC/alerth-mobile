<template>
  <main>

    <!-- <BurguerBtn class="burguer-btn" :isActive="isActiveBurguer" @click="toggleMenu" /> -->

    <!-- <HomeSideBar class="home-sidebar" :isActive="isMenuOpen" :style="{ zIndex: isMenuOpen ? 10 : 2 }"
      @close="toggleMenu" /> -->

    <router-link to="/login">
      <img src="../assets/Logout.png" alt="Logout" class="logout-icon" />
    </router-link>

    <EventMap ref="eventMap" :class="{ 'map--disabled': isMenuOpen }" />

    <MarkerMenu class="marker-menu" :class="{ 'marker-menu--behind': isMenuOpen }" @locationFound="moveToLocation"
      @categorySelected="sendEventToWebSocket" />
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
.logout-icon {
  position: fixed;
  top: 17px;
  left: 17px;
  z-index: 12;
}


.burger-btn {
  z-index: 11;
  left: 10px;
  top: 10px;
}

.burger-btn,
.home-sidebar {
  position: fixed;
}

.home-sidebar {
  position: absolute;
}

/* Map styles */
.map {
  z-index: 10;
  position: fixed;
}

.map--disabled {
  pointer-events: none;
  opacity: 0;
}

.marker-menu {
  position: absolute;
  z-index: 10;
  border-radius: 8px;
}

.marker-menu--behind {
  z-index: 9;
}
</style>
