<template>
  <nav>
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item">
        <router-link to="/" class="nav-link" v-bind:class="{ active: this.$route.path=='/' }">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/create" class="nav-link" active-class="active">Create</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>