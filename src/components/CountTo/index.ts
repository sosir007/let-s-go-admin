import { App } from "vue";
import normalCountTo from "./src/normal";
// import reboundCountTo from "./src/rebound";

export const NormalCountTo = Object.assign(normalCountTo, {
  install(app: App) {
    app.component(normalCountTo.name, normalCountTo);
  }
});

// export const ReboundCountTo = Object.assign(reboundCountTo, {
//   install(app: App) {
//     app.component(reboundCountTo.name, reboundCountTo);
//   }
// });
