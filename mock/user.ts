import { MockMethod } from "vite-plugin-mock";
import Mock from 'mockjs';
import { resultSuccess } from './_util';

const Random = Mock.Random;

// const token = Random.string('upper', 32, 32);

const userInfo = {
  userId: '1',
  account: "admin",
  role: "admin",
  accessToken: "eyJhbGciOiJIUzUxMiJ9.test",
  avatar: Random.image(),
  desc: 'manager',
  permissions: [
    {
      label: '主控台',
      value: 'dashboard_console',
    },
    {
      label: '监控页',
      value: 'dashboard_monitor',
    },
    {
      label: '工作台',
      value: 'dashboard_workplace',
    },
    {
      label: '基础列表',
      value: 'basic_list',
    },
    {
      label: '基础列表删除',
      value: 'basic_list_delete',
    },
  ],
};

export default [
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return resultSuccess(userInfo, { message: '登录成功！' });
    }
  }
] as MockMethod[];
