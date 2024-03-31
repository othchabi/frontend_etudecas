import { createApp } from "vue";
import App from "./App.vue";
import { router, store } from "./router"; // Importing the router and the store
import "./style.css";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
