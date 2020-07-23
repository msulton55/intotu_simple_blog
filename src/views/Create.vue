<template>
  <div class="create" id="app">
    <div class="container">
      <div class="row">
        <h2>CREATE BLOG</h2>
      </div>
      <form>
        <div class="row">
          <textarea class="form-control" id="body" rows="3"
            placeholder="Blog Content"></textarea>
        </div>
        <div class="row">
          <button type="submit" class="btn btn-primary" name="action" v-on:click="createPost">Submit</button>
        </div>
      </form>

    </div>

  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
  export default {
    name: "Create"
  };
</script>

<script>
  var app = new Vue({
    el: "#app",
    methods: {
      createPost: function () {
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
  })
</script>