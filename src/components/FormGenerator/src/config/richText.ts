import { IConfig } from ".";

const richText: IConfig = {
  label: '富文本编辑器',
  type: 'rich-text',
  group: 'advance',
  sort: 2,
  number: 1,
  // 组件的配置
  options: {
    width: '100%',
    defaultValue: '',
    placeholder: '请输入富文本内容',
    tagIcon: 'icon-rich-text',
    disabled: false,
  },
}

export default richText;
