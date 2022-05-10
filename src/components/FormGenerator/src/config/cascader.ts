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

const cascaderConfig: IConfig = {
  label: '级联选择',
  type: 'cascader',
  group: 'basic',
  sort: 8,
  number: 10,
  // 组件的配置
  options: {
    width: '200px',
    defaultValue: [],
    placeholder: '请选择',
    maxlength: null,
    tag: 'el-cascader',
    tagIcon: 'icon-cascader',
    dataType: 'dynamic',
    separator: '/',
    remoteOptions: [],
    remoteFunc: null,
    ShowAllLevels: true,
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
    options: [{
      id: 1,
      value: 1,
      label: '选项1',
      children: [{
        id: 2,
        value: 2,
        label: '选项1-1'
      }]
    }],
  }
}

export default cascaderConfig;
