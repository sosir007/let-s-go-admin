import { App } from "vue";
import loading from "./src/index.vue";

export const Loading = Object.assign(loading, {
  install(app: App) {
    app.component(loading.name, loading);
  }
});

export default Loading;
