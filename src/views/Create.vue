<template>
  <div class="create" id="app">
    <div class="container">
      <div class="row">
        <h2>CREATE BLOG</h2>
      </div>
      <div class="row">
        <input type="text" class="form-control" id="title" placeholder="Title">
      </div>
      <div class="row">
        <textarea class="form-control" id="body" rows="3" placeholder="Blog Content"></textarea>
      </div>
      <br />
      <div class="row">
        <button class="btn btn-primary" name="action" v-on:click="createPost">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: "Create",
    methods: {
      createPost: async function () {
        let title = document.getElementById("title").value
        let body = document.getElementById("body").value

        axios.post('https://dummy-api.winfad.com/api/posts', {
            title: title,
            body: body
          })
          .then(function (response) {
            document.getElementById("title").value = ''
            document.getElementById("body").value = ''
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>