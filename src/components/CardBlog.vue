<template>
  <div class="col-4">
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
</template>

<script>
  export default {
    name: 'CardBlog',
    props: [
      'post'
    ]
  }
</script>