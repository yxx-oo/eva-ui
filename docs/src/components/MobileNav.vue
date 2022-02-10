<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:53:13
 * @LastEditTime: 2019-08-15 18:31:29
 * @LastEditors: Please set LastEditors
 -->
<template>
  <eva-collapse
    v-model="active"
    class="mobile-nav"
  >
    <eva-collapse-item
      class="mobile-nav__item"
      :title="group.groupName"
      :name="group.groupName"
    >
      <eva-cell
        v-if="!navItem.disabled"
        v-for="(navItem, index) in group.list"
        :key="index"
        :to="'/' + base + navItem.path"
        :title="navItem.title"
        is-link
      />
    </eva-collapse-item>
  </eva-collapse>
</template>

<script>
export default {
  props: {
    base: String,
    group: Object
  },

  data() {
    return {
      active: []
    };
  }
};
</script>

<style lang="less">
.mobile-nav {
  &__item {
    margin-bottom: 20px;
  }

  &::after {
    display: none;
  }

  .eva-collapse-item__content {
    padding: 0;
  }

  .eva-collapse-item__title {
    font-size: 16px;
    line-height: 36px;
    align-items: center;
  }
}
</style>
