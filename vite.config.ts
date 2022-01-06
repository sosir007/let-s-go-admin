import { ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import themePreprocessorPlugin from "@zougt/vite-plugin-theme-preprocessor";

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}

const alias: Record<string, string> = {
  '@': pathResolve("src"),
  "@build": pathResolve("build"),
  'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
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
    plugins: [
      vue(),
      // styleImport({
      //   libs: [
      //     // { 
      //     //   libraryName: 'vant', 
      //     //   style: (name) => { return `vant/es/${name}/index.css` } 
      //     // }, 
      //     {
      //       libraryName: 'element-plus',
      //       resolveStyle: name => `element-plus/es/components/${name.slice(3)}/style/css`
      //     }]
      // }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        watchFiles: true,
        injectCode: `
          import { setupProdMockServer } from '../mockProdServer';
          setupProdMockServer();
        `,
        logger: true,
      }),
      // 自定义主题
      themePreprocessorPlugin({
        scss: {
          multipleScopeVars: [
            // {
            //   scopeName: "layout-theme-default",
            //   path: pathResolve("src/layout/theme/default-vars.scss")
            // },
            {
              scopeName: "layout-theme-light",
              path: pathResolve("src/layout/theme/light-vars.scss")
            },
            // {
            //   scopeName: "layout-theme-dusk",
            //   path: pathResolve("src/layout/theme/dusk-vars.scss")
            // },
            // {
            //   scopeName: "layout-theme-volcano",
            //   path: pathResolve("src/layout/theme/volcano-vars.scss")
            // },
            // {
            //   scopeName: "layout-theme-yellow",
            //   path: pathResolve("src/layout/theme/yellow-vars.scss")
            // },
            // {
            //   scopeName: "layout-theme-mingQing",
            //   path: pathResolve("src/layout/theme/mingQing-vars.scss")
            // },
            // {
            //   scopeName: "layout-theme-auroraGreen",
            //   path: pathResolve("src/layout/theme/auroraGreen-vars.scss")
            // },
            // {
            //   scopeName: "layout-theme-pink",
            //   path: pathResolve("src/layout/theme/pink-vars.scss")
            // },
            // {
            //   scopeName: "layout-theme-saucePurple",
            //   path: pathResolve("src/layout/theme/saucePurple-vars.scss")
            // }
          ],
          // 默认取 multipleScopeVars[0].scopeName
          defaultScopeName: "",
          // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
          extract: true,
          // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
          outputDir: "",
          // 会选取defaultScopeName对应的主题css文件在html添加link
          themeLinkTagId: "head",
          // "head"||"head-prepend" || "body" ||"body-prepend"
          themeLinkTagInjectTo: "head",
          // 是否对抽取的css文件内对应scopeName的权重类名移除
          removeCssScopeName: false,
          // 可以自定义css文件名称的函数
          customThemeCssFileName: scopeName => scopeName
        }
      }),
    ]
  };
}
