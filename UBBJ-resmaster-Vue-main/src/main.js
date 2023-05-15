import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/Router";
import store from "./store";
import "./styles/allStyles.css"

createApp(App).use(store).use(router).mount("#app");
