import Layout from "@/layout/index.vue";

const errorRouter = {
  path: "/error",
  name: "error",
  component: Layout,
  redirect: "/error/401",
  meta: {
    icon: "icon-page-error",
    title: "错误页面",
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
        title: "401",
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
        title: "404",
        i18n: true,
        showLink: true
      }
    }
  ]
};

export default errorRouter;
