<script setup lang="ts">
import panel from "../panel/index.vue";

import {
  reactive,
  ref,
  unref,
  watch,
  computed,
  nextTick,
  useCssModule,
  getCurrentInstance
} from "vue";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";

const instance =
  getCurrentInstance().appContext.app.config.globalProperties.$storage;

const settings = reactive({
  greyVal: instance.configure.grey,
  weakVal: instance.configure.weak,
  tabsVal: instance.configure.hideTabs,
  showLogo: instance.configure.showLogo,
  showModel: instance.configure.showModel,
  multiTagsCache: instance.configure.multiTagsCache
});

function storageConfigureChange<T>(key: string, val: T): void {
  const storageConfigure = instance.configure;
  storageConfigure[key] = val;
  instance.configure = storageConfigure;
}

const multiTagsCacheChange = () => {
  let multiTagsCache = settings.multiTagsCache;
  storageConfigureChange("multiTagsCache", multiTagsCache);
  useMultiTagsStoreHook().multiTagsCacheChange(multiTagsCache);
};
</script>

<template>
  <div class="setting-container">
    <panel>
      <div class="setting-container-card">
        <span>标签页持久化</span>
        <el-switch
          v-model="settings.multiTagsCache"
          inline-prompt
          inactive-color="#a6a6a6"
          active-text="开"
          inactive-text="关"
          @change="multiTagsCacheChange"
        >
        </el-switch>
      </div>
    </panel>
  </div>
</template>

<style lang="scss" scoped>
.setting-container {
  &-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px;
  }
}
</style>
