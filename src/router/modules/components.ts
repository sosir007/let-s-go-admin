import Layout from "@/layout/index.vue";

const componentsRouter = {
  path: "/components",
  name: "components",
  component: Layout,
  redirect: "/components/video",
  meta: {
    icon: "icon-zujian",
    title: "route.components",
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
        title: "route.video",
        i18n: true,
        showLink: true
      }
    }, {
      path: "/components/map",
      name: "map",
      component: () => import("@/views/components/map/index.vue"),
      meta: {
        icon: "icon-map",
        title: "route.map",
        i18n: true,
        showLink: true
      }
    },
  ]
};

export default componentsRouter;
