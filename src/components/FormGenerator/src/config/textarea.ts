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

const textareaConfig: IConfig = {
  label: '多行文本',
  type: 'textarea',
  group: 'basic',
  sort: 2,
  number: 5,
  // 组件的配置
  options: {
    width: '100%',
    defaultValue: '',
    placeholder: '请输入文字内容',
    maxlength: null,
    rows: 4,
    autosize: false,
    tag: 'el-input',
    tagIcon: 'icon-textarea',
    prefixIcon: '',
    suffixIcon: '',
    showLabel: false,
    disabled: false,
    clearable: false,
    readonly: false,
    // 正则校验规则
    rules
  },
}

export default textareaConfig;
