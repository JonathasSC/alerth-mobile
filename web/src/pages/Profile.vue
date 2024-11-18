<template>
    <router-link to="/">
        <img src="../assets/voltarMenu.jpg" class="back-menu__icon" alt="Voltar para o menu anterior" />
    </router-link>

    <div class="profile-container">
        <div class="profile-header">
            <div class="profile-picture">
                <img :src="user.profilePicture" alt="Foto do usuário" />
                <span class="add-photo-icon" @click="showModal = true">+</span>
            </div>
            <router-link to="/login">
                <img src="../assets/Logout.png" class="logout-icon" alt="Logout" />
            </router-link>
        </div>

        <div class="profile-info">
            <h2>{{ user.firstName }} {{ user.lastName }}</h2>
            <p>{{ user.email }}</p>
        </div>

        <h3 class="events-title">Eventos criados</h3>
        <div class="events-container">
            <div v-for="(event, index) in events" :key="index" class="event-card">
                {{ event }}
            </div>
        </div>

        <router-link to="/">
            <button class="profile-button">Mapa</button>
        </router-link>

        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <h2>Foto de perfil</h2>
                <label for="file-upload">Anexar foto:</label>
                <input type="file" id="file-upload" @change="handleFileUpload" />
                <button class="close-button" @click="closeModal">Fechar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const user = ref({
    profilePicture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F78-786293_1240-x-1240-0-avatar-profile-icon-png.png&f=1&nofb=1&ipt=cc7a141c137581362baccd77ab007fd2dd5ad527759c5fe1d3b6dbc81fc4319c&ipo=images",
    firstName: "Teste",
    lastName: "dos Santos",
    email: "testedossantos@gmail.com",
});

const events = ref(["Evento 1", "Evento 2", "Evento 3"]);
const showModal = ref(false);

function closeModal() {
    showModal.value = false;
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Cria a URL da imagem localmente
        const imageURL = URL.createObjectURL(file);

        // Atualiza a foto do usuário
        user.value.profilePicture = imageURL;

        // Salva a URL da imagem no localStorage
        localStorage.setItem('profilePicture', imageURL);

        // Fecha o modal
        showModal.value = false;
    }
}

// Ao inicializar o componente, carregar a foto do localStorage, se disponível
onMounted(() => {
    const savedProfilePicture = localStorage.getItem('profilePicture');
    if (savedProfilePicture) {
        user.value.profilePicture = savedProfilePicture;
    }
});

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inder&family=Sora:wght@100..800&display=swap');

.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-lg);
    max-width: 400px;
    overflow-y: auto;
    max-height: 95vh;
    margin: var(--margin-md) auto;
}

.profile-header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
}

.profile-picture {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

.profile-picture img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: var(--margin-lg);
}

.add-photo-icon {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: #007bff;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-sm);
    font-weight: bold;
}

.logout-icon {
    position: absolute;
    bottom: 117px;
    right: 0;
}

.profile-info {
    text-align: center;
}

.profile-info h2 {
    font-size: var(--font-size-md);
    margin: var(--margin-md) 0;
}

.profile-info p {
    color: #666;
}

.events-title {
    font-size: var(--font-size-sm);
    margin-top: 30px;
    color: #333;
    text-align: center;
}

.events-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-md);
    width: 80%;
    margin-top: var(--margin-lg);
}

.event-card {
    background-color: #e0e0e0;
    padding: var(--padding-md);
    text-align: center;
    font-size: var(--font-size-sm);
    color: #333;
}

.profile-button {
    display: flex;
    gap: var(--gap-md);
    margin: var(--margin-2xl) var(--margin-md) 0 0;
    padding: var(--padding-sm) var(--padding-xl);
    font-size: 16px;
    color: white;
    border-radius: var(--border-radius-xs);
    background-color: #4CAF50;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: var(--padding-md);
    border-radius: var(--border-radius-sm);
    width: 300px;
    text-align: center;
}

.modal-content h2 {
    margin-bottom: var(--margin-lg);
    font-size: var(--font-size-md);
}

.modal-content label {
    display: block;
    margin-left: var(--margin-sm);
    font-size: var(--margin-md);
    text-align: left;
}

.modal-content input[type="file"] {
    width: 100%;
    padding: var(--padding-sm);
    margin-bottom: var(--margin-md);
}

.close-button {
    background-color: #007bff;
    color: white;
    padding: var(--padding-sm) var(--padding-lg);
    border-radius: var(--border-radius-xs);
}
</style>
