// 以校验的属性命名
const mobile = (value: string) => {
  if (!value) return '请输入手机号';
  if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式错误';

  return true;
};

const account = (value: any) => {
  // return true 通过；return '说明'不通过
  if (!value) return '用户名不能为空'
  return true
};

const password = (value: string) => {
  if (!value) return '请输入密码'
  if (!/\d{6}$/.test(value)) return '密码格式错误'
  return true
};

const rePassword = (value: string, { form }: any) => {
  if (!value) return '请输入密码'
  if (!/^\w{6,24}$/.test(value)) return '密码是6-24个字符'
  // 校验密码是否一致  form表单数据对象
  if (value !== form.password) return '两次输入的密码不一致'
  return true
};

const code = (value: string) => {
  if (!value) return '请输入手机验证码'
  if (!/\d{6}$/.test(value)) return '验证码格式错误'
  return true
};

const isAgree = (value: Boolean) => {
  return value || '不答应可不行'
}

const isCaptcha = (value: Boolean) => {
  return value || '请点击按钮进行验证码校验'
}

export default {
  mobile,
  account,
  password,
  rePassword,
  code,
  isAgree,
  isCaptcha,
}
