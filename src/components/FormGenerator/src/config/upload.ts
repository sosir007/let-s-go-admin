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

const uploadText: IConfig = {
  label: '上传',
  type: 'upload',
  group: 'advance',
  sort: 1,
  number: 1,
  // 组件的配置
  options: {
    width: '100%',
    defaultValue: [],
    tag: 'el-upload',
    tagIcon: 'icon-upload',
    name: 'file',
    action: 'http://example.com/upload',
    buttonText: '点击上传',
    method: 'post',
    listType: 'text',
    accept: 'image/*',
    limit: 3,
    autoUpload: false,
    multiple: false,
    disabled: false,
    rules
  }
}

export default uploadText;
