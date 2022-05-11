<script setup lang="ts">
import { ref } from "vue";
import CustomHeader from "./CustomHeader.vue";

const previewVisible = ref<boolean>(false);
const uploadJsonVisible = ref<boolean>(false);

const props = defineProps({
  run: {
    type: Boolean,
    default: true
  },
  preview: {
    type: Boolean,
    default: true
  },
  generateCode: {
    type: Boolean,
    default: true
  },
  generateJson: {
    type: Boolean,
    default: true
  },
  uploadJson: {
    type: Boolean,
    default: true
  },
  clearable: {
    type: Boolean,
    default: true
  }
});

const handleRun = () => {
  console.log('run');
}

const handleGenerateJson = () => {
  console.log('handleGenerateJson');
}

const handleGenerateCode = () => {
  console.log('handleGenerateCode');
}

const handleClearable = () => {
  console.log('handleClearable');
}
</script>

<template>
  <div class="center-board">
    <CustomHeader
      v-bind="props"
      @run="handleRun"
      @preview="() => (previewVisible = true)"
      @uploadJson="() => (uploadJsonVisible = true)"
      @generateJson="handleGenerateJson"
      @generateCode="handleGenerateCode"
      @clearable="handleClearable"
    />
  </div>
</template>

<style lang="scss" scoped>
.center-board {
  height: calc(100vh - 86px);
  width: auto;
  margin: 0 350px 0 260px;
  box-sizing: border-box;
}
</style>
