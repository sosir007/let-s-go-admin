import type { App } from "vue";
import { MotionPlugin } from "@vueuse/motion";

import MakeitCaptcha from "makeit-captcha";
import 'makeit-captcha/dist/captcha.min.css';

export function setupCustomComponents(app: App<Element>) {
  app.use(MotionPlugin)
    .use(MakeitCaptcha);
}
