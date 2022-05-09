<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { isFullscreen, toggle } = useFullscreen();
</script>

<template>
  <div class="screen-full" @click="toggle">
    <FontIcon
      :title="
        isFullscreen ? t('message.exitFullScreen') : t('message.fullScreen')
      "
      :icon="isFullscreen ? 'iconfont icon-cancel-full-screen' : 'iconfont icon-full-screen'"
    />
  </div>
</template>

<style lang="scss" scoped>
.screen-full {
  width: 36px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
