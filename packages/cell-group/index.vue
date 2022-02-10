<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:53:21
 * @LastEditTime: 2019-08-15 18:31:07
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="[b(), { 'eva-hairline--top-bottom': border }]">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create-basic';

export default create({
  name: 'cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
});
</script>
