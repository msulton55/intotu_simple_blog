<template>
  <div class="navbar justify-content-center">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link to="/" class="nav-link" v-bind:class="{ active: this.$route.name=='Home' }">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/create" class="nav-link" active-class="active">Create</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navbar",

  }
</script>