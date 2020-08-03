import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Vuex from  'vuex';


Vue.config.productionTip = false;

Vue.use(Vuex)
Vue.prototype.$http = axios
Vue.prototype.$ajax = axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");