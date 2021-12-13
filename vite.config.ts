import { ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}

const alias: Record<string, string> = {
  '@': pathResolve("src")
}

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  const prodMock = true;
  return {
    resolve: {
      alias
    },
    server: {
      port: 8888, // 你需要定义的端口号
      open: true, // open支持boolean/string类型，为true时打开默认浏览器，为string类型时，打开指定浏览器，具体查看官网即可
      // proxy: { // 代理配置
      //   '/dev': 'https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/'
      // },
    },
    build: {
      // @ts-ignore
      sourcemap: false,
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            'echarts': ['echarts']
          }
        }
      }
    },
    plugins: [
      vue(),
      styleImport({
        libs: [
          // { 
          //   libraryName: 'vant', 
          //   style: (name) => { return `vant/es/${name}/index.css` } 
          // }, 
          {
            libraryName: 'element-plus',
            resolveStyle: name => `element-plus/es/components/${name.slice(3)}/style/css`
          }]
      }),
      // viteMockServe({
      //   mockPath: 'mock',
      //   localEnabled: command === 'serve',
      //   prodEnabled: command !== 'serve' && prodMock,
      //   watchFiles: true,
      //   injectCode: `
      //     import { setupProdMockServer } from '../mockProdServer';
      //     setupProdMockServer();
      //   `,
      //   logger: true,
      // }),
    ]
  };
}
