import Layout from "@/layout/index.vue";

const homeRouter = {
  path: "/",
  name: "home",
  component: Layout,
  redirect: "/dashboard",
  meta: {
    icon: "el-icon-s-home",
    title: "message.hshome",
    showLink: true,
    rank: 0
  },
  children: [
    {
      path: "dashboard",
      name: "dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: "dashboard",
        icon: 'dashboard',
        showLink: true
      }
    }
  ]
};

export default homeRouter;
