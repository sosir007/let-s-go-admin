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

const radioConfig: IConfig = {
  label: '单选框组',
  type: 'radio',
  group: 'basic',
  sort: 5,
  number: 10,
  // 组件的配置
  options: {
    width: '',
    defaultValue: '',
    tag: 'el-radio-group',
    tagIcon: 'icon-radio',
    optionType: 'default',
    size: 'medium',
    showLabel: true,
    disabled: false,
    // 正则校验规则
    rules
  },
  // 组件的插槽属性
  slot: {
    options: [
      {
        value: 1,
        label: '选项一'
      },
      {
        value: 2,
        label: '选项二'
      },
      {
        value: 3,
        label: '选项三'
      }
    ],
  }
}

export default radioConfig;
