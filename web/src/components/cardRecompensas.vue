<template>
    <div class="container-recompensas">
        <div class="header">
            <p class="xp-title">{{ xpLevel }}XP</p>
        </div>

        <div class="content">
            <slot></slot>
        </div>

        <img
            v-if="completed"
            src="../assets/check.png"
            alt="Ícone de check"
            class="check-icon"
        />
    </div>
</template>

<script>
export default {
    props: {
        completed: {
            type: Boolean,
            required: true,
        },
        xpLevel: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style scoped>
.container-recompensas {
    width: 100px;
    height: 150px;
    margin: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.header {
    background-color: #3888ff;
    padding: 15px;
    text-align: center;
}

.xp-title {
    font-size: 1.2em;
    color: white;
    font-weight: bold;
    margin: 0;
}

.content {
    background-color: #ecf4ff; 
    flex-grow: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.check-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 10px;
    right: 10px;
}
</style>