<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-11 10:23:10
 * @LastEditors: Please set LastEditors
 -->
<template>
  <transition name="eva-fade">
    <div
      v-show="show"
      class="eva-overlay"
      :class="className"
      :style="style"
      @touchmove.prevent.stop
      @click="$emit('click', $event)"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'overlay',

  props: {
    show: Boolean,
    className: String,
    customStyle: Object,
    zIndex: {
      type: [Number, String],
      default: 1
    },
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      };
    }
  }
});
</script>
