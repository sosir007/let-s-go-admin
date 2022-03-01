<script setup lang="ts"></script>

<template>
  <div class="tagsView-container">
    <div class="arrow-left">
      <el-icon><ArrowLeft /></el-icon>
    </div>
    <div class="scroll-container">TagsView</div>
    <div class="arrow-right">
      <el-icon><ArrowRight /></el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tagsView-container {
  width: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: var(--el-text-color-regular);
  background: #fff;
  position: relative;
  box-shadow: 0 0 1px #888;

  .arrow-left,
  .arrow-right {
    width: 40px;
    height: 38px;
    color: #00000073;
    position: relative;

    .el-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }

  .arrow-left {
    box-shadow: 5px 0 5px -6px #ccc;

    &:hover {
      cursor: w-resize;
    }
  }

  .arrow-right {
    box-shadow: -5px 0 5px -6px #ccc;
    border-right: 1px solid #ccc;

    &:hover {
      cursor: e-resize;
    }
  }

  .scroll-container {
    flex: 1;
    overflow: hidden;
    padding: 5px 0;
    white-space: nowrap;
    position: relative;

    .tab {
      position: relative;
      float: left;
      list-style: none;
      overflow: visible;
      white-space: nowrap;
      transition: transform 0.5s ease-in-out;

      .scroll-item {
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:nth-child(1) {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
