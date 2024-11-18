<template>
    <button class="botaoIcone">
        <img :src="imagem"/>
        <p>{{ texto }}</p>
    </button>
</template>

<script>
export default {
    props: {
        imagem: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        }
    }
};
</script>
<style scoped>
.botaoIcone {
    background-color: #ced5de;
    border-radius: 8px;
    color: #000;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 100px;
    text-align: center;
}

.botaoIcone img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 8px; 
}

.botaoIcone p {
    margin: 0;
    font-size: 12px;
    color: #758eb5;
    word-wrap: break-word; 
    text-align: center; 
}
</style>