import { App, Component } from "vue";
import {
  ElButton,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElFooter,
  ElScrollbar,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
} from "element-plus";

const components = [
  ElButton,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElFooter,
  ElScrollbar,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
];

// const plugins = [ElLoading];

function useElementPlus(app: App) {
  components.forEach((component: Component) => {
    app.component(component.name, component);
  });
  // plugins.forEach(plugin => {
  //   app.use(plugin);
  // });
}

export function registerElementComp(app: App) {
  app.use(useElementPlus);
}
