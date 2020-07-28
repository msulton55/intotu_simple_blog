<template>
  <div id="app">
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item">
        <router-link to="/home" class="nav-link" v-bind:class="{active: this.$route.name=='Home'}">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/create" class="nav-link" active-class="active">Create</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>