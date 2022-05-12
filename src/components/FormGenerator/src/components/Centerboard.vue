<script setup lang="ts">
import { ref } from "vue";
import CustomHeader from "./CustomHeader.vue";
import WidgetForm from "./WidgetForm.vue";
import { IConfig } from "../config";

const previewVisible = ref<boolean>(false);
const uploadJsonVisible = ref<boolean>(false);
const widgetFormList = ref<IConfig[]>([]);

const props = defineProps({
  run: {
    type: Boolean,
    default: true
  },
  preview: {
    type: Boolean,
    default: true
  },
  clearable: {
    type: Boolean,
    default: true
  },
  uploadJson: {
    type: Boolean,
    default: true
  },
  generateJson: {
    type: Boolean,
    default: true
  },
  generateCode: {
    type: Boolean,
    default: true
  }
});

const handleRun = () => {
  console.log("run");
};

const handleClearable = () => {
  console.log("handleClearable");
};

const handleGenerateJson = () => {
  console.log("handleGenerateJson");
};

const handleGenerateCode = () => {
  console.log("handleGenerateCode");
};
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
    <el-scrollbar class="center-scrollbar">
      <WidgetForm v-model:widgetFormList="widgetFormList" />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.center-board {
  height: calc(100vh - 86px);
  width: auto;
  min-width: 460px;
  margin: 0 350px 0 260px;
  box-sizing: border-box;

  .center-scrollbar {
    height: calc(100vh - 128px);
    overflow: hidden;
    border-left: 1px solid #f1e8e8;
    border-right: 1px solid #f1e8e8;
    box-sizing: border-box;
  }
}
</style>
