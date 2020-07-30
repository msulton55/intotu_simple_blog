<template>
  <div class="main">

    <Jumbotron />

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

    <br />

    <nav aria-label="blog-pagination">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" aria-label="Previous" v-if="page != 1" @click="previous()" style="cursor: pointer">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="num in total_page" v-bind:key="num"><a class="page-link" @click="goTo(num)"
            style="cursor: pointer">{{num}}</a></li>
        <li class="page-item">
          <a class="page-link" aria-label="Next" v-if="page != total_page" @click="next()" style="cursor: pointer">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import Jumbotron from "../components/Jumbotron.vue"
  export default {
    name: "Main",
    components: {
      Jumbotron
    },
    data() {
      return {
        total_data: 1,
        total_page: 1,
        page: 1,
        posts: []
      }
    },
    methods: {
      init: function () {
        const baseURI = 'https://dummy-api.winfad.com/api/posts?per_page=9&page=' + this.page
        this.$http.get(baseURI)
          .then((result) => {
            this.posts = result.data.data,
              this.total_data = result.data.total_data,
              this.total_page = result.data.total_page
          })
      },
      previous() {
        if (this.page != 1)
          this.page--
        this.init()
      },
      next() {
        this.page++
        this.init()
      },
      goTo(num) {
        this.page = num
        this.init()
      }
    },
    mounted: function () {
      this.init()
    }
  }
</script>