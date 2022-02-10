<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:52:31
 * @LastEditTime: 2019-09-02 18:48:13
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        :right-text="$t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <eva-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        left-arrow
      >
        <eva-icon
          name="search"
          slot="right"
        />
      </eva-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$toast(this.$t('back'));
    },
    onClickRight() {
      this.$toast(this.$t('button'));
    }
  }
};
</script>
