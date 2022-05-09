import { $t } from "@/locales";
import Layout from "@/layout/index.vue";

const homeRouter = {
  path: "/",
  name: "home",
  component: Layout,
  redirect: "/dashboard",
  meta: {
    icon: "icon-home",
    title: $t("route.dashboard"),
    showLink: true,
    i18n: true,
    rank: 0
  },
  children: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: $t("route.dashboard"),
        icon: 'icon-home',
        i18n: true,
        showLink: true
      }
    }
  ]
};

export default homeRouter;
