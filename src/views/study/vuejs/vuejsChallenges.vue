<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getVuejsCatalogue } from "@/api/study";
import { VueCatalogueTree } from "@/types/study";

let catalogueList = ref<VueCatalogueTree[]>();

const defaultProps = {
  children: "children",
  label: "label"
};

const handleNodeClick = (data: VueCatalogueTree) => {
  console.log(data);
};

const getCatalogueList = async () => {
  const { result } = await getVuejsCatalogue();
  catalogueList.value = result;
  console.log("result", result);
};

onMounted(() => {
  getCatalogueList();
});
</script>

<template>
  <div class="vuejs-container">
    <div class="left-panel">
      <el-tree
        :data="catalogueList"
        :props="defaultProps"
        @node-click="handleNodeClick"
      />
    </div>
    <div class="right-panel">right-panel</div>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 10px !important;
}
.vuejs-container {
  height: calc(100vh - 106px);
  display: flex;

  .left-panel {
    border-radius: 4px;
    border-start-end-radius: 0;
    margin-right: 12px;
    min-width: 240px;
    // position: relative;
    width: 240px;
    height: 100%;
    background: #fff;
    padding-top: 20px;
  }

  .right-panel {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}

// :deep(.el-tree-node),
:deep(.el-tree-node__content) {
  height: 40px;
  padding-left: 20px !important;
}
</style>
