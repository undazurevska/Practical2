<template>
<div class="container">
    <h1 class="title">WE</h1>
    <h1 class="title2">LOVE</h1>
    <h1 class="title">MUSIC</h1>
    <div class="subtitle-container">
        <p class="subtitle">POWERED BY</p>
        <p class="subtitle2">SPOTIFY API</p>
    </div>
</div>
</template>
  
  
<style>
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    }

.container {
    margin: 0;
    padding: 0;
    /* background-image: url('../assets/BG-Image.png'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    width: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.title {
    font-size: 7rem;
    color: #fff;
}

.title2 {
    font-size: 7rem;
    color: #FB0048;
}

.subtitle-container {
    display: flex;
    align-items: center;
}

.subtitle {
    margin-right: 10px;
    font-size: 1rem;
    color: #544F69;
}

.subtitle2 {
    font-size: 1rem;
    color: #67FF64;
}
</style>
