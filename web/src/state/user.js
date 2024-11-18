import { ref } from "vue";

// Tenta carregar a foto salva do localStorage
const savedProfilePicture = localStorage.getItem('profilePicture') || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F78-786293_1240-x-1240-0-avatar-profile-icon-png.png&f=1&nofb=1&ipt=cc7a141c137581362baccd77ab007fd2dd5ad527759c5fe1d3b6dbc81fc4319c&ipo=images"; 

// Estado global para o usuário
export const user = ref({
  profilePicture: savedProfilePicture, // Foto carregada do localStorage ou padrão
});
