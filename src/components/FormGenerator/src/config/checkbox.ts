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

const checkboxConfig: IConfig = {
  label: '多选框组',
  type: 'checkbox',
  group: 'basic',
  sort: 6,
  number: 10,
  // 组件的配置
  options: {
    width: '',
    defaultValue: [],
    tag: 'el-checkbox-group',
    tagIcon: 'icon-checkbox',
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

export default checkboxConfig;
