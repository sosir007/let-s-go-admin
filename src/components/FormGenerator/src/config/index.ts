export interface IRules {
  trigger: string
  enum: string
  len?: number
  max?: number
  message: string
  min?: number
  pattern: string
  required: boolean
  type: string
}

export interface IConfigOptions {
  width: number | string
  defaultValue: any
  tag?: string
  tagIcon: string
  maxlength?: number | null
  showLabel?: boolean
  disabled: boolean
  clearable?: boolean
  readonly?: boolean
  // 正则校验规则
  rules?: IRules
  [option: string]: any,
}

export interface IConfig {
  label: string
  type: string
  group: 'basic' | 'advance' | 'custom',
  sort: number
  number: number
  // 组件的配置
  options: IConfigOptions
  // 组件的插槽属性
  slot?: {
    [option: string]: any
  }
}

export interface IFormConfig {
  formRef: string
  formModel: string
  size: string
  labelPosition: string
  labelWidth: number
  formRules: string
  gutter: number
  disabled: boolean
  span: number,
  formBtns: boolean
}

export const formConfig: IFormConfig = {
  formRef: 'elForm',
  formModel: 'formData',
  size: 'medium',
  labelPosition: 'right',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 8,
  disabled: false,
  span: 24,
  formBtns: true
}

function loadConfig(type?: string) {
  const config = import.meta.globEager('./*.ts')

  const allConfig = [] as IConfig[];
  Object.keys(config).forEach(key => {
    allConfig.push(config[key].default)
  })

  const basicConfig = allConfig.filter(c => c.group === 'basic').sort((a, b) => a.sort - b.sort) as IConfig[];
  const advanceConfig = allConfig.filter(c => c.group === 'advance').sort((a, b) => a.sort - b.sort) as IConfig[];
  const customConfig = allConfig.filter(c => c.group === 'custom').sort((a, b) => a.sort - b.sort) as IConfig[];

  return {
    basicConfig,
    advanceConfig,
    customConfig
  }
}

export default loadConfig;
