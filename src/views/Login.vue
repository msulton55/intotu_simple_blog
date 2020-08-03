<template>
  <div class="login">
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <h2>Login</h2>
            <form class="login" @submit.prevent="login()">
              <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="text" name="email" class="form-control" required autofocus />
                <!-- <input v-model="username" type="text" name="username" class="form-control"
                  :class="{ 'is-invalid': submitted && !username }" /> -->
                <!-- <div class="invalid-feedback" v-show="submitted && !username">Username is required</div> -->
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" name="password" class="form-control" required />
                <!-- <input v-model="password" type="password" name="password" class="form-control"
                  :class="{ 'is-invalid': submitted && !password }" /> -->
                <!-- <div class="invalid-feedback" v-show="submitted && !password">Password is required</div> -->
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Login</button>
                <router-link :to="'/register'" class="btn btn-link">Register</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .login {
    text-align: left
  }
</style>

<script>
  import axios from 'axios'
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      login() {
        let email = this.email
        let password = this.password
        this.$store.dispatch('login', {email, password})
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
      }
    }
  }
</script>