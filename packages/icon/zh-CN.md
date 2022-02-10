<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 14:04:17
 * @LastEditors: Please set LastEditors
 -->
## Icon 图标

### 使用指南
目前基于vant-icon的资源开发的此组件，后续会换成淘宝的icon资源
``` javascript
import { Icon } from 'eva';

Vue.use(Icon);
```

### 代码演示

#### 基础用法

`Icon`的`name`属性支持传入图标名称或图片链接

```html
<eva-icon name="close" />
<eva-icon name="https://xxx.xxx.xxx/xxx.png" />
```

#### 显示徽标

```html
<eva-icon name="chat" info="9" />
<eva-icon name="chat" info="99+" />
```

#### 使用本地字体文件

Icon 组件默认引用 `yzcdn.cn` 域名下的字体文件，如果想要使用本地字体文件，请引入下面的 css 文件

```js
import 'vant/lib/icon/local.css';
```

#### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入你需要的 iconfont 对应的 ttf 文件和样式，之后就可以在 Icon 组件中直接使用

```css
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<eva-icon class-prefix="my-icon" name="extra" />
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 图标名称或图片链接 | `String` | - | - |
| info | 图标右上角文字提示 | `String | Number` | - | - |
| color | 图标颜色 | `String` | `inherit` | - |
| size | 图标大小，如 `20px` `2em` | `String` | `inherit` | - |
| class-prefix | 类名前缀 | `String` | `van-icon` | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击图标时触发 | - |

