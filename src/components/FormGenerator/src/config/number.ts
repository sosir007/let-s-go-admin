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

const numberConfig: IConfig = {
  label: '计数器',
  type: 'number',
  group: 'basic',
  sort: 4,
  number: 10,
  // 组件的配置
  options: {
    width: '100%',
    defaultValue: 0,
    placeholder: '请输入数字',
    maxlength: null,
    tag: 'el-input',
    tagIcon: 'icon-number',
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    readonly: false,
    // 正则校验规则
    rules
  },
}

export default numberConfig;
