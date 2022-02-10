<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 14:55:13
 * @LastEditors: Please set LastEditors
 -->
## Field 输入框

`input`或`textarea`的输入框。

### 使用指南
``` javascript
import { Field } from 'eva';

Vue.use(Field);
```

### 代码演示

#### 基础用法
通过 v-model 绑定输入框的值

```html
<eva-cell-group>
  <eva-field v-model="value" placeholder="请输入用户名" />
</eva-cell-group>
```

#### 自定义类型
根据`type`属性定义不同类型的输入框

```html
<eva-cell-group>
  <eva-field
    v-model="username"
    required
    clearable
    label="用户名"
    icon="question-o"
    placeholder="请输入用户名"
    @click-icon="$toast('question')"
  />

  <eva-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</eva-cell-group>
```

#### 禁用输入框

```html
<eva-cell-group>
  <eva-field
    value="输入框已禁用"
    label="用户名"
    left-icon="contact"
    disabled
  />
</eva-cell-group>
```

#### 错误提示
通过`error`或者`error-message`属性增加对应的错误提示

```html
<eva-cell-group>
  <eva-field
    v-model="username"
    label="用户名"
    placeholder="请输入用户名"
    error
  />
  <eva-field
    v-model="phone"
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
</eva-cell-group>
```

#### 高度自适应
对于 textarea，可以通过`autosize`属性设置高度自适应

```html
<eva-cell-group>
  <eva-field
    v-model="message"
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    rows="1"
    autosize
  />
</eva-cell-group>
```

#### 插入按钮
通过 button slot 可以在输入框尾部插入按钮

```html
<eva-cell-group>
  <eva-field
    v-model="sms"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <eva-button slot="button" size="small" type="primary">发送验证码</eva-button>
  </eva-field>
</eva-cell-group>
```

### API

Field 默认支持 Input 标签所有的原生属性，比如 `maxlength`、`placeholder`、`autofocus` 等

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|------|
| label | 输入框左侧文本 | `String` | - | - |
| value | 当前输入的值 | `String | Number` | - | - |
| type | 可设置为原生类型, 如 `number` `tel` `textarea` | `String` | `text` | - |
| border | 是否显示内边框 | `Boolean` | `true` | - |
| disabled | 是否禁用输入框 | `Boolean` | `false` | - |
| readonly | 是否只读 | `Boolean` | `false` | - |
| clearable | 是否启用清除控件 | `Boolean` | `false` | - |
| required | 是否显示表单必填星号 | `Boolean` | `false` | - |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` | - |
| error | 是否将输入内容标红 | `Boolean` | `false` | - |
| error-message | 底部错误提示文案，为空时不展示 | `String` | `''` | - |
| label-align | 文本对齐方式，可选值为 `center` `right` | `String` | `left` | - |
| input-align | 输入框内容对齐方式，可选值为 `center` `right` | `String` | `left` | - |
| autosize | 自适应内容高度，只对 textarea 有效，可传入对象,<br>如 { maxHeight: 100, minHeight: 50 }，单位为 px | `Boolean | Object` | `false` | - |
| icon | 输入框尾部图标名称或图片链接，可选值见 Icon 组件 | `String` | - | - |
| left-icon | 输入框左侧图标名称或图片链接，可选值见 Icon 组件 | `String` | - | - |

### Event

| 事件 | 说明 | 回调参数 |
|------|------|------|
| input | 输入框内容变化时触发 | value: 输入框当前值 |
| focus | 输入框获得焦点时触发 | event: Event |
| blur | 输入框失去焦点时触发 | event: Event |
| clear | 点击清除按钮时触发 | event: Event |
| click | 点击时触发 | event: Event |
| click-left-icon | 点击左侧图标时触发 | event: Event |
| click-right-icon | 点击右侧图标时触发 | event: Event |

### Event 示例
```html
<template>
  <eva-field
    v-model="sms"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
    @click="click"
    @input="input"
    @focus="focus(`name`,$event)" //例如页面有多个输入框的话，需要作区分就出入两个值，第一个值为自定义就好，第二个值可要可不要，按需写入。但是需要和下面的focus方法接受参数一一对应即可
    @blur="blur"
    @clear="clear"
    @click-left-icon="clickLeftIcon"
    @click-right-icon="$toast('question')"
  />
<template>
<script>
export default {
  methods: {
    input(value) {
      console.log('输入框内容变化'+value);
    },
    focus(msg,event) {//如果上面传入了一个值，这里也就只需要接受一个值，请注意！
      console.log('输入框获得焦点'+name+event);
    },
    blur(event) {
      console.log('输入框失去焦点'+event);
    },
    clear(event) {
      console.log('点击清除按钮'+event);
    },
    click(event) {
      console.log('点击时触发'+event);
    },
    clickLeftIcon(event) {
      console.log('点击左侧图标时触发'+event);
    },
    clickRightIcon(event) {
      console.log('点击右侧图标时触发'+event);
    },
  }
}
</script>
```


### 方法

通过 ref 可以获取到 field 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| focus | - | - | 获取输入框焦点 |
| blur | - | - | 取消输入框焦点 |

### Slot

| 名称 | 说明 |
|------|------|
| label | 自定义输入框标签 |
| input | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |
| left-icon | 自定义输入框头部图标 |
| icon | 自定义输入框尾部图标 |
| button | 自定义输入框尾部按钮 |
