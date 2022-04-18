import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router";
import store from "./store/store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import AOS from "aos";
import "aos/dist/aos.css";
import mitt from "mitt";
import { Chart, registerables } from "chart.js";
const emitter = mitt();
const app = createApp(App);
Chart.register(...registerables);
app.config.globalProperties.emitter = emitter;
app
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .use(AOS)
  .use(emitter)
  .mount("#app");
