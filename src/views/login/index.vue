<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { initRouter } from "@/router/utils";
import { addClass, removeClass } from "@/utils/operate";
import { storageSession } from "@/utils/storage";
import { Form, Field } from "vee-validate";
import validate from "@/utils/validate";
import { successMessage, errorMessage } from "@/utils/message";

const router = useRouter();

const formRef = ref();
const isShowPassword = ref(false);

// 表单对象数据
const form = reactive({
  account: "admin",
  password: "123456",
  isCaptcha: false
});
// 校验规则对象
const schema = {
  account: validate.account,
  password: validate.password
};

const onUserFocus = () => {
  addClass(document.querySelector(".user"), "focus");
};

const onUserBlur = () => {
  if (form.account.length === 0)
    removeClass(document.querySelector(".user"), "focus");
};
const onPwdFocus = () => {
  addClass(document.querySelector(".pwd"), "focus");
};

const onPwdBlur = () => {
  if (form.password.length === 0)
    removeClass(document.querySelector(".pwd"), "focus");
};

const togglePwd = () => {
  isShowPassword.value = !isShowPassword.value;
};

const onLogin = (): void => {
  formRef.value.validate().then((res: any) => {
    console.log("表单校验结果", res);
    if (res.valid) {
      // storageSession.setItem("info", {
      //   account: "admin",
      //   accessToken: "eyJhbGciOiJIUzUxMiJ9.test"
      // });
      // initRouter("admin").then(() => {});
      router.push("/");
    } else {
      const errorsKey = Object.keys(res.errors);
      
      errorMessage(res.errors[errorsKey[0]]);
    }
  });
};
</script>

<template>
  <div class="login-container">
    <!-- <div class="login-container-header">login</div> -->
    <div class="login-container-main">
      <div class="login-container-top">
        <!-- logo -->
        <div class="login-container-top-logo">
          <img
            src="@/assets/images/logo.jpg"
            alt=""
            v-motion
            :initial="{
              opacity: 0,
              y: 100
            }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 100
              }
            }"
          />
        </div>
        <!-- 文字描述 -->
        <div
          class="login-container-top-desc"
          v-motion
          :initial="{
            opacity: 0,
            y: 100
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 200
            }
          }"
        >
          Let's go admin 中台前端/设计解决方案
        </div>
      </div>

      <!-- <div class="login-container-form"> -->
      <Form
        ref="formRef"
        class="login-container-form"
        :validation-schema="schema"
      >
        <!-- 用户名 -->
        <div
          class="input-group user focus"
          v-motion
          :initial="{
            opacity: 0,
            y: 100
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 300
            }
          }"
        >
          <div class="icon">
            <i class="iconfont">&#xe64d;</i>
          </div>
          <div>
            <h5>用户名</h5>
            <Field
              type="text"
              name="account"
              class="input"
              v-model="form.account"
              @focus="onUserFocus"
              @blur="onUserBlur"
            />
          </div>
        </div>
        <!-- 密码 -->
        <div
          class="input-group pwd focus"
          v-motion
          :initial="{
            opacity: 0,
            y: 100
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 400
            }
          }"
        >
          <div class="icon">
            <i class="iconfont">&#xe62e;</i>
          </div>
          <div>
            <h5>密码</h5>
            <Field
              :type="isShowPassword ? 'text' : 'password'"
              name="password"
              class="input"
              v-model="form.password"
              @focus="onPwdFocus"
              @blur="onPwdBlur"
            />
          </div>
          <div class="icon show-pwd">
            <i v-if="isShowPassword" class="iconfont" @click="togglePwd"
              >&#xe625;</i
            >
            <i v-else class="iconfont" @click="togglePwd">&#xe624;</i>
          </div>
        </div>
        <!-- 登录按钮 -->
        <button
          class="btn"
          v-motion
          :initial="{
            opacity: 0,
            y: 10
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 500
            }
          }"
          @click="onLogin"
        >
          登录
        </button>
      </Form>
    </div>
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

  &-top {
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-logo {
      width: 200px;
      height: auto;
    }

    &-desc {
      font-size: 14px;
      color: #808695;
    }
  }

  .login-container-form {
    width: 360px;

    .input-group {
      position: relative;
      display: grid;
      grid-template-columns: 7% 86% 7%;
      margin: 25px 0;
      padding: 5px 0;
      border-bottom: 2px solid #d9d9d9;

      &:nth-child(1) {
        margin-bottom: 4px;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        width: 0;
        height: 2px;
        background-color: #c5d3f7;
        transition: 0.5s;
      }

      &::after {
        right: 50%;
      }

      &::before {
        left: 50%;
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          color: #d9d9d9;
          transition: 0.5s;
        }
      }

      .show-pwd {
        opacity: 0;
      }

      & > div {
        position: relative;
        height: 45px;

        & > h5 {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #d9d9d9;
          font-size: 18px;
          transition: 0.3s;
          margin: 0;
          padding: 0;
        }
      }

      &.focus {
        .icon {
          i {
            color: #5392f0;
          }
        }

        .show-pwd {
          opacity: 1;
          cursor: pointer;
        }

        div {
          h5 {
            top: -5px;
            font-size: 15px;
          }
        }

        &::after,
        &::before {
          width: 50%;
        }
      }

      .input {
        position: absolute;
        width: 80%;
        height: 100%;
        top: 0;
        left: 0;
        border: none;
        outline: none;
        background: none;
        padding: 0.5rem 0.7rem;
        font-size: 1.2rem;
        color: #555;
        font-family: "Roboto", sans-serif;
      }
    }

    .btn {
      display: block;
      width: 100%;
      height: 50px;
      border-radius: 25px;
      margin: 1rem 0;
      font-size: 1.2rem;
      outline: none;
      border: none;
      background-image: linear-gradient(to right, #567dbe, #5392f0, #567dbe);
      cursor: pointer;
      color: #fff;
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
      background-size: 200%;
      transition: 0.5s;

      &:hover {
        background-position: right;
      }
    }
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
