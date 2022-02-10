<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 16:24:42
 * @LastEditors: Please set LastEditors
 -->
## Notify 消息提示

### 使用指南
``` javascript
import { Notify } from 'eva';

Vue.use(Notify);
```

### 代码演示

#### 基础用法

```js
Notify('通知内容');
```

#### 自定义配置

```js
Notify({
  message: '通知内容',
  duration: 1000,
  background: '#1989fa'
});
```

#### 组件内调用

引入 Notify 组件后，会自动在 Vue 的 prototype 上挂载 $notify 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$notify('提示文案');
  }
}
```

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| Notify | `options | message` | notify 实例 | 展示提示 |
| Notify.clear | - | `void` | 关闭提示 |
| Notify.setDefaultOptions | `options` | `void` | 修改默认配置，对所有 Notify 生效 |
| Notify.resetDefaultOptions | - | `void` | 重置默认配置，对所有 Notify 生效 |

### Options

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| message | 展示文案 | `String` | - | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | `Number` | `3000` | - |
| color | 字体颜色 | `String` | `#fff` | - |
| background | 背景颜色 | `String` | `#f44` | - |
