<script setup lang="ts">
import LeftBoard from "./components/LeftBoard.vue";
import CenterBoard from "./components/CenterBoard.vue";
</script>

<template>
  <div class="container">
    <LeftBoard />
    <CenterBoard />
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
  background: #fff;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
