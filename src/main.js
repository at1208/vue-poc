import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import { router } from "./routes";
import store from "./store";

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
