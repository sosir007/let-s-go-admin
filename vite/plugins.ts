import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import WindiCSS from "vite-plugin-windicss";
import svgLoader from "vite-svg-loader";
import styleImport from 'vite-plugin-style-import'
import { viteMockServe } from 'vite-plugin-mock'
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import themePreprocessorPlugin from "@zougt/vite-plugin-theme-preprocessor";

export function getPluginsList(command: "build" | "serve") {
  const prodMock = true;
  return [
    vue(),
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve("src/locales/**")]
    }),
    // jsx、tsx语法支持
    vueJsx(),
    // svg组件化支持
    WindiCSS(),
    svgLoader(),
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
            path: resolve(__dirname, ".", "../src/layout/theme/light-vars.scss")
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
}
