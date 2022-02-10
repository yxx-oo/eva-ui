<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-26 21:01:46
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-button
        :text="$t('showNotify')"
        @click="showNotify"
      />
    </demo-block>

    <demo-block :title="$t('customConfig')">
      <eva-button
        :text="$t('showCustomNotify')"
        @click="showCustomNotify"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      content: '通知内容',
      customConfig: '自定义配置',
      showNotify: '显示消息通知',
      showCustomNotify: '显示自定义消息通知'
    },
    'en-US': {
      content: 'Notify Message',
      customConfig: 'Custom Config',
      showNotify: 'Show Notify',
      showCustomNotify: 'Show Custom Notify'
    }
  },

  methods: {
    showNotify() {
      this.$notify(this.$t('content'));
    },

    showCustomNotify() {
      this.$notify({
        message: this.$t('content'),
        duration: 1000,
        background: '#1989fa'
      });
    }
  }
};
</script>

<style lang="less">
.demo-notify {
  .eva-button {
    margin-left: 15px;
  }
}
</style>
