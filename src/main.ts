import { createApp } from 'vue'
import App from './App.vue'

import { registerElementComp } from "../src/plugins/element-plus";

import "animate.css";
// 导入公共样式
import "./style/index.scss";

async function bootstrap() {
  const app = createApp(App);

  // Register element-plus components
  registerElementComp(app);

  app.mount('#app');
}

bootstrap()
