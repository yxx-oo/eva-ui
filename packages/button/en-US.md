<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-30 16:14:53
 * @LastEditors: Please set LastEditors
 -->
## Button

### Install
``` javascript
import { Button } from 'eva';

Vue.use(Button);
```

### Usage

#### Type

```html
<eva-button type="primary">Primary</eva-button>
<eva-button type="danger">Danger</eva-button>
<eva-button type="default">Default</eva-button>
<eva-button type="warning">Warning</eva-button>
```

#### Plain

```html
<eva-button plain type="primary">Primary</eva-button>
<eva-button plain type="danger">Danger</eva-button>
```

#### Disabled

```html
<eva-button disabled type="primary">Diabled</eva-button>
<eva-button disabled type="danger">Diabled</eva-button>
```

#### Loading

```html 
<eva-button loading type="primary" />
<eva-button loading type="primary" />
```

#### Shape

```html 
<eva-button square type="primary">Square</eva-button>
<eva-button round type="danger">Round</eva-button>
```

#### Size

```html 
<eva-button size="large">Large</eva-button>
<eva-button size="normal">Normal</eva-button>
<eva-button size="small">Small</eva-button>
<eva-button size="mini">Mini</eva-button>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `primary` `warning` `danger` | `String` | `default` |
| size | Can be set to `large` `small` `mini` | `String` | `normal` |
| text | Text | `String` | - |
| tag | Tag | `String` | `button` |
| native-type | Native Type Attribute | `String` | `''` |
| plain | Whether to be plain button | `Boolean` | `false` |
| disabled | Whether to disable button | `Boolean` | `false` |
| loading | Whether show loading status | `Boolean` | `false` |
| block | Whether to set display block | `Boolean` | `false` |
| round | Whether to be round button | `Boolean` | `false` |
| square | Whether to be square button | `Boolean` | `false` |

### Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | - |
