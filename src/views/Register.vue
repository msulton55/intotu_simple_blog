<template>
  <div class="register">
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <h2>Register</h2>
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="firstname">Firstname</label>
                <input required autofocus v-model="firstname" type="text" name="firstname" class="form-control" />
                <!-- <div class="invalid-feedback">Username is required</div> -->
              </div>
              <div class="form-group">
                <label for="lastname">Last Name</label>
                <input required type="text" v-model="lastname" name="lastname" class="form-control" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input required type="email" v-model="email" name="email" class="form-control" />
              </div>
              <div class="form-group">
                <label for="username">Username</label>
                <input required type="text" v-model="username" name="username" class="form-control" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input required type="password" v-model="password" name="password" class="form-control" />
              </div>
              <div class="form-group">
                <label for="password_confirmation">Password Confirmation</label>
                <input required type="password" v-model="password_confirmation" name="password_confirmation"
                  class="form-control" />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Register</button>
                <router-link to="/login" class="btn btn-link">Cancel</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        password_confirmation: ""
      }
    },
    methods: {
      register() {
        let data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          username: this.username,
          password: this.password
        }
        this.$store.dispatch('register', data)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
      }
    }
  }
</script>