import { App } from "vue";
import cropper from "./src";

export const Cropper = Object.assign(cropper, {
  install(app: App) {
    app.component(cropper.name, cropper);
  }
});

export default Cropper;
