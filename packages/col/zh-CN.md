<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 16:27:31
 * @LastEditors: Please set LastEditors
 -->
## Layout 布局

提供了`eva-row`和`eva-col`两个组件来进行行列布局

### 使用指南
``` javascript
import { Row, Col } from 'eva';

Vue.use(Row).use(Col);
```

### 代码演示

#### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比    
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

```html
<eva-row>
  <eva-col span="8">span: 8</eva-col>
  <eva-col span="8">span: 8</eva-col>
  <eva-col span="8">span: 8</eva-col>
</eva-row>

<eva-row>
  <eva-col span="4">span: 4</eva-col>
  <eva-col span="10" offset="4">offset: 4, span: 10</eva-col>
</eva-row>

<eva-row>
  <eva-col offset="12" span="12">offset: 12, span: 12</eva-col>
</eva-row>
```

#### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

```html
<eva-row gutter="20">
  <eva-col span="8">span: 8</eva-col>
  <eva-col span="8">span: 8</eva-col>
  <eva-col span="8">span: 8</eva-col>
</eva-row>
```

#### Flex 布局

将 `type` 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐

```html
<!-- 左对齐 -->
<eva-row type="flex">
  <eva-col span="6">span: 6</eva-col>
  <eva-col span="6">span: 6</eva-col>
  <eva-col span="6">span: 6</eva-col>
</eva-row>

<!-- 居中 -->
<eva-row type="flex" justify="center">
  <eva-col span="6">span: 6</eva-col>
  <eva-col span="6">span: 6</eva-col>
  <eva-col span="6">span: 6</eva-col>
</eva-row>

<!-- 右对齐 -->
<eva-row type="flex" justify="end">
  <eva-col span="6">span: 6</eva-col>
  <eva-col span="6">span: 6</eva-col>
  <eva-col span="6">span: 6</eva-col>
</eva-row>

<!-- 两端对齐 -->
<eva-row type="flex" justify="space-between">
  <eva-col span="6">span: 6</eva-col>
  <eva-col span="6">span: 6</eva-col>
  <eva-col span="6">span: 6</eva-col>
</eva-row>

<!-- 每个元素的两侧间隔相等 -->
<eva-row type="flex" justify="space-around">
  <eva-col span="6">span: 6</eva-col>
  <eva-col span="6">span: 6</eva-col>
  <eva-col span="6">span: 6</eva-col>
</eva-row>
```

### API

#### Row

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 布局方式，可选值为`flex` | `String` | - | - |
| gutter | 列元素之间的间距（单位为px） | `String | Number` | - | - |
| tag | 自定义元素标签 | `String` | `div` | - |
| justify | Flex 主轴对齐方式，可选值为 `end` `center` <br> `space-around` `space-between` | `String` | `start` | - |
| align | Flex 交叉轴对齐方式，可选值为 `center` `bottom` | `String` | `top` | - |

#### Col

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| span | 列元素宽度 | `String | Number` | - | - |
| offset | 列元素偏移距离 | `String | Number` | - | - |
| tag | 自定义元素标签 | `String` | `div` | - |
