<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 15:37:19
 * @LastEditors: Please set LastEditors
 -->
## Dialog 弹出框
Dialog 组件支持函数调用和组件调用两种形式

### 使用指南

```js
import { Dialog } from 'eva';

Vue.use(Dialog);
```

### 代码演示

#### 消息提示

用于提示一些消息，只包含一个确认按钮

```javascript
Dialog.alert({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容'
}).then(() => {
  // on close
});
```

#### 消息确认

用于确认消息，包含取消和确认按钮

```javascript
Dialog.confirm({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on confirm
}).catch(() => {
  // on cancel
});
```

#### 全局方法

引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 $dialog 方法，在所有组件内部都可以直接调用此方法

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: '弹窗内容'
    });
  }
}
```

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| Dialog | `options` | `Promise` | 展示弹窗 |
| Dialog.alert | `options` | `Promise` | 展示消息提示弹窗 |
| Dialog.confirm | `options` | `Promise` | 展示消息确认弹窗 |
| Dialog.setDefaultOptions | `options` | `void` | 修改默认配置，对所有 Dialog 生效 |
| Dialog.resetDefaultOptions | - | `void` | 重置默认配置，对所有 Dialog 生效 |
| Dialog.close | - | `void` | 关闭弹窗 |

### Options

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 标题 | `String` | - | - |
| message | 内容 | `String` | - | - |
| messageAlign | 内容对齐方式，可选值为`left` `right` | `String` | `center` | - |
| className | 自定义类名 | `String | Array | Object` | - | - |
| showConfirmButton | 是否展示确认按钮 | `Boolean` | `true` | - |
| showCancelButton | 是否展示取消按钮 | `Boolean` | `false` | - |
| cancelButtonText | 取消按钮文案 | `String` | `取消` | - |
| cancelButtonColor | 取消按钮颜色 | `String` | `#000` | - |
| confirmButtonText | 确认按钮的文案 | `String` | `确认` | - |
| confirmButtonColor | 确认按钮颜色 | `String` | `#1989fa` | - |
| cancelButtonText | 取消按钮的文案 | `String` | `取消` | - |
| cancelButtonColor | 取消按钮颜色 | `String` | `#000` | - |
| overlay | 是否展示蒙层 | `Boolean` | `true` | - |
| closeOnPopstate | 是否在页面回退时自动关闭 | `Boolean` | `false` | - |
| closeOnClickOverlay | 点击蒙层时是否关闭弹窗 | `Boolean` | `false` | - |
| lockScroll | 是否锁定背景滚动 | `Boolean` | `true` | - |
| beforeClose | 关闭前的回调函数，<br>调用 done() 后关闭弹窗，<br>调用 done(false) 阻止弹窗关闭 | `(action, done) => void` | - | - |
| getContainer | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | `string | () => HTMLElement` | `body` | - |


#### 高级用法
如果需要在弹窗内实现更复杂的交互，可以通过组件形式来调用 Dialog，调用前需要通过 Vue.use 注册组件

```html
<eva-dialog
  v-model="show"
  show-cancel-button
  :before-close="beforeClose"
>
  <eva-field
    v-model="username"
    label="用户名"
    placeholder="请输入用户名"
  />
  <eva-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
  />
</eva-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
      username: '',
      password: ''
    };
  },
  
  methods: {
    beforeClose(action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 是否显示弹窗 | `Boolean` | - | - |
| title | 标题 | `String` | - | - |
| message | 内容 | `String` | - | - |
| message-align | 内容对齐方式，可选值为`left` `right` | `String` | `center` | - |
| show-confirm-button | 是否展示确认按钮 | `Boolean` |  `true` | - |
| show-cancel-button | 是否展示取消按钮 | `Boolean` |  `false` | - |
| cancel-button-text | 取消按钮文案 | `String` | `取消` | - |
| cancel-button-color | 取消按钮颜色 | `String` | `#000` | - |
| confirm-button-text | 确认按钮的文案 | `String` |  `确认` | - |
| cancel-button-text | 取消按钮的文案 | `String` | `取消` | - |
| overlay | 是否展示蒙层 | `Boolean` | `true` | - |
| close-on-click-overlay | 是否在点击蒙层后关闭 | `Boolean` | `false` | - |
| lock-scroll | 是否锁定背景滚动 | `Boolean` | `true` | - |
| before-close | 关闭前的回调函数，<br>调用 done() 后关闭弹窗，<br>调用 done(false) 阻止弹窗关闭 | `(action, done) => void` | - | - |
| get-container | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | `String | () => HTMLElement` | - | - |

### Event

| 事件 | 说明 | 回调参数 |
|------|------|------|
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |

### Slots

通过组件调用 `Dialog` 时，支持以下插槽：

| 名称 | 说明 |
|------|------|
| default | 自定义内容 |
| title | 自定义标题 |
