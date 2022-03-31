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
+ **lodash-es**: lodash 导出为 ES 模块
+ **@zougt/vite-plugin-theme-preprocessor**：？
+ **@vueuse/motion**：使用弹簧在数值之间产生平滑和自然的过渡
+ **makeit-captcha**：基于 vue3 + vite 开发，动态生成验证滑块的验证码组件
+ **vee-validate@next**：基于 vue3 的校验框架，没有自带好的校验规则时使用，进行表单校验
+ **js-cookie、@types/js-cookie**：用于处理 cookie 的简单、轻量级的 JavaScript API
+ **qs、@types/qs**：支持嵌套和数组的查询字符串解析器，具有深度限制
+ **mockjs、@types/mockjs**：生成随机数据和拦截 Ajax 请求
+ **vite-plugin-mock**：基于 mockjs 开发的 vite 模拟插件。并同时支持本地环境和生产环境。本地使用连接服务中间件，在线使用 mockjs
+ **path-browserify**：整合 vite 后，vite 源码中设定了不允许在客户端代码中访问内置模块代码使用，所以使用 path-browserify 代替 path 模块
+ **@vueuse/core**：是为 Vue2 和 Vue3 服务的一套 Vue Composition API 的常用工具集
+ **responsive-storage**：基于 Vue3 的响应式本地存储
+ **mitt**：微型功能事件发射器/发布订阅
+ **element-resize-detector、@types/element-resize-detector**：优化了元素的跨浏览器大小调整侦听器
+ **vue-i18n@next**：适配 vue3 的国际化插件
+ **@element-plus/icons-vue**：element Plus 提供了一套常用的 svg 图标集合
+ **vite-svg-loader**：svg 组件化支持，在 vue 组件中加载 svg 文件
+ **lodash-unified**：ESModule 和 Commonjs 的 lodash 联合入口点
+ **xgplayer**：一款带解析器、能节省流量的HTML5视频播放器
+ **@amap/amap-jsapi-loader**：高德官网提供的地图JSAPI加载器，可以避免多种异步加载API的错误用法
+ **cropperjs**：JavaScript 图像裁剪器
+ **@vitejs/plugin-vue-jsx**：通过 HMR 提供 Vue 3 JSX 和 TSX 支持
+ **vue-types**：VueTypes 是一组可配置的 prop 验证器对于 Vue.js，受 React 启发prop-types
+ **vite-plugin-windicss windicss**：下一代工具类 CSS 框架
+ **vuedraggable**：Vue 的可拖动组件
+ **@iconify/vue、@iconify-icons/ep、@iconify-icons/fa、@iconify-icons/fa-solid、@iconify-icons/ri**：统一的图标框架
+ **resize-observer-polyfill**：Resize Observer API 的 polyfill



## 项目计划：

1. **整体框架 framework**：21.12.13 ~ 21.12.21，21.12.30 ～ 22.03.07
   + 遗留问题：
     1. 简化版路由（后续待优化）（已优化）
     2. 完成 element 版本框架，计划切换框架完成 antd-vue 版本的（暂缓）
     4. 系统设置（包括修改主题色等一系列操作）
2. **登录模块**：21.12.22 ~ 21.12.24
   + 遗留问题：
     1. logo 和 背景图需要替换（暂时找不到好的方案）
     2. 其他登录方式未实现（包括 github、微信 Oauth 登录等）
     3. 忘记密码和注册账号功能暂未实现
3. **组件模块**：22.03.07 ~ 
4. 待定……



## 已完成任务：

1. **整体框架 framework**：
   + 左侧菜单栏 sidebar
   + 顶部导航栏 navbar：菜单栏折叠功能、面包屑导航功能、全屏功能、切换语言功能、退出登录功能
   + 路由标签栏 tagsview：重新加载功能、关闭标签页功能
2. **登录模块**：实现验证码和校验等功能
3. **组件模块**：视频组件、地图组件、拖拽组件、按钮组件、倒计时组件、数字滚动、图片裁剪、图标选择器、水印组件



## 待优化任务：

1. 优化路由
2. todo 组件开发
3. 引入 antd-vue
4. UI 界面设计、修改主题色
5. logo 和 背景图需要替换
6. 实现其他登录方式
7. 忘记密码和注册账号功能开发



## 待完成任务：

1. 首页模块
2. 错误页面模块
3. 表单生成器模块
4. 功能组件模块
5. 系统管理模块
6. 数据大屏模块
7. 待定……



## 遗留 bug：

1. Cannot access 'constantRoutes' before initialization：src/layout/index.vue 文件修改会有 bug（暂未找到解决方案）



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



## error 记录

+ > Invalid VNode type: Symbol(Text)：pnpm install 组件正常使用，yarn install就会遇到这相同的问题。

+ > [Vue warn]：Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js"：
  >
  > 解释一下上面的意思，组件提供模板选项，但是在Vue的这个构建中不支持运行时编译，配置你的bundler别名 `vue： vue/dist/vue.esm-bundler.js`
  >
  > 
  >
  > vue3 项目：
  >
  > 使用 vite 构建： 项目根目录下面建立 vite.config.js 配置别名， 详细配置
  >
  > ```js
  > alias: {
  > 		'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
  > },
  > ```
  >
  > 使用vue-cli 进行构建，项目根目录下面建立 vue.config.js 配置一个属性
  >
  > ```js
  > module.exports = { runtimeCompiler: true } // 确定是运行时候编译
  > ```
  >
  > 
  >
  > vue2 ,项目中建立对应的.config.js
  >
  > ```js
  > // webpack
  > module.exports = {
  >   // ...
  >   resolve: {
  >     alias: {
  >       'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
  >     }
  >   }
  > }
  > ```
  
+ > [Vue warn]：Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`. 
  >
  >
  > 当使用内置组件compoent时is传入组件需要把引入的组件对象使用markRaw函数修改为不响应的原始值。提示你去给组件使用`markRaw` or `shallowRef`包起来就好了，我直接使用了markRaw来包起组件
  >
  > ```js
  > import { markRaw } from 'vue'
  > 
  > markRaw(refresh)
  > ```
  
+ > Uncaught (in promise) ReferenceError: React is not defined
  >
  > 没有添加 jsx 配置，安装 @vitejs/plugin-vue-jsx 依赖就可以了。



# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

