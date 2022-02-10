<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 16:25:33
 * @LastEditors: Please set LastEditors
 -->
## Uploader 图片上传

### 使用指南
``` javascript
import { Uploader } from 'eva';

Vue.use(Uploader);
```

### 代码演示

#### 基础用法

```html
<eva-uploader :after-read="onRead">
  <eva-icon name="photograph"/>
</eva-uploader>
```

```javascript
export default {
  methods: {
    onRead(file) {
      console.log(file)
    }
  }
};
```

#### 设置 Input 属性
可以直接在 Uploader 上设置 accpet、multiple 等原生属性，input 会自动继承该属性

```html
<eva-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
  <eva-icon name="photograph" />
</eva-uploader>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符，可以在回调函数的第二项参数中获取 | `String | Number` | - | - |
| accept | 接受的文件类型 | `String` | `image/*` | - |
| preview-image | 是否在上传完成后展示预览图 | `boolean` | `true` | - |
| preview-size | 预览图和上传区域的尺寸，默认单位为`px` | `String | Number` | `80px` | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | `Boolean` | `false` | - |
| disabled | 是否禁用文件上传 | `Boolean` | `false` | - |
| capture | 图片选取模式，可选值为`camera`(直接调起摄像头) | `String` | - | - |
| before-read | 读取前的回调函数，返回 false 可终止文件读取，支持返回`Promise` | `Function` | - | - |
| after-read | 读取完成后的回调函数 | `Function` | - | - |
| max-size | 文件大小限制，单位为 byte | `Number` | - | - |
| max-count | 文件上传数量限制 | `Number` | - | - |
| result-type | 文件读取结果类型，可选值为 `text` | `String` | `dataUrl` | - |
| upload-text | 上传区域文字提示 | `string` | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| oversize | 文件大小超过限制时触发 | 同`after-read` |
| delete | 删除文件预览时触发 | file: 被删除的文件对象 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义上传区域 |

### before-read、after-read 回调参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| file | 文件解析后的 file 对象 | `object` |
| detail | 额外信息，包含 name 字段 | `object` |
