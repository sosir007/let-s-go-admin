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

const switchConfig: IConfig = {
  label: '开关',
  type: 'switch',
  group: 'basic',
  sort: 11,
  number: 10,
  // 组件的配置
  options: {
    width: '100%',
    defaultValue: false,
    tag: 'el-switch',
    tagIcon: 'icon-switch',
    activeText: '',
    inactiveText: '',
    showLabel: true,
    disabled: false,
    // 正则校验规则
    rules
  }
}

export default switchConfig;
