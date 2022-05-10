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

const titleTextConfig: IConfig = {
  label: '标题文本',
  type: 'title-text',
  group: 'custom',
  sort: 1,
  number: 10,
  // 组件的配置
  options: {
    width: '100%',
    defaultValue: '',
    placeholder: '请输入标题文本',
    maxlength: null,
    tagIcon: 'icon-text',
    disabled: false,
    readonly: false,
    // 正则校验规则
    rules
  },
  slot: {
    contentValue: '',
    placeholder: '请输入描述文本',
  }
}

export default titleTextConfig;
