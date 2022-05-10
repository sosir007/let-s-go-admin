import { IConfig, IRules } from ".";

const rules: IRules = {
  trigger: 'blur',
  enum: '',
  len: undefined,
  max: undefined,
  message: '',
  min: undefined,
  pattern: '',
  required: false,
  type: 'any'
}

const passwordConfig: IConfig = {
  label: '密码框',
  type: 'password',
  group: 'basic',
  sort: 3,
  number: 10,
  // 组件的配置
  options: {
    width: '100%',
    defaultValue: '',
    placeholder: '请输入密码',
    maxlength: null,
    rows: 4,
    autosize: false,
    tag: 'el-input',
    tagIcon: 'icon-password',
    showPassword: true,
    disabled: false,
    clearable: false,
    readonly: false,
    // 正则校验规则
    rules
  },
}

export default passwordConfig;
