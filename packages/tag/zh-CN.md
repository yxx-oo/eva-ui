<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 16:20:02
 * @LastEditors: Please set LastEditors
 -->
## Tag 标记

### 使用指南
``` javascript
import { Tag } from 'eva';

Vue.use(Tag);
```

### 代码演示

#### 基础用法

通过 type 属性控制 Tag 颜色，默认为灰色

```html
<eva-tag>标签</eva-tag>
<eva-tag type="danger">标签</eva-tag>
<eva-tag type="primary">标签</eva-tag>
<eva-tag type="success">标签</eva-tag>
```

#### 空心样式

设置`plain`属性设置为空心样式

```html
<eva-tag plain>标签</eva-tag>
<eva-tag plain type="danger">标签</eva-tag>
<eva-tag plain type="primary">标签</eva-tag>
<eva-tag plain type="success">标签</eva-tag>
```

#### 圆角样式

通过`round`设置为圆角样式

```html
<eva-tag round>标签</eva-tag>
<eva-tag round type="danger">标签</eva-tag>
<eva-tag round type="primary">标签</eva-tag>
<eva-tag round type="success">标签</eva-tag>
```

#### 标记样式

通过`mark`设置为标记样式(半圆角)

```html
<eva-tag mark>标签</eva-tag>
<eva-tag mark type="danger">标签</eva-tag>
<eva-tag mark type="primary">标签</eva-tag>
<eva-tag mark type="success">标签</eva-tag>
```

#### 自定义颜色

```html
<eva-tag color="#f2826a">标签</eva-tag>
<eva-tag color="#f2826a" plain>标签</eva-tag>
<eva-tag color="#7232dd">标签</eva-tag>
<eva-tag color="#7232dd" plain>标签</eva-tag>
<eva-tag color="#ffe1e1" text-color="#ad0000">标签</eva-tag>
```

#### 标签大小

```html
<eva-tag>标签</eva-tag>
<eva-tag size="medium">标签</eva-tag>
<eva-tag size="large">标签</eva-tag>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为`primary` `success` `danger` | `String` | - | - |
| size | 大小, 可选值为`large` `medium` | `String` | - | - |
| color | 标签颜色 | `String` | - | - |
| plain | 是否为空心样式 | `Boolean` | `false` | - |
| round | 是否为圆角样式 | `Boolean` | `false` | - |
| mark | 是否为标记样式 | `Boolean` | `false` | - |
| text-color | 文本颜色，优先级高于`color`属性 | `String` | `white` | - |

### Slot

| 名称 | 说明 |
|------|------|
| - | 自定义 Tag 显示内容 |
