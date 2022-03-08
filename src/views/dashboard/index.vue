<script setup lang="ts">
import { ref, computed } from "vue";
import avatars from "@/assets/images/avatar.webp";

const date: Date = new Date();
let greetings = computed(() => {
  if (date.getHours() >= 0 && date.getHours() < 12) {
    return "上午阳光明媚，祝你薪水翻倍🌞 ！";
  } else if (date.getHours() >= 12 && date.getHours() < 18) {
    return "下午小风娇好，愿你青春不老😃 ！";
  } else {
    return "折一根天使羽毛，愿拂去您的疲惫烦恼忧伤🌛 ！";
  }
});

const openDepot = (): void => {
  window.open("https://gitee.com/sosir/let-s-go-admin");
};
</script>

<template>
  <div class="dashboard-container">
    <el-card class="top-content">
      <div class="left-mark">
        <img :src="avatars" title="直达仓库地址" @click="openDepot" />
        <span>{{ greetings }}</span>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
}
.dashboard-container {
  height: 100%;

  .top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: #fff;

    .left-mark {
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        cursor: pointer;
      }

      span {
        font-size: 14px;
      }
    }
  }
}
</style>
