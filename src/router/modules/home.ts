import Layout from "@/layout/index.vue";

const homeRouter = {
  path: "/",
  name: "home",
  component: Layout,
  redirect: "/dashboard",
  meta: {
    icon: "icon-zhuye",
    title: "route.dashboard",
    showLink: true,
    i18n: true,
    rank: 0
  },
  children: [
    {
      path: "dashboard",
      name: "dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: "route.dashboard",
        icon: 'icon-zhuye',
        i18n: true,
        showLink: true
      }
    }
  ]
};

export default homeRouter;
