<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 16:16:46
 * @LastEditTime: 2019-09-03 15:42:53
 * @LastEditors: Please set LastEditors
 -->
# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作

### 引入

``` javascript
import Vue from 'vue';
import { Overlay } from 'eva';

Vue.use(Overlay);
```

## 代码演示

### 基础用法

```html
<eva-button
  type="primary"
  text="显示遮罩层"
  @click="show = true"
/>

<eva-overlay
  :show="show"
  @click="show = false"
/>
```

```js
export default {
  data() {
    return {
      show: false
    }
  }
},
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| show | 是否展示遮罩层 | `Boolean` | `false` | - |
| z-index | z-index 层级 | `Number | String` | `1` | - |
| duration | 动画时长，单位秒 | `Number | String` | `0.3` | - |
| class-name | 自定义类名 | `String` | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |
