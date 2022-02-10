<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-15 18:58:43
 * @LastEditors: Please set LastEditors
 -->
<template>
  <component
    :is="tag"
    :class="b({
      flex,
      [`align-${align}`]: flex && align,
      [`justify-${justify}`]: flex && justify
    })"
    :style="style"
  >
    <slot />
  </component>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'row',

  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    flex() {
      return this.type === 'flex';
    },

    style() {
      const margin = `-${Number(this.gutter) / 2}px`;
      return this.gutter
        ? { marginLeft: margin, marginRight: margin }
        : {};
    }
  }
});
</script>
