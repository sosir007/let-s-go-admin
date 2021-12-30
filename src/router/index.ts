import { App, Component } from "vue";
import { toRouteType } from "./types";
import { openLink } from "@/utils/link";
import NProgress from "@/utils/progress";
import { constantRoutes } from "./modules";
import { split, findIndex } from "lodash-es";
import { storageSession } from "@/utils/storage";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import { usePermissionStoreHook } from "@/store/modules/permission";
import { Router, RouteMeta, createRouter, RouteRecordName, createWebHashHistory } from "vue-router";
import {
  initRouter,
  getHistoryMode,
  getParentPaths,
  findRouteByPath,
  handleAliveRoute
} from "./utils";

// todo 学习下面的路由
/*
  Note: sub-menu only appear when children.length>=1
  Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
*/

/*
  name:'router-name'             the name field is required when using <keep-alive>, it should also match its component's name property
                                 detail see : https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    roles: ['admin', 'editor']   将控制页面角色(允许设置多个角色)
    title: 'title'               在subMenu和breadcrumb中显示的名称(推荐集)
    icon: 'svg-name'             侧边栏中显示的图标
    hidden: true                 如果为true，此路由将不会显示在侧边栏中(默认为false)
    alwaysShow: true             如果为true，将始终显示根菜单(默认为false)
                                 如果为false，隐藏根菜单时，有小于或等于一个子路由
    breadcrumb: false            如果为false，该项将隐藏在面包屑中(默认为true)
    noCache: true                如果为true，则不会缓存该页面(默认为false)
    affix: true                  如果为true，标记将附着在标记视图中
    activeMenu: '/example/list'  如果设置路径，侧边栏将突出显示您设置的路径
  }
*/

// 静态路由
import homeRouter from "./modules/home";
import remainingRouter from "./modules/remaining";

// 创建路由实例
export const router: Router = createRouter({
  // history: getHistoryMode(),
  history: createWebHashHistory(),
  routes: constantRoutes.concat(...remainingRouter),
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  }
});

// 路由白名单
const whiteList = ["/login", "/register"];

router.beforeEach((to: toRouteType, _from, next) => {
  if (to.meta?.keepAlive) {
    const newMatched = to.matched;
    handleAliveRoute(newMatched, "add");
    // 页面整体刷新和点击标签页刷新
    if (_from.name === undefined || _from.name === "redirect") {
      handleAliveRoute(newMatched);
    }
  }
  const name = storageSession.getItem("info");
  NProgress.start();
  const externalLink = to?.redirectedFrom?.fullPath;
  // if (!externalLink)
  //   to.matched.some(item => {
  //     item.meta.title
  //       ? (document.title = transformI18n(
  //         item.meta.title as string,
  //         item.meta?.i18n as boolean
  //       ))
  //       : "";
  //   });
  if (name) {
    if (_from?.name) {
      // 如果路由包含http 则是超链接 反之是普通路由
      if (externalLink && externalLink.includes("http")) {
        openLink(`http${split(externalLink, "http")[1]}`);
        NProgress.done();
      } else {
        next();
      }
    } else {
      // 刷新
      if (usePermissionStoreHook().wholeMenus.length === 0)
        initRouter(name.username).then((router: Router) => {
          if (!useMultiTagsStoreHook().getMultiTagsCache) {
            const handTag = (
              path: string,
              parentPath: string,
              name: RouteRecordName,
              meta: RouteMeta
            ): void => {
              useMultiTagsStoreHook().handleTags("push", {
                path,
                parentPath,
                name,
                meta
              });
            };
            // 未开启标签页缓存，刷新页面重定向到顶级路由（参考标签页操作例子，只针对静态路由）
            if (to.meta?.dynamicLevel) {
              const routes = router.options.routes;
              const { refreshRedirect } = to.meta;
              const { name, meta } = findRouteByPath(refreshRedirect, routes);
              handTag(
                refreshRedirect,
                getParentPaths(refreshRedirect, routes)[1],
                name,
                meta
              );
              return router.push(refreshRedirect);
            } else {
              const { path } = to;
              const index = findIndex(remainingRouter, v => {
                return v.path == path;
              });
              const routes =
                index === -1
                  ? router.options.routes[0].children
                  : router.options.routes;
              const route = findRouteByPath(path, routes);
              const routePartent = getParentPaths(path, routes);
              // 未开启标签页缓存，刷新页面重定向到顶级路由（参考标签页操作例子，只针对动态路由）
              if (
                path !== routes[0].path &&
                route?.meta?.rank !== 0 &&
                routePartent.length === 0
              ) {
                const { name, meta } = findRouteByPath(
                  route?.meta?.refreshRedirect,
                  routes
                );
                handTag(
                  route.meta?.refreshRedirect,
                  getParentPaths(route.meta?.refreshRedirect, routes)[0],
                  name,
                  meta
                );
                return router.push(route.meta?.refreshRedirect);
              } else {
                handTag(
                  route.path,
                  routePartent[routePartent.length - 1],
                  route.name,
                  route.meta
                );
                return router.push(path);
              }
            }
          }
          router.push(to.fullPath);
        });
      next();
    }
  } else {
    if (to.path !== "/login") {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        next({ path: "/login" });
      }
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

