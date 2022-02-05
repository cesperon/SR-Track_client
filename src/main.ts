import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faFingerprint,
  faTaxi,
  faAngry,
  faFistRaised,
  faFighterJet,
  faCarCrash,
  faDragon,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHome,
  faFingerprint,
  faTaxi,
  faAngry,
  faFistRaised,
  faFighterJet,
  faCarCrash,
  faDragon,
  faBars
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
