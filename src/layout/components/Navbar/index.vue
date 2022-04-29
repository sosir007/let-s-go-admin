<script setup lang="ts">
import avatars from "@/assets/images/avatar.webp";
import Hamburger from "@/components/Hamburger/index.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import ScreenFull from "@/components/ScreenFull/index.vue";

import { useI18n } from "vue-i18n";
import { useNav } from "../../hooks/nav";
import { useRoute } from "vue-router";
import { useAppStoreHook } from "@/store/modules/app";
import { deviceDetection } from "@/utils/deviceDetection";
import { watch, getCurrentInstance } from "vue";
import globalization from "@/assets/svg/globalization.svg";

const route = useRoute();
const { locale, t } = useI18n();
const instance =
  getCurrentInstance().appContext.config.globalProperties.$storage;

const {
  logout,
  onPanel,
  changeTitle,
  toggleSideBar,
  goApp,
  account,
  getDropdownItemStyle
} = useNav();

watch(
  () => locale.value,
  () => {
    changeTitle(route.meta);
  }
);

function translationCh() {
  instance.locale = { locale: "zh" };
  locale.value = "zh";
}

function translationEn() {
  instance.locale = { locale: "en" };
  locale.value = "en";
}
</script>

<template>
  <div class="navbar-container">
    <Hamburger
      :is-active="goApp.sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <Breadcrumb class="breadcrumb-container" />

    <div class="navbar-container-right">
      <!-- 全屏 -->
      <ScreenFull v-show="!deviceDetection()" />

      <!-- 国际化 -->
      <el-dropdown id="header-translation" trigger="click">
        <globalization />
        <template #dropdown>
          <el-dropdown-menu class="translation">
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'zh')"
              @click="translationCh"
            >
              <!-- <el-icon class="check-zh" v-show="locale === 'zh'"
                ><check />
              </el-icon> -->
              <IconifyIconOffline
                class="check-zh"
                v-show="locale === 'zh'"
                icon="check"
              />简体中文
            </el-dropdown-item>
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'en')"
              @click="translationEn"
            >
              <!-- <el-icon class="check-en" v-show="locale === 'en'"
                ><check />
              </el-icon> -->
              <IconifyIconOffline
                class="check-en"
                v-show="locale === 'en'"
                icon="check"
              />English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- 退出登陆 -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="avatars" />
          <p>{{ account }}</p>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="logout">
            <el-dropdown-item @click="logout">
              <i class="iconfont icon-logout"></i>{{ t("message.logout") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- 系统设置 -->
      <div class="el-icon-setting" @click="onPanel">
        <i class="iconfont icon-setting"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  height: 48px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 48px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  &-right {
    display: flex;
    min-width: 280px;
    height: 48px;
    align-items: center;
    color: #000000d9;
    justify-content: flex-end;

    :deep(.dropdown-badge) {
      &:hover {
        background: #f6f6f6;
      }
    }

    .screen-full {
      cursor: pointer;

      &:hover {
        background: #f6f6f6;
      }
    }

    .globalization {
      height: 100%;
      width: 40px;
      padding: 11px;
      cursor: pointer;

      &:hover {
        background: #f6f6f6;
      }
    }

    .el-dropdown-link {
      width: 100px;
      height: 48px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      color: #000000d9;

      &:hover {
        background: #f6f6f6;
      }

      p {
        font-size: 14px;
      }

      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
    }

    .el-icon-setting {
      height: 48px;
      width: 38px;
      padding: 12px;
      display: flex;
      cursor: pointer;
      align-items: center;

      &:hover {
        background: #f6f6f6;
      }
    }
  }
}

.translation {
  ::v-deep(.el-dropdown-menu__item) {
    padding: 5px 40px;
  }

  .el-dropdown-menu__item:focus,
  .el-dropdown-menu__item:not(.is-disabled):hover {
    color: #606266;
    background: #f0f0f0;
  }

  .check-zh {
    position: absolute;
    left: 20px;
  }

  .check-en {
    position: absolute;
    left: 20px;
  }
}

.logout {
  max-width: 120px;

  ::v-deep(.el-dropdown-menu__item) {
    min-width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
  }
}
</style>
