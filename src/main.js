import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueResource from "vue-resource";
import Chakra, { CThemeProvider, CReset } from "@chakra-ui/vue";

import "./registerServiceWorker";

Vue.use(vueResource);
Vue.use(Chakra);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)]),
}).$mount("#app");
