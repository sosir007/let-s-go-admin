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

const rateConfig: IConfig = {
  label: '评分',
  type: 'rate',
  group: 'basic',
  sort: 13,
  number: 10,
  // 组件的配置
  options: {
    width: '100%',
    defaultValue: 0,
    placeholder: '请输入文字内容',
    tag: 'el-rate',
    tagIcon: 'icon-rate',
    max: 5,
    allowHalf: false,
    showLabel: true,
    disabled: false,
    // 正则校验规则
    rules
  }
}

export default rateConfig;
