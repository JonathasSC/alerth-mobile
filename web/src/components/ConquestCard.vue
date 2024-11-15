<template>
    <div class="xp-currency">
        <p class="xp-currency__xp">1235 XP</p>
        <p class="xp-currency__coins">1235 C</p>
    </div>
    <div class="conquest-card">
        <img src="../assets/medal.png" alt="Troféu" />
        <h1>Diamante</h1>
        <p>
            Parabéns, você notificou 100 ocorrências </p>
    </div>
</template>

<style scoped>
.xp-currency {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 60px 10px 20px;
    font-weight: bold;
}

.xp-currency__xp {
    margin-right: 15px;
    font-size: 1em;
    color: #3888ff;
}

.xp-currency__coins {
    font-size: 1em;
    color: white;
    background-color: #3888ff;
    padding: 5px 10px;
    border-radius: 49px;
}

.conquest-card {
    text-align: center;
    padding: 20px 0;
    background-color: #ecf4ff;
    border-radius: 10px;
    width: 100%;
    margin: 0;
}

.conquest-card img {
    margin: 20px auto 0;
    width: 60px;
}

.conquest-card h1 {
    margin: 0 0 8px;
    padding: 0 20px;
    font-size: 1.5em;
    color: #027da4;
}

.conquest-card p {
    margin: 0 0 20px;
    padding: 0 20px;
    font-size: 0.9em;
    color: #758eb5;
    font-weight: bold;
}
</style>