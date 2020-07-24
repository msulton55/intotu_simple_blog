<template>
  <div class="home" id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">INTOTU BLOG</h1>
        <p class="lead">Your simple blogging page!</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-4" v-for="post in posts" v-bind:key="post.id">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{{post.title}}</h4>
              <router-link :to="'/detail/'+ post.id" class="btn btn-info">Read</router-link>
            </div>
            <div class="card-footer text-muted d-flex justify-content-center bg-transparent border-top-0">
              <div class="views">{{post.created_at}}</div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: "Home",
    data() {
      return {
        posts: []
      }
    },
    methods: {
      init: function () {
        const baseURI = 'https://dummy-api.winfad.com/api/posts'
        this.$http.get(baseURI)
          .then((result) => {
            this.posts = result.data.data
          })
      }
    },
    mounted: function () {
      this.init()
    }
  }
</script>