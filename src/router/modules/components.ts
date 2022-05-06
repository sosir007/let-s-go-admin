import { $t } from "@/locales";
import Layout from "@/layout/index.vue";

const componentsRouter = {
  path: "/components",
  name: "components",
  component: Layout,
  redirect: "/components/video",
  meta: {
    icon: "icon-zujian",
    title: $t("route.components"),
    showLink: true,
    i18n: true,
    rank: 4
  },
  children: [
    {
      path: "/components/video",
      name: "video",
      component: () => import("@/views/components/video/index.vue"),
      meta: {
        icon: "icon-video",
        title: $t("route.video"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/map",
      name: "map",
      component: () => import("@/views/components/map/index.vue"),
      meta: {
        icon: "icon-map",
        title: $t("route.map"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/draggable",
      name: "draggable",
      component: () => import("@/views/components/draggable/index.vue"),
      meta: {
        icon: "icon-draggable",
        title: $t("route.draggable"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/button",
      name: "button",
      component: () => import("@/views/components/button/index.vue"),
      meta: {
        icon: "icon-button",
        title: $t("route.button"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/countdown",
      name: "countdown",
      component: () => import("@/views/components/countdown/index.vue"),
      meta: {
        icon: "icon-jishiqi",
        title: $t("route.countdown"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/countTo",
      name: "countTo",
      component: () => import("@/views/components/countTo/index.vue"),
      meta: {
        icon: "icon-shuzigundong",
        title: $t("route.countTo"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/cropping",
      name: "cropping",
      component: () => import("@/views/components/cropping/index.vue"),
      meta: {
        icon: "icon-caijian",
        title: $t("route.cropping"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/loading",
      name: "loading",
      component: () => import("@/views/components/loading/index.vue"),
      meta: {
        icon: "icon-Loading",
        title: $t("route.loading"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/iconSelect",
      name: "iconSelect",
      component: () => import("@/views/components/iconSelect/index.vue"),
      meta: {
        icon: "icon-tubiao",
        title: $t("route.iconSelect"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/watermark",
      name: "watermark",
      component: () => import("@/views/components/watermark/index.vue"),
      meta: {
        icon: "icon-shuiyin",
        title: $t("route.watermark"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/editor",
      name: "editor",
      component: () => import("@/views/components/editor/index.vue"),
      meta: {
        icon: "icon-edit",
        title: $t("route.editor"),
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/seamlessScroll",
      name: "seamlessScroll",
      component: () => import("@/views/components/seamlessScroll/index.vue"),
      meta: {
        icon: "icon-scroll",
        title: $t("route.seamlessScroll"),
        i18n: true,
        showLink: true
      }
    },
  ]
};

export default componentsRouter;
