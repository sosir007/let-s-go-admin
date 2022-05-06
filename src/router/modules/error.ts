import { $t } from "@/locales";
import Layout from "@/layout/index.vue";

const errorRouter = {
  path: "/error",
  name: "error",
  component: Layout,
  redirect: "/error/401",
  meta: {
    icon: "icon-page-error",
    title: $t("route.errorPages"),
    showLink: true,
    i18n: true,
    rank: 7
  },
  children: [
    {
      path: "/error/401",
      name: "401",
      component: () => import("@/views/error/401.vue"),
      meta: {
        icon: "icon-error-401",
        title: $t("route.page401"),
        i18n: true,
        showLink: true
      }
    },
    {
      path: "/error/404",
      name: "404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        icon: "icon-error-404",
        title: "route.page404",
        i18n: true,
        showLink: true
      }
    }
  ]
};

export default errorRouter;
