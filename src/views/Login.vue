<template>
  <div class="login">
    <h2>Login</h2>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" v-model="username" name="username" class="form-control"
        :class="{ 'is-invalid': submitted && !username }" />
      <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
    </div>
    <div class="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" v-model="password" name="password" class="form-control"
        :class="{ 'is-invalid': submitted && !password }" />
      <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click="logIn"  >Login</button>
      <router-link to="/register" class="btn btn-link">Register</router-link>
    </div>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      logIn() {
        this.$emit('Login::loginResult', {loginResult: true})
      }
    }
  }
</script>