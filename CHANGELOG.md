# 1.0.2 (2022-03-11～2022-)

## 🎫 Features 

- 新增组件模块图片裁剪组件
- 新增数字滚动组件

##  🍏 Perf

- 新增 jsx、tsx语法支持
- 新增 windicss 配置样式



# 1.0.1 (2022-03-07～2022-03-10)

## 🎫 Features 

- 新增组件模块视频组件
- 新增组件模块地图组件（目前采用高德地图）
- 新增按钮组件和倒计时组件（都通过 iframe 引入）

## 🍏 Perf

- 新增 development 和 production 的配置文件



# 0.1.4-beta (2022-02-18～2022-03-07)

## 🎫 Features 

- 新增系统设置抽屉组件（功能暂时未开发）
- 新增标签组件，带来更好的交互体验
- 新增左侧菜单栏和标签的联动交互

## 🍏 Perf

- 优化本地存储，内置四个键`responsive-configure`、`responsive-locale`、`responsive-layout`、`responsive-tags`，分别为基本配置、国际化配置、布局配置、标签页持久化配置



# 0.1.3-beta (2022-01-07～2022-02-17)

## 🎫 Features 

- 新增国际化配置
- 新增顶部 navbar，增加折叠导航栏、面包屑导航、全屏按钮、切换语言、退出登录等
- 新增 svg 组件化和 element Plus 的 svg 图标支持

## 🍏 Perf

+ 优化路由组件
+ 修改左侧导航栏收缩样式

## 🐞 Bug fixes

+ 修复路由组件报错问题



# 0.1.2-beta (2021-12-30～2022-01-06)

## 🎫 Features 

- 初步完成路由判断
- 左侧菜单栏显示路由和样式修改
- 新增一些 vue 指令（包括 v-resize 监听页面宽度）
- storage 新增一些属性（包括 layout、set等）
- 新增一些插件（包括 响应式本地存储 responsive-storage 、发布订阅 mitt 等）

## 🍏 Perf

+ 修改字体图标方案



# 0.1.1-beta (2021-12-22～2021-12-24)

## 🎫 Features 

- 新增登录页面（实现验证码和校验等功能）
- 新增一些全局配置等（包括 ajax 请求、store 新增 user 等）
- 新增一些全局 utils 函数（包括校验、message 组件等）
- 新增 mock 数据功能，以提供调通 api
- 新增字体图标（目前采用线上获取方案）

## 🍏 Perf

+ 更改包管理功能 yarn 为 pnpm（由于 yarn 安装某些依赖存在问题）



# 0.1.0-beta (2021-12-13)
- element framework 骨架



## 🎫  Features 

- 新增左侧菜单模式（路由还存在问题未完成）
- 新增权限配置（一些简单固定角色/动态路由菜单， 未完成）
- 新增一些简单全局的配置（包括 store、router、style 等）
