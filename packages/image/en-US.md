<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 17:13:37
 * @LastEditTime: 2019-08-22 17:27:32
 * @LastEditors: Please set LastEditors
 -->
# Image

### Install

``` javascript
import Vue from 'vue';
import { Image } from 'vant';

Vue.use(Image);
```

## Usage

### Basic Usage

```html
<van-image
  width="100"
  height="100"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Fit Mode

```html
<van-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Round

Show round image, it may not works at `fit=contain` and `fit=scale-down`

```html
<van-image
  round
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Lazy Load

```html
<van-image
  width="100"
  height="100"
  lazy-load
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

```js
import { Lazyload } from 'vant';

Vue.use(Lazyload);
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| src | Src | `string` | - | - |
| fit | Fit mode | `string` | `fill` | - |
| alt | Alt | `string` | - | - |
| width | Width | `string | number` | - | - |
| height | Height | `string | number` | - | - |
| round | Whether to be round | `boolean` | `false` | - |
| lazy-load | Whether to enable lazy load，should register [Lazyload](#/en-US/lazyload) component | `boolean` | `false` | - |
| show-error | Whether to show error placeholder | `boolean` | `true` |
| show-loading | Whether to show loading placeholder | `boolean` | `true` |

### fit optional value

| name | desctription |
|------|------|
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of `none` or `contain` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click image | event: Event |
| load | Triggered when image loaded | - |
| error | Triggered when image load failed | - |

### Slots

| Name | Description |
|------|------|
| loading | Custom loading placeholder |
| error | Custom error placeholder |
