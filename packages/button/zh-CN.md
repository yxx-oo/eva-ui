<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-10-21 16:17:36
 * @LastEditors: Please set LastEditors
 -->
## Button 按钮

### 引入

``` javascript
import Vue from 'vue';
import { Button } from 'eva';

Vue.use(Button);
```

## 代码演示

### 按钮类型
支持`default`、`primary`、`gradient`四种类型，默认为`primary`

```html
<eva-button type="default">默认按钮</eva-button>
<eva-button type="primary">主要按钮</eva-button>
<eva-button type="gradient">渐变色</eva-button>
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<eva-button plain type="primary">朴素按钮</eva-button>
```

### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现

```html
<eva-button plain hairline type="primary">细边框按钮</eva-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<eva-button disabled type="primary">禁用状态</eva-button>
<eva-button disabled type="danger">禁用状态</eva-button>
```

### 加载状态

通过`loading`属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过`loading-text`设置加载状态下的文字

```html 
<eva-button loading type="primary" />
<eva-button loading type="danger" />
```

### 按钮形状

通过`square`设置方形按钮，通过`round`设置圆形按钮

```html 
<eva-button square type="primary">方形按钮</eva-button>
<eva-button round type="danger">圆形按钮</eva-button>
```

### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<eva-button size="large">大号按钮</eva-button>
<eva-button size="normal">普通按钮</eva-button>
<eva-button size="small">小型按钮</eva-button>
<eva-button size="mini">迷你按钮</eva-button>
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为 `primary` `default` | `String` | `primary` | - |
| size | 尺寸，可选值为 `large` `small` `mini` | `String` | `normal` | - |
| text | 按钮文字 | `String` | - | - |
| color | 按钮颜色 | `String` | - | - |
| tag | HTML 标签 | `String` | `button` | - |
| native-type | 原生 type 属性 | `String` | - | - |
| block | 是否为块级元素 | `Boolean` | `false` | - |
| gradient | 是否为渐变色 | `Boolean` | `false` | - |
| plain | 是否为朴素按钮 | `Boolean` | `false` | - |
| square | 是否为方形按钮 | `Boolean` | `false` | - |
| round | 是否为圆形按钮 | `Boolean` | `false` | - |
| disabled | 是否禁用按钮 | `Boolean` | `false` | - |
| hairline | 是否使用 0.5px 边框 | `Boolean` | `false` | - |
| loading | 是否显示为加载状态 | `Boolean` | `false` | - |
| loading-text | 加载状态提示文字 | `String` | - | - |
| loading-type | 加载图标类型，可选值为`spinner` | `String` | `circular` | - |
| loading-size | 加载图标大小 | `String` | `20px` | - |

### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | event |
| touchstart | 开始触摸按钮时触发 | event |

### Event 示例
```html 
<template>
  <eva-button 
    type="default" 
    @click="checke" 
    @touchstart="onTouchstart"
  />
<template>
<script>
  export default {
    methods: {
      checke() {
        console.log('点击按钮');
      },
      onTouchstart() {
        console.log('点击开始');
      }
    }
  }
</script>
```