# let‘s-go-admin

## 简介

let’s-go-admin 是一个自己学习开发的中后台管理项目。使用了最新的 `vue3`+`vite2`+`TypeScript`+`Element-Plus` 等主流技术开发，开箱即用的中后台前端解决方案，也在不断的学习和完善。



## 配置依赖：

+ **sass、sass-loader**：sass 依赖
+ **element-plus**：element 适配 vue3 版本
+ **vite-plugin-style-import**：按需引入 element 组件样式
+ **animate.css**：初始化全局样式
+ **vue-router@4.0.12**：vue-router4 适配 vue3 版本
+ **nprogress、@types/nprogress**：进度条（路由和接口请求待使用）
+ **pinia**：vue3 的 store 状态管理仓库
+ **axios**：发生 ajax 请求依赖
+ **lodash-es**: ?
+ **@zougt/vite-plugin-theme-preprocessor**：？
+ **@vueuse/motion**：使用弹簧在数值之间产生平滑和自然的过渡
+ **makeit-captcha**：基于 vue3 + vite 开发，动态生成验证滑块的验证码组件
+ **vee-validate@next**：基于 vue3 的验证框架



## 项目计划：

1. **整体框架 framework**：21.12.13 ~ 21.12.21（暂停，先完成登陆模块）
   + 问题：
     1. 简化版路由（后续待优化）
     2. 完成 element 版本框架，计划切换框架完成 antd-vue 版本的
2. **登录模块**：21.12.21 ~ 未定
2. 待定……



## 待优化任务：

1. 优化路由
2. todo 组件开发
3. 引入 antd-vue
4. UI 界面设计



## 待完成任务：

1. 首页模块
3. 表单生成器模块
4. 系统管理模块
5. 数据大屏模块
6. 待定……



## 其他：

1. pc 展示项目
2. 移动端展示项目
3. 后端接口项目
4. 自己开发网站
5. 待定……



## Git 贡献提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中



# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

