<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 16:22:46
 * @LastEditors: Please set LastEditors
 -->
## Swipe 轮播

### 使用指南
``` javascript
import { Swipe, SwipeItem } from 'eva';

Vue.use(Swipe).use(SwipeItem);
```

### 代码演示

#### 基础用法
通过`autoplay`属性设置自动轮播间隔

```html
<eva-swipe :autoplay="3000" indicator-color="white">
  <eva-swipe-item>1</eva-swipe-item>
  <eva-swipe-item>2</eva-swipe-item>
  <eva-swipe-item>3</eva-swipe-item>
  <eva-swipe-item>4</eva-swipe-item>
</eva-swipe>
```

#### 图片懒加载
配合 [Lazyload](#/zh-CN/lazyload) 组件实现图片懒加载

```html
<eva-swipe :autoplay="3000">
  <eva-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </eva-swipe-item>
</eva-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
```

#### 监听 change 事件

```html
<eva-swipe @change="onChange">
  <eva-swipe-item>1</eva-swipe-item>
  <eva-swipe-item>2</eva-swipe-item>
  <eva-swipe-item>3</eva-swipe-item>
  <eva-swipe-item>4</eva-swipe-item>
</eva-swipe>
```

```js
export default {
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
    }
  }
}
```

#### 纵向滚动

```html
<eva-swipe :autoplay="3000" vertical>
  <eva-swipe-item>1</eva-swipe-item>
  <eva-swipe-item>2</eva-swipe-item>
  <eva-swipe-item>3</eva-swipe-item>
  <eva-swipe-item>4</eva-swipe-item>
</eva-swipe>
```

#### 控制滑块大小

```html
<eva-swipe :autoplay="3000" :width="300">
  <eva-swipe-item>1</eva-swipe-item>
  <eva-swipe-item>2</eva-swipe-item>
  <eva-swipe-item>3</eva-swipe-item>
  <eva-swipe-item>4</eva-swipe-item>
</eva-swipe>
```

#### 自定义指示器

```html
<eva-swipe @change="onChange">
  <eva-swipe-item>1</eva-swipe-item>
  <eva-swipe-item>2</eva-swipe-item>
  <eva-swipe-item>3</eva-swipe-item>
  <eva-swipe-item>4</eva-swipe-item>

  <div class="custom-indicator" slot="indicator">
    {{ current + 1 }}/4
  </div>
</eva-swipe>
```

```js
export default {
  methods: {
    data() {
      return {
        current: 0
      }
    },

    onChange(index) {
      this.current = index;
    }
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| autoplay | 自动轮播间隔，单位为 ms | `Number` | - | - |
| duration | 动画时长，单位为 ms | `Number` | `500` | - |
| initial-swipe | 初始位置索引值 | `Number` | `0` | - |
| loop | 是否开启循环播放 | `Boolean` | `true` | - |
| show-indicators | 是否显示指示器 | `Boolean` | `true` | - |
| indicator-color | 指示器颜色 | `String` | `#1989fa` | - |
| vertical | 是否为纵向滚动 | `Boolean` | `false` | - |
| touchable | 是否可以通过手势滑动 | `Boolean` | `true` | - |
| width | 滑块宽度 | `Number` | `0` | - |
| height | 滑块高度 | `Number` | `0` | - |

### 事件

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 每一页轮播结束后触发 | index, 当前页的索引 |

### 方法

通过 ref 可以获取到 swipe 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| swipeTo | index: 目标位置的索引 | void | 滚动到目标位置 |

### 插槽

| 名称 | 说明 |
|------|------|
| - | 轮播内容 |
| indicator | 自定义指示器 |
