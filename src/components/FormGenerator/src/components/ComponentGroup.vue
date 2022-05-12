<script setup lang="ts">
import type { PropType } from "vue";
import Draggable from "vuedraggable/src/vuedraggable";
import { IConfig } from "../config";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  fields: {
    type: Array as PropType<Array<string>>,
    required: true
  },
  list: {
    type: Array as PropType<Array<IConfig>>,
    required: true
  }
});
</script>

<template>
  <div class="components-title">
    {{ props.title }}
  </div>
  <Draggable
    class="components-draggable"
    tag="ul"
    item-key="type"
    ghostClass="ghost"
    :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
    draggable=".components-item"
    :sort="false"
    :list="props.list"
  >
    <template #item="{ element }">
      <li class="components-item" v-if="fields.includes(element.type)">
        <div class="components-body">
          <FontIcon fontClass="tag-icon" :icon="element?.options?.tagIcon" />
          {{ element.label }}
        </div>
      </li>
    </template>
  </Draggable>
</template>

<style lang="scss" scoped>
$selectedColor: #f6f7ff;
.components-draggable {
  padding-bottom: 20px;
}
.components-title {
  font-size: 14px;
  color: #222;
  margin: 6px 2px;
  .svg-icon {
    color: #666;
    font-size: 18px;
  }
}

.components-item {
  display: inline-block;
  width: 48%;
  margin: 1%;
  transition: transform 0ms !important;
}

.components-body {
  padding: 8px 10px;
  background: $selectedColor;
  font-size: 12px;
  cursor: move;
  border: 1px dashed $selectedColor;
  border-radius: 3px;
  display: flex;
  align-items: center;

  .tag-icon {
    color: #555;
    font-size: 16px;
    margin-right: 6px;
  }
  
  &:hover {
    border: 1px dashed #787be8;
    color: #787be8;
    .tag-icon {
      color: #787be8;
    }
  }
}
</style>
