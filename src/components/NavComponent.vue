<script>
export default {
  name: 'NavComponent'
}
</script>

<template>
<nav class="navigation">
  <div>
    <router-link to="/home" class="nav-button" active-class="active">Home</router-link>
    <router-link to="/about-me" class="nav-button" active-class="active">About</router-link>
  </div>
</nav>
</template>


<style>
.navigation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
  background-color: #544F69;
  overflow: hidden;
  height: 100vh;
}

.nav-button {
  background-color: #7448E0;
  color: white;
  width: 80%;
  padding: 15px;
  border: none;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  transform: skewX(-20deg) top left;
  border-radius: 0;
  text-align: left;
  text-decoration: none;
  display: block;
}

.nav-button.active {
  background-color: #544F69;
}
</style>
