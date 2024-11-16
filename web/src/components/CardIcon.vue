<template>
        
        <div class="grupoIcone">
            <botao-icone 
                v-for="(icone, index) in iconesArray" 
                :key="index" 
                :imagem="icone.imagem" 
                :texto="icone.texto"
                class="botaoIcone" 
            />
        </div>
        
</template>

<script>
import botaoIcone from './iconeBotao.vue'; 
import iconeCanoQuebrado from '../assets/icone__canoQuebrado.svg';
import iconeAlagamento from '../assets/icone__alagamento.svg';
import iconeArvoreCaida from '../assets/icone__arvoreCaida.svg';
import iconeSemaforoQueimado from '../assets/icone__semaforoQueimado.svg';

export default {
    components: {
        botaoIcone,
    },
    data() {
        return {
            iconesArray: [
                { imagem: iconeCanoQuebrado, texto: 'Cano Quebrado' },
                { imagem: iconeAlagamento, texto: 'Alagamento' },
                { imagem: iconeArvoreCaida, texto: 'Árvore Caída' },
                { imagem: iconeSemaforoQueimado, texto: 'Semáforo Queimado' },
            ],
        };
    }
};
</script>

<style scoped>


.grupoIcone {
    display: flex;
    justify-content: space-between;
    margin: 30px 0 20px 0;
}
</style>