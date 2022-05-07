<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import logo from "@/assets/images/PokemonBall.png";
import ComponentGroup from "./ComponentGroup.vue";

interface LeftComponents {
  title: string;
  list?: string[];
}

const props = defineProps({
  basicComponents: {
    type: Array as PropType<Array<string>>,
    default: () => [
      "input",
      "password",
      "textarea",
      "number",
      "radio",
      "checkbox",
      "time",
      "date",
      "rate",
      "select",
      "switch",
      "slider",
      "text"
    ]
  },
  advanceComponents: {
    type: Array as PropType<Array<string>>,
    default: () => ["img-upload", "richtext-editor", "cascader"]
  },
  customComponents: {
    type: Array as PropType<Array<string>>,
    default: () => ["grid"]
  }
});

const leftComponents = ref<LeftComponents[]>([
  {
    title: "基础控件",
    list: props.basicComponents
  },
  {
    title: "高级控件",
    list: props.advanceComponents
  },
  {
    title: "自定义控件",
    list: props.customComponents
  }
]);
</script>

<template>
  <div class="left-board">
    <div class="logo-wrapper">
      <img :src="logo" alt="logo" /> Form Generator
    </div>
    <el-scrollbar class="left-scrollbar">
      <div class="components-list">
        <div v-for="(item, listIndex) in leftComponents" :key="listIndex">
          <ComponentGroup
            v-if="item.list?.length"
            :title="item.title"
            :fields="item.list"
          />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.left-board {
  width: 260px;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  background: #fff;

  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    border-bottom: 1px solid #f1e8e8;
    box-sizing: border-box;
    color: #00afff;
    font-weight: 600;
    font-size: 17px;
    white-space: nowrap;

    > img {
      width: 25px;
      height: 25px;
      vertical-align: top;
      margin-right: 10px;
    }
  }

  .left-scrollbar {
    height: calc(100vh - 42px);
    overflow: hidden;

    .components-list {
      padding: 8px;
      box-sizing: border-box;
      height: 100%;
    }
  }
}
</style>
