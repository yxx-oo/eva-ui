<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-28 15:52:13
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div
    :class="b([type, colorType, {vertical}])" :size="size"
  >
    <span :class="b('spinner', type)" :style="style">
      <i
        v-for="(item, index) in (type === 'spinner' ? 12 : 0)"
        :key="index"
      />
      <svg
        v-if="type === 'circular'"
        :class="b('circular')"
        viewBox="25 25 50 50"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
        />
      </svg>
    </span>
    <span v-if="text" :class="b('text')">
      {{text}}
    </span>
  </div>
</template>

<script>
import create from '../utils/create-basic';
import { isDef, addUnit } from '../utils';

const DEFAULT_COLOR = '#c9c9c9';

export default create({
  name: 'loading',

  props: {
    size: String,
    vertical: Boolean,
    text: String,
    textSize: [Number, String],
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: DEFAULT_COLOR
    }
  },

  computed: {
    colorType() {
      const { color } = this;
      return color === 'white' || color === 'black' ? color : '';
    },

    style() {
      const style = {};
      style.color= this.color === 'black' ? DEFAULT_COLOR : this.color;
      if (isDef(this.size)) {
        style.width = addUnit(this.size);
        style.height = addUnit(this.size);
      }
    
      return style;
    }
  }
});
</script>
