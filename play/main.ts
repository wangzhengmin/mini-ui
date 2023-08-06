import { createApp } from "vue";
import App from "./App.vue";

import MiniIcon from "@mini-ui/components/icon";

const app = createApp(App);

app.use(MiniIcon);

app.mount("#app");
