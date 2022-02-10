<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:53:25
 * @LastEditTime: 2019-08-15 18:26:43
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div
    :class="b()"
    class="eva-hairline--top-bottom"
  >
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'collapse',

  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },

  data() {
    return {
      items: []
    };
  },

  methods: {
    switch(name, expanded) {
      if (!this.accordion) {
        name = expanded
          ? this.value.concat(name)
          : this.value.filter(activeName => activeName !== name);
      }
      this.$emit('change', name);
      this.$emit('input', name);
    }
  }
});
</script>
