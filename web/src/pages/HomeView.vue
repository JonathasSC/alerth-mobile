<template>
  <main>
    <!-- Foto do usuário -->
    <router-link to="/profile">
      <div>
        <img :src="user.profilePicture" alt="Foto do usuário" class="user-profile__picture" />
      </div>
    </router-link>

    <!-- Botão de Logout -->
    <router-link to="/login">
      <img src="../assets/Logout.png" alt="Logout" class="logout-icon" />
    </router-link>

    <!-- Mapa de eventos -->
    <EventMap ref="eventMap" :class="{ 'map--disabled': isMenuOpen }" />

    <!-- Menu de marcadores -->
    <MarkerMenu class="marker-menu" :class="{ 'marker-menu--behind': isMenuOpen }" @locationFound="moveToLocation"
      @categorySelected="sendEventToWebSocket" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { user } from "../state/user.js";
import EventMap from "../components/EventMap.vue";
import MarkerMenu from "../components/MarkerMenu.vue";

const isMenuOpen = ref(false); // Estado do menu

const eventMap = ref(null);

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
.user-profile__picture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 12;
}

.logout-icon {
  position: fixed;
  top: 17px;
  left: 17px;
  z-index: 12;
}

.map {
  z-index: 10;
  position: fixed;
}

/* .map--disabled {
  pointer-events: none;
  opacity: 0;
} */

.marker-menu {
  position: absolute;
  z-index: 10;
  border-radius: var(--border-radius-sm);
}

/* .marker-menu--behind {
  z-index: 9;
} */

</style>