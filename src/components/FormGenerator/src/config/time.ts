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

const timeConfig: IConfig = {
  label: '时间选择器',
  type: 'time',
  group: 'basic',
  sort: 9,
  number: 10,
  // 组件的配置
  options: {
    width: '',
    defaultValue: '',
    placeholder: '请选择时间',
    tag: 'el-time-picker',
    tagIcon: 'icon-time',
    format: 'HH:mm:ss',
    valueFormat: 'HH:mm:ss',
    showLabel: true,
    disabled: false,
    clearable: false,
    readonly: false,
    // 正则校验规则
    rules
  }
}

export default timeConfig;
