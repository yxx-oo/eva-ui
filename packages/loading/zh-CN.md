<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 15:39:42
 * @LastEditors: Please set LastEditors
 -->
## Loading 加载

### 引入

``` javascript
import Vue from 'vue';
import { Loading } from 'eva';

Vue.use(Loading);
```

### 代码演示

### 加载类型

```html
<eva-loading />
<eva-loading type="spinner" />
```

### 自定义颜色

```html
<eva-loading color="#1989fa" />
<eva-loading type="spinner" color="#1989fa" />
```

### 加载文案

```html
<eva-loading size="24px">加载中...</eva-loading>
```

### 垂直排列

```html
<eva-loading size="24px" vertical>加载中...</eva-loading>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| color | 颜色 | `String` | `#c9c9c9` | - |
| type | 类型，可选值为 `spinner` | `String` | `circular` | - |
| size | 加载图标大小，默认单位为`px` | `String | Number` | `30px` | - |
| text-size | 文字大小，默认单位为`px` | `String | Number` | `14px` | - |
| vertical | 是否垂直排列图标和文字内容 | `Boolean` | `false` | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 加载文案 |

