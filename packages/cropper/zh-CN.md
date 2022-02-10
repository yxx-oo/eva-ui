<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-20 16:23:13
 * @LastEditors: Please set LastEditors
 -->
## Cropper 单元格

### 引入

``` javascript
import Vue from 'vue';
import { Cropper } from 'eva';

Vue.use(Cropper);
```

### 代码演示

#### 基础用法

`Cropper`使用的时候一定需要注意，不要用`v-show`属性，需要用`v-if`来控制是否展示

```html
<template>
<eva-cropper v-if="isShow" ref="cropper"
            :img="option.img"
            :outputSize="option.outputSize" 
            :outputType="option.outputType"
            :info="option.info"
            :canScale="option.canScale"
            :centerBox="option.centerBox"
            :fixedBox="option.fixedBox"
            :canMoveBox="option.canMoveBox"
            :autoCrop="option.autoCrop"
            @cancel="cancel"
            @determine="determine"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"/>
</template>
<script>
export default {
  data(){
    return {
      option: {
        img: 'http://xxx.xxx.xxx',// 裁剪图片的地址
        info: true,             // 裁剪框的大小信息
        outputSize: 1,          // 裁剪生成图片的质量
        outputType: 'jpeg',     // 裁剪生成图片的格式
        canMoveBox: false,      // 截图框能否拖动
        centerBox: true,        // 截图框是否被限制在图片里面
        canScale: false,        // 图片是否允许滚轮缩放
        fixedBox: true,         // 固定截图框大小 不允许改变
        autoCrop: true,         // 是否默认生成截图框
        // autoCropWidth: 150,  // 默认生成截图框宽度
        // autoCropHeight: 150, // 默认生成截图框高度
        fixed: true,            // 是否开启截图框宽高固定比例
        fixedNumber: [5, 5]     // 截图框的宽高比例
      },
      show: false,
    }
  },
}
</script>
```

### API

### Cropper Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| img | 裁剪图片的地址，url 地址 或者 base64 | `String` | - | - |
| outputSize | 裁剪生成图片的质量 | `Number` | - | - |
| outputType | 裁剪生成图片的格式：jpeg / png  | `String` | - | - |
| info | 裁剪框的大小信息 | `Boolean` | `true` | - |
| canScale | 图片是否允许滚轮缩放 | `Boolean` | `true` | - |
| autoCrop | 是否默认生成截图框 | `Boolean` | `false` | - |
| autoCropWidth | 默认生成截图框宽度 | `String | Number` | `0` | - |
| autoCropHeight | 默认生成截图框高度 | `String | Number` | `0` | - |
| fixed | 是否开启截图框宽高固定比例 | `Boolean` | `false` | - |
| fixedNumber | 截图框的宽高比例 | `Array` | `[1, 1]` | - |
| full | 是否输出原图比例的截图 | `Boolean` | `true` | - |
| fixedBox | 固定截图框大小 不允许改变 | `Boolean` | `true` | - |
| canMove | 上传图片是否可以移动 | `Boolean` | `true` | - |
| canMoveBox | 截图框能否拖动 | `Boolean` | `true` | - |
| original | 上传图片按照原始比例渲染 | `Boolean` | `false` | - |
| centerBox | 截图框是否被限制在图片里面 | `Boolean` | `false` | - |
| high | 是否按照设备的dpr 输出等比例图片 | `Boolean` | `true` | - |
| infoTrue | true 为展示真实输出图片宽高 false 展示看到的截图框宽高 | `Boolean` | `false` | - |
| maxImgSize | 限制图片最大宽度和高度 | `Number` | `2000` | - |
| enlarge | 图片根据截图框输出比例倍数 | `String` | `1` | - |

### Cropper Event

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| cancel | 点击取消时触发 | event |
| determine | 点击完成时触发 | event |

### Event 示例
```html 
<template>
  <eva-cell title="单元格" value="内容" @click="click"/>
<template>
<script>
  export default {
    methods: {
      cancel() {
        this.show = false;
      },
      determine(data) {
        console.log(data);
        this.show = false;
      }
    }
  }
</script>
```