<script setup lang="ts"></script>

<template>
  <div class="login-container">
    <!-- <div class="login-container-header">login</div> -->
    <div class="login-container-main">login</div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;

  &-main {
    flex: 1;
    padding: 32px 0;
    width: 384px;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  .login-container {
    background-image: url("../../assets/images/login.svg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
  }
  .login-container-main {
    padding: 32px 0 24px 0;
  }
}
</style>
