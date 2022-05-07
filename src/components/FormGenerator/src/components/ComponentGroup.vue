<script setup lang="ts">
import type { PropType } from "vue";
import Draggable from "vuedraggable/src/vuedraggable";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  fields: {
    type: Array as PropType<Array<string>>
    // required: true
  },
  list: {
    // required: true
  }
});
</script>

<template>
  <div class="components-title">
    <!-- <svg-icon icon-class="component" /> -->
    {{ props.title }}
  </div>
  <Draggable
    class="components-draggable"
    tag="ul"
    item-key="type"
    ghostClass="ghost"
    :group="{ name: 'people', pull: 'clone', put: false }"
    draggable=".components-item"
    :sort="false"
    :list="props.fields"
  >
    <template #item="{ element }">
      <li class="components-item">
        <div class="components-body">
          <!-- <svg-icon :icon-class="element.__config__.tagIcon" /> -->
          {{ element }}
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
  .svg-icon {
    color: #777;
    font-size: 15px;
  }
  &:hover {
    border: 1px dashed #787be8;
    color: #787be8;
    .svg-icon {
      color: #787be8;
    }
  }
}
</style>
