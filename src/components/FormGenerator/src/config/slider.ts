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

const sliderConfig: IConfig = {
  label: '滑块',
  type: 'slider',
  group: 'basic',
  sort: 12,
  number: 10,
  // 组件的配置
  options: {
    width: '',
    defaultValue: 0,
    tag: 'el-slider',
    tagIcon: 'icon-slider',
    min: 0,
    max: 100,
    step: 1,
    range: false,
    disabled: false,
    // 正则校验规则
    rules
  }
}

export default sliderConfig;
