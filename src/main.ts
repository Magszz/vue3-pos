import { createApp } from "vue";
import { VueFire, VueFireAuth } from "vuefire";

import { firebaseApp } from "./lib/firebase/firebase";
import "./index.css";
import App from "@/App.vue";

const app = createApp(App);

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.mount("#app");
