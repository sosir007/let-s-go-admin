<template>
  <div>
    <!-- 使用 Windi CSS-->
    <h3>使用 Windi CSS</h3>
    <div class="flex items-center justify-around bg-teal-100 rounded-md p-4px w-192px">
      <div class="bg-red-400 box-view2"></div>
      <div class="bg-green-400 box-view2"></div>
      <div class="bg-blue-400 box-view2"></div>
    </div>
    <br>
  </div>
</template>

<style lang="scss" scoped>
// ...

.box-view2 {
  @apply w-[25%] h-12 rounded-md m-4px;
}
</style>
