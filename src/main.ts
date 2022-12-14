import { createApp } from 'vue'
import App from './App.vue'

import { setupElementComp } from "../src/plugins/element-plus";
import 'element-plus/dist/index.css'
import { router, setupRouter } from '@/router';
import { setupStore } from "@/store";
import { setupCustomComponents } from "@/components";
import { getServerConfig } from "./config";

import "animate.css";
// 导入公共样式
import "./style/index.scss";

async function bootstrap() {
  const app = createApp(App);

  // 获取全局配置
  await getServerConfig(app)

  // 挂载状态管理
  setupStore(app);

  // Register element-plus components
  setupElementComp(app);

  // 注册全局自定义组件（包括第三方组件等）
  setupCustomComponents(app);

  // 注册全局自定义指令，如：v-permission权限指令
  // setupDirectives(app);

  // 挂载路由
  await setupRouter(app);

  // 路由准备就绪后挂载APP实例
  await router.isReady();

  app.mount('#app');
}

bootstrap()
