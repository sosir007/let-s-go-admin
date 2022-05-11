<script setup lang="ts">
const emit = defineEmits([
  "run",
  "preview",
  "clearable",
  "uploadJson",
  "generateJson",
  "generateCode"
]);

interface IButtonList {
  name: string;
  label: string;
  icon: string;
}

const buttonList: IButtonList[] = [
  {
    name: "run",
    label: "运行",
    icon: "icon-run"
  },
  {
    name: "preview",
    label: "预览",
    icon: "icon-preview"
  },
  {
    name: "uploadJson",
    label: "上传json",
    icon: "icon-upload"
  },
  {
    name: "clearable",
    label: "清空",
    icon: "icon-empty"
  },
  {
    name: "generateJson",
    label: "生成json",
    icon: "icon-json"
  },
  {
    name: "generateCode",
    label: "生成代码",
    icon: "icon-code"
  }
];
</script>

<template>
  <div class="action-bar">
    <slot></slot>
    <el-button
      v-for="item in buttonList"
      :key="item.name"
      type="text"
      @click="emit(item.name)"
    >
      <FontIcon fontClass="button-icon" :icon="item.icon" />
      {{ item.label }}
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.action-bar {
  height: 42px !important;
  line-height: 42px;
  font-size: 18px;
  border: 1px solid #f1e8e8;
  text-align: right;
  background-color: white;
  padding: 0 10px;

  .button-icon {
    font-size: 16px;
    margin-right: 3px;
  }
}
</style>
