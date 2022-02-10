<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-02 17:35:37
 * @LastEditors: Please set LastEditors
 -->
<template>
  <transition :name="currentTransition">
    <div
      v-if="shouldRender"
      v-show="value"
      :class="b({ [position]: position })"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';

export default create({
  name: 'popup',

  mixins: [Popup],

  props: {
    position: String,
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    currentTransition() {
      return this.transition || (this.position ? `popup-slide-${this.position}` : 'eva-fade');
    }
  }
});
</script>
