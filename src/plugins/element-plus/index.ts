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
  ElInput,
  ElForm,
  ElFormItem,
  ElTooltip,
  ElIcon,
  ElBacktop,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
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
  ElInput,
  ElForm,
  ElFormItem,
  ElTooltip,
  ElIcon,
  ElBacktop,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
];

// const plugins = [ElLoading];

// https://element-plus.org/zh-CN/component/icon.html
import {
  Check,
  Close,
} from "@element-plus/icons-vue";

// Icon
export const iconComponents = [
  Check,
  Close,
];


function useElementPlus(app: App) {
  // 注册组件
  components.forEach((component: Component) => {
    app.component(component.name, component);
  });
  // 注册指令
  // plugins.forEach(plugin => {
  //   app.use(plugin);
  // });
  // 注册图标
  iconComponents.forEach((component: Component) => {
    app.component(component.name, component);
  });
}

export function setupElementComp(app: App) {
  app.use(useElementPlus);
}
