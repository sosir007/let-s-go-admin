<script setup lang="ts">
import { getCurrentInstance } from "vue";
// import Icon from "@/components/Icon/src/Icon.vue";
import Icon from "@/assets/images/PokemonBall.png";

const props = defineProps({
  collapse: Boolean
});

const title =
  getCurrentInstance().appContext.config.globalProperties.$config?.Title;
</script>

<template>
  <div class="sidebar-logo-container" :class="{ collapse: props.collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="props.collapse"
        key="props.collapse"
        :title="title"
        class="sidebar-logo-link"
        to="/"
      >
        <img :src="Icon" alt=""/>
        <!-- <span class="sidebar-title">{{ title }}</span> -->
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="title"
        class="sidebar-logo-link"
        to="/"
      >
        <img :src="Icon" alt=""/>
        <span class="sidebar-title">{{ title }}</span>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 48px;
  text-align: center;
  overflow: hidden;

  .sidebar-logo-link {
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 25px;
      height: 25px;
      vertical-align: text-bottom;
      // margin-right: 10px;
    }

    .sidebar-title {
      color: #1890ff;
      font-weight: 600;
      font-size: 20px;
      // margin-top: 10px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      margin-left: 10px;
    }
  }

  .collapse {
    .sidebar-logo {
      margin-right: 0;
    }
  }
}
</style>
