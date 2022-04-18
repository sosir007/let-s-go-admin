import { ConfigEnv, UserConfigExport } from 'vite'
import alias from './vite/alias'
import { getPluginsList } from "./vite/plugins";

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias
    },
    server: {
      port: 8888, // 你需要定义的端口号
      open: true, // open支持boolean/string类型，为true时打开默认浏览器，为string类型时，打开指定浏览器，具体查看官网即可
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api/v1')
        }
      }
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
    plugins: getPluginsList(command),
  };
}
