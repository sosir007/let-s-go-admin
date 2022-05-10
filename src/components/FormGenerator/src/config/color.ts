import { IConfig } from ".";

const colorConfig: IConfig = {
  label: '颜色选择',
  type: 'color',
  group: 'basic',
  sort: 14,
  number: 10,
  // 组件的配置
  options: {
    width: '100%',
    defaultValue: null,
    tag: 'el-color-picker',
    tagIcon: 'icon-color',
    size: 'medium',
    showAlpha: false,
    showLabel: true,
    disabled: false
  }
}

export default colorConfig;
