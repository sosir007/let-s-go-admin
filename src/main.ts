import { createApp } from 'vue'
import App from './App.vue'

import { registerElementComp } from "../src/plugins/element-plus";
import { router, setupRouter } from '@/router';
import { setupStore } from "@/store";
import { getServerConfig } from "./config";

import "animate.css";
// 导入公共样式
import "./style/index.scss";

async function bootstrap() {
  const app = createApp(App);

  // 获取全局配置
  await getServerConfig(app)

  // Configure store
  setupStore(app);

  // Register element-plus components
  registerElementComp(app);

  // Configure routing
  setupRouter(app);

  app.mount('#app');
}

bootstrap()
