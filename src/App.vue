<template>
  <div id="app">
    <Navbar v-if="isLoggedIn" />
    <router-view v-if="isLoggedIn" />
    <!-- <router-link></router-link> -->
    <Login class="different-app" v-else @Login::loginResult="handleLoginResult" />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Login from './views/Login.vue'
  export default {
    name: "App",
    data() {
      return {
        userIsLoggedIn: false
      }
    },
    components: {
      Navbar,
      Login
    },
    computed: {
      isLoggedIn() {
        return this.userIsLoggedIn
      }
    },
    methods: {
      handleLoginResult({
        loginResult
      }) {
        this.userIsLoggedIn = loginResult
      }
    }
  }
</script>

<style lang="scss">

  .different-app {
    text-align: left;
  }

  #app{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #custom {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>