<template>
	<div class="detail">
		<div class="container">
			<div class="row">
				<h3>Title</h3>
			</div>
			<div class="row">
				<input type="text" class="form-control" id="title" v-bind:value="post.title">
			</div>
			<div class="row">
				<h3>Body Content</h3>
			</div>
			<div class="row">
				<input type="text" class="form-control" id="body" v-bind:value="post.body">
			</div>
			<br />
			<div class="row">
        <button class="btn btn-primary" name="action" v-on:click="updatePost">Update</button>
      </div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "Detail",
		data() {
			return {
				post: {}
			}
		},
		methods: {
			init: function () {
				const id = this.$route.params.id
				const baseURI = 'https://dummy-api.winfad.com/api/posts/' + id
				this.$http.get(baseURI)
					.then((result) => {
						this.post = result.data
					})
			},
			
			updatePost: async function () {
				let title = document.getElementById("title").value
        let body = document.getElementById("body").value

        axios.post('https://dummy-api.winfad.com/api/posts/' + this.post.id + '/update', {
            title: title,
            body: body
          })
          .then(function (response) {
            alert("Success Update!")
          })
          .catch(function (error) {
            console.log(error);
          });
			}
		},
		mounted: function () {
			this.init()
		}
	}
</script>