<script setup lang="ts">
import { ref } from "vue";
import { loadEnv } from "@build/index";
const { VITE_PUBLIC_PATH } = loadEnv();

console.log('VITE_PUBLIC_PATH', VITE_PUBLIC_PATH);
const url = ref(`${VITE_PUBLIC_PATH}html/countdown.html`);
</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span class="font-medium">通过 iframe 引入倒计时页面</span>
      </div>
    </template>
    <iframe :src="url" frameborder="0" class="iframe"></iframe>
  </el-card>
</template>

<style scoped>
.iframe {
  width: 100%;
  height: 60vh;
}
</style>
