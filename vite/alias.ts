import { resolve } from 'path'
import { AliasOptions } from 'vite'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}

// const alias: Record<string, string> = {
const alias = {
  '@': pathResolve("../src"),
  "@build": pathResolve("../build"),
  'vue': 'vue/dist/vue.esm-bundler.js', // 定义vue的别名，如果使用其他的插件，可能会用到别名
  "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js", // 解决开发环境下的警告
} 

export default alias
