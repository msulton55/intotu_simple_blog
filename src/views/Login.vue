<template>
  <div class="login text-center">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <router-link to="/register" class="btn btn-link">Register</router-link>
      <p class="mt-5 mb-3 text-muted">&copy;Intotu 2020</p>
    </form>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'

  export default {
    name: "Login",
    namespaced: true,
    data() {
      return {
        username: '',
        password: '',
        submitted: false
      }
    },
    computed: {
      ...mapState('account', ['status'])
    },
    created() {
      // reset login status
      this.logout();
    },
    methods: {
      ...mapActions('account', ['login', 'logout']),
      handleSubmit(e) {
        this.submitted = true;
        const {
          username,
          password
        } = this;
        if (username && password) {
          this.login({
            username,
            password
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>