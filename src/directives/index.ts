import type { App } from "vue";
// 自定义指令
// import { permission } from './permission';
import { resize } from "./elResizeDetector";

export function setupDirectives(app: App<Element>) {
  // app.directive('permission', permission);
  app.directive('resize', resize);
}
