import { createStore } from "vuex";
import postModule from "./modules/Post";

const store = createStore(postModule);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
