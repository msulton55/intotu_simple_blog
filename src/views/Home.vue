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
        <div class="col-4" v-for="post in posts" v-bind:key="post">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title" v-text="post.title"></h4>
              <a href="#" class="btn btn-info">Read</a>
            </div>
            <div class="card-footer text-muted d-flex justify-content-center bg-transparent border-top-0">
              <div class="views">Oct 20, 12:45PM</div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
  // @ is an alias to /src
  export default {
    name: "Home"
  }
</script>

<script type ="text/javascript">
  var app = new Vue({
    el: "#app",
    data: {
      test: "Lorem Ipsum VueJS",
      posts: []
    },
    methods: {
      init: function () {
        axios.get('https://dummy-api.winfad.com/api/posts')
          .then(function (response) {
            app.posts = response.data.data;
          })
      }
    },
    mounted: function () {
      this.init()
    }
  })
</script>