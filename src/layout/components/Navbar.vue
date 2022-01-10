<script setup lang="ts">
import Hamburger from "@/components/Hamburger/index.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";

import { useAppStoreHook } from "@/store/modules/app";

const goApp = useAppStoreHook();

function toggleSideBar() {
  goApp.toggleSideBar();
}
</script>

<template>
  <div class="navbar-container">
    <Hamburger
      :is-active="goApp.sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <Breadcrumb class="breadcrumb-container" />
  </div>
</template>

<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  height: 48px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 48px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }
}
</style>
