<script setup lang="ts">
import LeftBoard from "./components/LeftBoard.vue";
import Centerboard from "./components/Centerboard.vue";
</script>

<template>
  <div class="container">
    <LeftBoard />
    <Centerboard />
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
