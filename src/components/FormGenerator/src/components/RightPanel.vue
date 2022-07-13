<script setup lang="ts">
import { ref } from "vue";
import { IConfig } from "../config";

let currentTab = ref<string>("field");

const props = defineProps({
  widgetFormSelect: {
    type: Object as PropType<IConfig | { [key: string]: any }>,
    required: true
  }
});
</script>

<template>
  <div class="right-board">
    <el-tabs v-model="currentTab" class="center-tabs">
      <el-tab-pane label="组件属性" name="field" />
      <el-tab-pane label="表单属性" name="form" />
    </el-tabs>
    <div class="field-box">
      <!-- <a
        class="document-link"
        target="_blank"
        href="https://element.eleme.cn/#/zh-CN/component/installation"
        title="查看组件文档"
      >
        <i class="el-icon-link" />
      </a> -->
      <el-scrollbar class="right-scrollbar">
        <!-- 组件属性 -->
        <el-form
          v-show="currentTab === 'field'"
          size="small"
          label-width="90px"
        >
          {{ props.widgetFormSelect?.label }}</el-form
        >
        <!-- 表单属性 -->
        <el-form v-show="currentTab === 'form'" size="small" label-width="90px">
          表单属性</el-form
        >
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-board {
  width: 350px;
  position: absolute;
  right: 0;
  top: 0;
  padding-top: 3px;
  .field-box {
    position: relative;
    height: calc(100vh - 42px);
    box-sizing: border-box;
    overflow: hidden;
  }
  .el-scrollbar {
    height: 100%;
  }

  .center-tabs {
    :deep(.el-tabs__header) {
      margin-bottom: 0 !important;
    }
    :deep(.el-tabs__item) {
      width: 50%;
      text-align: center;
    }
    :deep(.el-tabs__nav) {
      width: 100%;
    }
  }

  .right-scrollbar {
    :deep(.el-scrollbar__view) {
      padding: 12px 18px 15px 15px;
    }
  }

  .document-link {
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    top: 0;
    left: 0;
    cursor: pointer;
    background: #409eff;
    z-index: 1;
    border-radius: 0 0 6px 0;
    text-align: center;
    line-height: 26px;
    color: #fff;
    font-size: 18px;
  }
}
</style>
