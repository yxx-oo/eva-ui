<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 16:16:58
 * @LastEditTime: 2019-08-22 16:17:07
 * @LastEditors: Please set LastEditors
 -->
# Overlay

### Install

``` javascript
import Vue from 'vue';
import { Overlay } from 'vant';

Vue.use(Overlay);
```

## Usage

### Basic Usage

```html
<van-button
  type="primary"
  text="Show Overlay"
  @click="show = true"
/>

<van-overlay
  :show="show"
  @click="show = false"
/>
```

```js
export default {
  data() {
    return {
      show: false
    }
  }
},
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| show | Whether to show overlay | `boolean` | `false` |
| z-index | z-index | `number | string` | `1` |
| duration | Animation duration | `number | string` | `0.3` |
| class-name | ClassName | `string` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |
