<script setup lang="ts">
import SidebarLogo from "./SidebarLogo.vue";

import { useAppStoreHook } from "@/store/modules/app";
import { computed, ref, onBeforeMount } from "vue";

const goApp = useAppStoreHook();

const isCollapse = computed(() => {
  return !goApp.getSidebarStatus;
});
</script>

<template>
  <div class="Sidebar-container">
    <SidebarLogo :collapse="isCollapse" />
  </div>
</template>

<style lang="scss" scoped>
.Sidebar-container {
}
</style>
