import type { App } from "vue";
import { MotionPlugin } from "@vueuse/motion";

import MakeitCaptcha from "makeit-captcha";
import 'makeit-captcha/dist/captcha.min.css';

// 全局注册`@iconify/vue`图标库
import {
  IconifyIconOffline,
  IconifyIconOnline,
  FontIcon
} from "./Icon";

export function setupCustomComponents(app: App<Element>) {
  app.use(MotionPlugin)
    .use(MakeitCaptcha);

  app.component("IconifyIconOffline", IconifyIconOffline)
    .component("IconifyIconOnline", IconifyIconOnline)
    .component("FontIcon", FontIcon);
}
