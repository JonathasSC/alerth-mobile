<template>
    <router-link to="/">
        <img src="../assets/voltarMenu.jpg" class="back-menu__icon" alt="Voltar para o menu anterior" />
    </router-link>
    <div class="profile-container">
        <div class="profile-picture">
            <img :src="user.profilePicture" alt="Foto do usuário" />
            <span class="add-photo-icon" @click="showModal = true">+</span>
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

        <h3 class="events-title">Conquistas</h3>

        <div class="achievement-progress">
        <div class="progress-bar">
            <div class="progress" :style="{ width: progressPercentage + '%' }"></div>
            <div class="achievement-icons-container">
                <div v-for="(achievement, index) in achievements" :key="index" class="achievement-icon"
                    :style="{ left: (index / (achievements.length - 1)) * 100 + '%' }">
                    <span :class="achievement.unlocked ? 'unlocked' : 'locked'">
                        {{ achievement.unlocked ? '🏆' : '🔒' }}
                    </span>
                </div>
            </div>
        </div>
    </div>

        <div class="reward-card">
            <img src="../assets/cardReward.png" alt="Recompensas" class="reward-image">
            <span class="reward-text">Ver todas conquistas</span>
        </div>


        <div class="buttons-container">
            <router-link to="/">
                <button class="profile-button">Início</button>
            </router-link>
            <button class="profile-button">Editar</button>
        </div>

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
import { ref, computed } from 'vue';

const user = ref({
    profilePicture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F78-786293_1240-x-1240-0-avatar-profile-icon-png.png&f=1&nofb=1&ipt=cc7a141c137581362baccd77ab007fd2dd5ad527759c5fe1d3b6dbc81fc4319c&ipo=images",
    firstName: "Teste",
    lastName: "dos Santos",
    email: "testedossantos@gmail.com",
});

const events = ref(["Evento 1", "Evento 2", "Evento 3"]);
const showModal = ref(false);

const achievements = ref([
    { name: "Conquista 1", unlocked: true },
    { name: "Conquista 2", unlocked: true },
    { name: "Conquista 3", unlocked: true },
    { name: "Conquista 4", unlocked: false },
    { name: "Conquista 3", unlocked: false },
    { name: "Conquista 4", unlocked: false },
]);

const unlockedAchievements = computed(() => achievements.value.filter((ach) => ach.unlocked).length);
const progressPercentage = computed(() => (unlockedAchievements.value / achievements.value.length) * 100);

function closeModal() {
    showModal.value = false;
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        user.value.profilePicture = URL.createObjectURL(file);
        showModal.value = false;
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inder&family=Sora:wght@100..800&display=swap');

.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 400px;
    margin: 20px auto;
}

.profile-picture {
    position: relative;
}

.profile-picture img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
}

.add-photo-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #007bff;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
}

.profile-info {
    text-align: center;
}

.profile-info h2 {
    font-size: 24px;
    margin: 5px 0;
    font-family: "Inder", serif;
}

.profile-info p {
    color: #666;
    font-size: 16px;
    font-family: "Inder", serif;
}

.events-title {
    font-size: 20px;
    margin-top: 30px;
    color: #333;
    font-family: "Inder", serif;
    text-align: center;
}

.achievement-progress {
    width: 100%;
    margin-top: 20px;
}

.progress-bar {
    background-color: #D9D9D9;
    border-radius: 24px;
    height: 35px;
    position: relative;
    overflow-x:scroll ;
}

.progress {
    background-color: #2a79c2;
    height: 100%;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
}

.achievement-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px; 
    width: 30px; 
    height: 30px; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: 20px;
    background-color: #FF8438;
}


.events-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 80%;
    margin-top: 20px;
}

.event-card {
    background-color: #e0e0e0;
    padding: 15px;
    text-align: center;
    font-size: 18px;
    color: #333;
    font-family: "Inder", serif;
}

.reward-card {
    position: relative;
    margin-top: 50px;
}

.reward-text {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-family: "Inder", serif;
    text-align: center;
    white-space: nowrap; 
}

.buttons-container {
    display: flex;
    gap: 10px;
    margin: 50px 20px 0 0;
}

.profile-button {
    padding: 10px 40px;
    font-size: 16px;
    font-family: "Inder", serif;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.profile-button:hover {
    background-color: #0056b3;
}

/* Modal Styles */
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
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
    font-family: "Inder", serif;
}

.modal-content h2 {
    margin-bottom: 15px;
    font-size: 20px;
}

.modal-content label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
}

.modal-content input[type="file"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
}

.close-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Inder", serif;
}

.close-button:hover {
    background-color: #0056b3;
}
</style>