<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-11 17:13:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled"
    :class="[b([
      type,
      size,
      {
        block,
        plain,
        round,
        square,
        hairline,
        loading,
        disabled,
        unclickable: disabled || loading,
        'bottom-action': bottomAction
      }
    ]),{ 'eva-hairline--surround': hairline}]"
    @click="onClick"
    @touchstart="onTouchstart"
  >
    <loading
      v-if="loading"
      :size="loadingSize"
      :text="loadingText"
      :type="loadingType"
      :color="type === 'default' ? void 0 : ''"
    />
    <span
      v-else
      :class="b('text')"
    >
      <slot>{{ text }}</slot>
    </span>
  </component>
</template>

<script>
import create from '../utils/create';
import mixinstouch from '../mixins/touch';

export default create({
  name: 'button',
  mixins: [mixinstouch],
  props: {
    text: String,
    icon: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    nativeType: String,
    loadingText: String,
    loadingType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    loadingSize: {
      type: String,
      default: '20px'
    }
  },

  methods: {
    onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    },
    onTouchstart(event) {
      this.$emit('touchstart', event);
    }
  }
});
</script>
