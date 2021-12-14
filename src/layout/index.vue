<script setup lang="ts">
// import { AppMain, Navbar, Sidebar, TagsView } from "./components";
import { Sidebar } from "./components";
</script>

<template>
  <el-container class="app-wrapper">
    <Sidebar />
    <!-- <el-aside class="aside">aside</el-aside>
    <el-container>
      <Header />
      <div class="main">
        <router-view />
      </div>
      <Footer />
    </el-container> -->
    <router-view />
  </el-container>
</template>

<style lang="scss" scoped>
.app-wrapper {
}
</style>
