<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 16:20:36
 * @LastEditors: Please set LastEditors
 -->
## NavBar 导航栏

### 使用指南
``` javascript
import { NavBar } from 'eva';

Vue.use(NavBar);
```

### 代码演示

#### 基础用法

```html
<eva-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
```

```js
export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
```

#### 高级用法
通过插槽定制内容

```html
<eva-nav-bar title="标题" left-text="返回" left-arrow>
  <eva-icon name="search" slot="right" />
</eva-nav-bar>
```


### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 标题 | `String` | `''` | - |
| left-text | 左侧文案 | `String` | `''` | - |
| right-text | 右侧文案 | `String` | `''` | - |
| left-arrow | 是否显示左侧箭头 | `Boolean` | `false` | - |
| fixed | 是否固定在顶部 | `Boolean` | `false` | - |
| border | 是否显示下边框 | `Boolean` | `true` | - |
| z-index | 元素 z-index | `Number` | `1` | - |

### Slot

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| left | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click-left | 点击左侧按钮时触发 | - |
| click-right | 点击右侧按钮时触发 | - |
