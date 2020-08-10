<template>
  <div class="main">

    <Jumbotron />

    <div class="container">
      <div class="row">
        <CardBlog v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
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
        <li class="page-item" v-for="num in total_page" v-bind:key="num" v-bind:class="page===num ? 'active' : ''"><a
            class="page-link" @click="goTo(num)" style="cursor: pointer">{{num}}</a></li>
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
  import CardBlog from "../components/CardBlog.vue"

  export default {
    name: "Main",
    components: {
      Jumbotron,
      CardBlog
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