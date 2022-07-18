<script setup lang="ts">
import { ref } from "vue";
import LeftBoard from "./components/LeftBoard.vue";
import CenterBoard from "./components/CenterBoard.vue";
import RightPanel from "./components/RightPanel.vue";
import { formConfig, IConfig } from "./config";

const widgetFormSelect = ref<IConfig | { [key: string]: any }>({});
</script>

<template>
  <div class="container">
    <LeftBoard />
    <CenterBoard
      ref="widgetFormRef"
      v-model:widgetFormSelect="widgetFormSelect"
    />
    <RightPanel v-model:widgetFormSelect="widgetFormSelect" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
