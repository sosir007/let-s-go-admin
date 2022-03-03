import { App } from "vue";
import { createI18n } from "vue-i18n";
import { storageLocal } from "@/utils/storage";

// 菜单国际化配置
// vxe-table组件国际化
// import zhVxeTable from "vxe-table/lib/locale/lang/zh-CN";
// import enVxeTable from "vxe-table/lib/locale/lang/en-US";

// element-plus国际化
import elementEnLocale from "element-plus/lib/locale/lang/en";
import elementZhLocale from "element-plus/lib/locale/lang/zh-cn";

// User defined lang
import enLocale from './en'
import zhLocale from './zh'

const localesConfigs = {
  zh: {
    ...elementZhLocale,
    // ...zhVxeTable,
    ...zhLocale
  },
  en: {
    ...elementEnLocale,
    // ...enVxeTable,
    ...enLocale
  }
};

export const i18n = createI18n({
  locale: storageLocal.getItem("responsive-locale")?.locale ?? "zh",
  fallbackLocale: "en",
  messages: localesConfigs
});

export function setupI18n(app: App) {
  app.use(i18n);
}

// 此函数只是配合i18n Ally插件来进行国际化智能提示，并无实际意义（只对提示起作用），如果不需要国际化可删除
export const $t = (key: string) => key;

/**
 * 国际化转换工具函数
 * @param message message
 * @param isI18n  如果true,获取对应的消息,否则返回本身
 * @returns message
 */
export function transformI18n(message: string | object = "", isI18n = false) {
  if (!message) {
    return "";
  }

  // 处理存储动态路由的title,格式 {zh:"",en:""}
  if (typeof message === "object") {
    return message[i18n.global?.locale];
  }

  if (isI18n) {
    //@ts-ignore
    return i18n.global.tc.call(i18n.global, message);
  } else {
    return message;
  }
}
