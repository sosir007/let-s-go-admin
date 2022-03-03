<script setup lang="ts">
import SidebarLogo from "./SidebarLogo.vue";
import SidebarItem from "./sidebarItem.vue";

import { computed, ref, watch, onBeforeMount } from "vue";
import { emitter } from "@/utils/mitt";
import { useNav } from "../../hooks/nav";
import { storageLocal } from "@/utils/storage";
import { useRoute, useRouter } from "vue-router";
import { useAppStoreHook } from "@/store/modules/app";
import { findRouteByPath, getParentPaths } from "@/router/utils";
import { usePermissionStoreHook } from "@/store/modules/permission";

const route = useRoute();
const routers = useRouter().options.routes;
const showLogo = ref(storageLocal.getItem("logoVal") || "1");

const { goApp, isCollapse, menuSelect } = useNav();

let subMenuData = ref([]);

const activeMenu = computed((): string => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    // @ts-ignore
    return meta.activeMenu;
  }
  return path;
});

onBeforeMount(() => {
  emitter.on("logoChange", key => {
    showLogo.value = key;
  });
});

function getSubMenuData(path) {
  // path的上级路由组成的数组
  const parentPathArr = getParentPaths(
    path,
    usePermissionStoreHook().wholeMenus
  );
  // 当前路由的父级路由信息
  const parenetRoute = findRouteByPath(
    parentPathArr[0] || path,
    usePermissionStoreHook().wholeMenus
  );
  if (!parenetRoute?.children) return;
  subMenuData.value = parenetRoute?.children;
}

getSubMenuData(route.path);

watch(
  () => route.path,
  () => {
    getSubMenuData(route.path);
    menuSelect(route.path, routers);
  }
);
</script>

<template>
  <div class="sidebar-container">
    <SidebarLogo v-if="showLogo === '1'" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        unique-opened
        router
        :collapse-transition="false"
        mode="vertical"
        class="outer-most"
        @select="indexPath => menuSelect(indexPath, routers)"
      >
        <sidebar-item
          v-for="route in usePermissionStoreHook().wholeMenus"
          :key="route.path"
          :item="route"
          class="outer-most"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
