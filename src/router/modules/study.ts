import { $t } from "@/locales";
const Layout = () => import("@/layout/index.vue");

const studyRouter = {
  path: "/study",
  component: Layout,
  redirect: "/study/vuejsChallenges",
  meta: {
    icon: "icon-study",
    title: $t("route.study"),
    i18n: true,
    rank: 5
  },
  children: [
    {
      path: "/study/vuejsChallenges",
      name: "vuejsChallenges",
      component: () => import("@/views/study/vuejs/vuejsChallenges.vue"),
      meta: {
        icon: "icon-vue",
        title: $t("route.vuejsChallenges"),
        i18n: true,
        showLink: true
      }
    },
    {
      path: "/study/typeChallenges",
      name: "typeChallenges",
      component: () => import("@/views/study/typeScript/typeChallenges.vue"),
      meta: {
        icon: "icon-typescript",
        title: $t("route.typeChallenges"),
        i18n: true,
        showLink: true
      }
    }
  ]
};

export default studyRouter;
