import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate/src";
import router from "./router";
import store from "./store";
import messagePlugin from "./utils/message.plugin"
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";
import dateFilter from "./filters/date.filter";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
