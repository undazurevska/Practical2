<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import NavComponent from './components/NavComponent.vue';
import { state } from './store';

export default {
  data() {
    return {
      loggedIn: state.user.loggedIn,
      user: {
        name: state.user.firstName, 
        surname: state.user.lastName,
        code: state.user.studentCode,
      },
    };
  },
  components: {
    HeaderComponent,
    NavComponent,
  },
  methods: {
    login() {
      if (confirm("Do you want to log in?")) {
        this.loggedIn = true;
        this.$emit("login", this.loggedIn);
        this.$router.push('/home');
      }
    },
    logout() {
      if (confirm("Do you want to log out?")) {
        this.loggedIn = false;
        this.$emit("logout", this.loggedIn);
        this.$router.push('/');
      }
    },
    navigate(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<template>
<div id="app">
  <HeaderComponent :user="user" :loggedIn="loggedIn" @login="login" @logout="logout" />
  <div class="content-container">
    <div class="nav-container" v-if="loggedIn">
      <NavComponent @navigate="navigate" />
    </div>
    <div class="router-view-container">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<style>
.content-container {
  display: flex;
}

.nav-container {
  flex: 1;
}

.router-view-container {
  flex: 3;
}
</style>
