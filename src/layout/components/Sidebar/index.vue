<script setup lang="ts">
import SidebarLogo from "./SidebarLogo.vue";
import SidebarItem from './sidebarItem.vue';

import { useRoute, useRouter } from "vue-router";
import { computed, ref, onBeforeMount } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import { usePermissionStoreHook } from "@/store/modules/permission";

const route = useRoute();
const goApp = useAppStoreHook();
const router = useRouter().options.routes;
const routeStore = usePermissionStoreHook();
console.log(routeStore.wholeRoutes);

const isCollapse = computed(() => {
  return !goApp.getSidebarStatus;
});
const activeMenu = computed((): string => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    // @ts-ignore
    return meta.activeMenu;
  }
  return path;
});
</script>

<template>
  <div class="sidebar-container">
    <SidebarLogo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <div v-for="route in routeStore.wholeRoutes" :key="route.path">{{route.path}}</div>
        <sidebar-item
          v-for="route in routeStore.wholeRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
