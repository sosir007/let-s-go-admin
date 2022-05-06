import { $t } from "@/locales";
const Layout = () => import("@/layout/index.vue");

const formGeneratorRouter = {
  path: "/formGenerator",
  component: Layout,
  redirect: "/formGenerator/index",
  meta: {
    icon: "icon-form-generator",
    title: $t("route.formGenerator"),
    i18n: true,
    rank: 2
  },
  children: [
    {
      path: "/formGenerator/index",
      name: "formGenerator",
      component: () => import("@/views/formGenerator/index.vue"),
      meta: {
        title: $t("route.formGenerator"),
        i18n: true
      }
    }
  ]
};

export default formGeneratorRouter;
