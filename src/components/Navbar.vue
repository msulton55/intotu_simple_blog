<template>
  <nav class="navbar navbar-dark bg-light">
    <ul class="nav nav-pills mx-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link" v-bind:class="{ active: this.$route.path=='/' }">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/create" class="nav-link" active-class="active">Create</router-link>
      </li>
    </ul>
    <form class="logout" @submit.prevent="logout()">
      <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>

    </form>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    methods: {
      logout() {
        this.$store.dispatch('logout')
          .then(() => this.$router.push('/login')
        )}
      }
    }
</script>

<style scoped lang="scss">
  .mx-auto {}
</style>