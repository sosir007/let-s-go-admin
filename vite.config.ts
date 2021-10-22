import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8888, // 你需要定义的端口号
    open: true, // open支持boolean/string类型，为true时打开默认浏览器，为string类型时，打开指定浏览器，具体查看官网即可
    // proxy: { // 配置本地代理地址
    //   '/dev': 'http://xxx.xxx.com/api'
    // }
  }
})

// import { ConfigEnv, UserConfigExport } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import { viteMockServe } from 'vite-plugin-mock'
// import { resolve } from 'path'

// const pathResolve = (dir: string): any => {
//   return resolve(__dirname, ".", dir)
// }

// const alias: Record<string, string> = {
//   '@': pathResolve("src")
// }

// // https://vitejs.dev/config/
// export default ({ command }: ConfigEnv): UserConfigExport => {
//   const prodMock = true;
//   return {
//     resolve: {
//       alias
//     },
//     server: {
//       port: 3001,
//       open: true,
//       proxy: { // 代理配置
//         '/dev': 'https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/'
//       },
//     },
//     build: {
//       rollupOptions: {
//         output: {
//           manualChunks: {
//             'echarts': ['echarts']
//           }
//         }
//       }
//     },
//     plugins: [
//       vue(),
//       viteMockServe({
//         mockPath: 'mock',
//         localEnabled: command === 'serve',
//         prodEnabled: command !== 'serve' && prodMock,
//         watchFiles: true,
//         injectCode: `
//           import { setupProdMockServer } from '../mockProdServer';
//           setupProdMockServer();
//         `,
//         logger: true,
//       }),
//     ]
//   };
// }
