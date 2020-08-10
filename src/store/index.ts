import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    data: {},
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, {token, data}){
      state.status = 'success'
      state.token = 'Bearer ' + token
      state.data = data
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'https://dummy-api.winfad.com/api/auth/login',
          data: {
            grant_type: 'password',
            client_id: 2,
            client_secret: 'ADagNLs34zBWBPah1BS9XCXllvIOaHMK20DDuY2w',
            username: user.email,
            password: user.password
          },
          method: 'POST'
        })
        .then(resp => {
          const data = resp.data
          localStorage.setItem('token', 'Bearer ' + data.access_token)
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token
          commit('auth_success', data.access_token, data)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },

    register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:8080/register', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },

    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  modules: {},
  getters: {
    isLoggedIn: state => state.token,
    authStatus: state => state.status
  }
});