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

const selectConfig: IConfig = {
  label: '下拉选择',
  type: 'select',
  group: 'basic',
  sort: 7,
  number: 10,
  // 组件的配置
  options: {
    width: '200px',
    defaultValue: '',
    placeholder: '请选择',
    maxlength: null,
    tag: 'el-select',
    tagIcon: 'icon-select',
    remoteOptions: [],
    remoteFunc: null,
    multiple: false,
    filterable: false,
    showLabel: true,
    disabled: false,
    clearable: false,
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

export default selectConfig;
