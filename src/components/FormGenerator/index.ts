import { App } from "vue";
import formGenerator from "./src/index.vue";

export const FormGenerator = Object.assign(formGenerator, {
  install(app: App) {
    app.component(formGenerator.name, formGenerator);
  }
});

export default FormGenerator;
