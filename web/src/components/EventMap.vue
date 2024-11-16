<template>
  <div id="map" class="map"></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import WebSocketService from "../services/webSocketService";

export default {
  setup(props, { emit }) {
    const map = ref(null);
    const currentMarker = ref(null);

    const initWebSocket = () => {
      const wsUrl = import.meta.env.VITE_WS_BASE_URL;
      WebSocketService.connect(wsUrl);

      WebSocketService.handleMessage = (data) => {
        if (Array.isArray(data)) {
          data.forEach((event) => {
            const { lat, lng } = event;
            addMarker(lat, lng);
          });
        } else {
          addMarker(data.event.lat, data.event.lng);
        }
      };
    };

    const addMarker = (lat, lng) => {
      if (map.value) {
        const marker = L.marker([lat, lng]).addTo(map.value);
        marker.bindPopup(`Localização: ${lat}, ${lng}`);
      }
    };

    const inicializarMapa = () => {
      // Define as coordenadas iniciais para Recife, PE
      const savedLocation = JSON.parse(localStorage.getItem("lastLocation"));
      const initialView = savedLocation
        ? [savedLocation.lat, savedLocation.lng]
        : [-8.0476, -34.8770]; // Recife, PE

      map.value = L.map("map", { zoomControl: false }).setView(initialView, 15);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map.value);

      if (savedLocation) {
        addMarker(savedLocation.lat, savedLocation.lng);
      }

      map.value.on("click", handleMapClick);
    };


    const handleMapClick = (e) => {
      const { lat, lng } = e.latlng;

      if (currentMarker.value) {
        map.value.removeLayer(currentMarker.value);
      }

      currentMarker.value = L.marker([lat, lng]).addTo(map.value);

      localStorage.setItem("lastLocation", JSON.stringify({ lat, lng }));

      emit("requestCategorySelection", { lat, lon: lng });
    };

    const moveToLocation = ({ lat, lon }) => {
      if (map.value) {
        map.value.setView([lat, lon], 15);
        if (currentMarker.value) {
          map.value.removeLayer(currentMarker.value);
        }
        currentMarker.value = L.marker([lat, lon]).addTo(map.value);
        localStorage.setItem("lastLocation", JSON.stringify({ lat, lon }));
      }
    };

    onMounted(() => {
      initWebSocket();
      inicializarMapa();
    });

    onBeforeUnmount(() => {
      WebSocketService.disconnect();
    });

    return {
      moveToLocation,
      currentMarker,
    };
  },
};
</script>

<style scoped>
.map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
