<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:53:00
 * @LastEditTime: 2019-08-23 15:54:01
 * @LastEditors: Please set LastEditors
 -->
<template>
  <i
    v-on="$listeners"
    :class="[classPrefix, isSrc ? 'van-icon--image' : `${classPrefix}-${name}`]"
    :style="style"
  >
    <slot />
    <img
      :class="b('image')"
      v-if="isSrc"
      :src="name"
      :showLoading="false"
    />
    <eva-info :info="info" />
  </i>
</template>

<script>
import Info from '../info';
import create from '../utils/create-basic';
import isSrc from '../utils/validate/src';
// import Image from '../image';

export default create({
  name: 'icon',

  components: {
    [Info.name]: Info
  },

  props: {
    name: String,
    size: String,
    color: String,
    info: [String, Number],
    classPrefix: {
      type: String,
      default: 'van-icon'
    }
  },

  computed: {
    style() {
      return {
        color: this.color,
        fontSize: this.size
      };
    },

    isSrc() {
      return isSrc(this.name);
    }
  }
});
</script>
