<script setup lang="ts">
import { formConfig, IConfig } from "../config";
import Draggable from "vuedraggable/src/vuedraggable";

const props = defineProps({
  widgetFormList: {
    type: Object as PropType<IConfig>,
    required: true
  }
});
</script>

<template>
  <!-- <div v-show="!props.widgetFormList.length" class="empty-info">
    从左侧拖入或点选组件进行表单设计
  </div> -->
  <el-row class="center-board-row" :gutter="formConfig.gutter">
    <el-form
      :size="formConfig.size"
      :label-position="formConfig.labelPosition"
      :disabled="formConfig.disabled"
      :label-width="formConfig.labelWidth + 'px'"
    >
      <Draggable
        class="widget-form-list"
        item-key="type"
        :list="widgetFormList"
        :animation="340"
        :group="{ name: 'componentsGroup' }"
      >
        <template #item="{ element, index }">
          {{ element.label }} {{ index }}
        </template>
      </Draggable>
    </el-form>
  </el-row>
</template>

<style lang="scss" scoped>
.empty-info {
  position: absolute;
  top: 46%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 18px;
  color: #ccb1ea;
  letter-spacing: 4px;
}

.center-board-row {
  padding: 12px 12px 15px 12px;
  // box-sizing: border-box;
  & > .el-form {
    // 69 = 12+15+42+86
    width: 100%;
    height: calc(100vh - 155px);
  }

  .widget-form-list {
    height: 100%;
    width: 100%;
    position: relative;
  }
}
</style>
