<template>
	<div class="detail">
		<div class="container">
			<div class="row">
				<h3>Title</h3>
			</div>
			<div class="row">
				<input type="text" readonly class="form-control" id="title" v-bind:value="post.title">
			</div>
			<div class="row">
				<h3>Body Content</h3>
			</div>
			<div class="row">
				<input type="text" readonly class="form-control" id="body" v-bind:value="post.body">
			</div>
		</div>
	</div>
</template>

<script>
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
			}
		},
		mounted: function () {
			this.init()
		}
	}
</script>