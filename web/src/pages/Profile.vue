<template>
    <router-link to="/">
        <img src="../assets/voltarMenu.jpg" class="back-menu__icon" alt="Voltar para o menu anterior" />
    </router-link>
    <div class="profile-container">
        <div class="profile-picture">
            <img :src="user.profilePicture" alt="Foto do usuário" />
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

        <div class="buttons-container">
            <router-link to="/">
                <button class="profile-button">Início</button>
            </router-link>
            <button class="profile-button">Editar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserProfile",
    data() {
        return {
            user: {
                profilePicture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F78-786293_1240-x-1240-0-avatar-profile-icon-png.png&f=1&nofb=1&ipt=cc7a141c137581362baccd77ab007fd2dd5ad527759c5fe1d3b6dbc81fc4319c&ipo=images",
                firstName: "Teste",
                lastName: "dos Santos",
                email: "testedossantos@gmail.com",
            },
            events: [
                "Evento 1",
                "Evento 2",
                "Evento 3",
            ],
        };
    },
};
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

.profile-picture img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    background-size: cover;
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

.buttons-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
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
</style>
