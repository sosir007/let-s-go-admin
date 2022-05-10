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

const dateConfig: IConfig = {
  label: '日期选择器',
  type: 'date',
  group: 'basic',
  sort: 10,
  number: 10,
  // 组件的配置
  options: {
    width: '',
    defaultValue: '',
    placeholder: '请选择日期',
    tag: 'el-date-picker',
    tagIcon: 'icon-date',
    format: 'YYYY-MM-DD',
    showLabel: true,
    disabled: false,
    clearable: false,
    readonly: false,
    // 正则校验规则
    rules
  }
}

export default dateConfig;
