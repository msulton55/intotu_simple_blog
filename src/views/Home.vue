<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">INTOTU BLOG</h1>
        <p class="lead">Your simple blogging page!</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <blog></blog>
        <blog></blog> 
        <blog></blog>
      </div>
    </div>    

  </div>
</template>

<script>
// @ is an alias to /src
import Blog from "../components/Blog.vue";

export default {
  name: "Home",
  components: {
    Blog
  }
};
</script>
