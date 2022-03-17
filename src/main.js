import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";



// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
// import 'popper.js';
// import 'bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/maleBarber.scss';

// import 'jquery-ui-bundle';
// import 'jquery-ui-bundle/jquery-ui.css';

import VueSplide from '@splidejs/vue-splide';





Vue.config.productionTip = false;



Vue.use(VueSplide);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
