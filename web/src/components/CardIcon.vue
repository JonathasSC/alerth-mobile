<template>

    <div class="grupoIcone">
        <iconeBotao v-for="(icone, index) in iconesArray" :key="index" :imagem="icone.imagem" :texto="icone.texto"
            class="botaoIcone" />
    </div>

</template>

<script>
import iconeBotao from '../components/iconeBotao.vue';
import IconArvoreCaida from '../assets/IconArvoreCaida.svg';
import IconAlagamento from '../assets/IconAlagamento.svg'
import IconCanoQuebrado from '../assets/IconCanoQuebrado.svg'
import IconLixoAmontoado from '../assets/IconLixoAmontoado.svg'
import IconRuaSemPavimentacao from '../assets/IconRuaSemPavimentacao.svg'
import IconSemaforoQuebrado from '../assets/IconSemaforoQuebrado.svg'
import IconSemAgua from '../assets/IconSemAgua.svg'
import IconSemEnergia from '../assets/IconSemEnergia.svg'

export default {

    components: {
        iconeBotao,
    },
    data() {
        return {
            iconesArray: [
               
            { imagem: IconArvoreCaida, texto: 'Árvore Caída' },
            { imagem: IconAlagamento, texto: 'Alagamento' },
            { imagem: IconLixoAmontoado, texto: 'Lixo Amontoado' },
            { imagem: IconRuaSemPavimentacao, texto: 'Rua Sem Pavimentação' },
            { imagem: IconSemaforoQuebrado, texto: 'Semáforo Quebrado' },
            { imagem: IconSemAgua, texto: 'Sem Água' },
            { imagem: IconSemEnergia, texto: 'Sem Energia' },
            { imagem: IconCanoQuebrado, texto: 'Cano Quebrado' },

            ],
        };
    }
};
</script>

<style scoped>
.grupoIcone {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--gap-sm);
    margin: 5px 0 5px -18px;

}
</style>
