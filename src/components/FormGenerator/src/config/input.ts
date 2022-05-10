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

const inputConfig: IConfig = {
  label: '单行文本',
  type: 'input',
  group: 'basic',
  sort: 1,
  number: 10,
  // 组件的配置
  options: {
    width: '100%',
    defaultValue: '',
    placeholder: '请输入文字内容',
    maxlength: null,
    tag: 'el-input',
    tagIcon: 'icon-input',
    prefixIcon: '',
    suffixIcon: '',
    showLabel: true,
    disabled: false,
    clearable: false,
    readonly: false,
    // 正则校验规则
    rules
  },
  // 组件的插槽属性
  slot: {
    prepend: '',
    append: ''
  }
}

export default inputConfig;
