<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 12:05:41
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section name="pull-refresh">
    <eva-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <demo-block :title="$t('basicUsage')">
        <p>{{ $t('text') }}: {{ count }}</p>
      </demo-block>
    </eva-pull-refresh>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '刷新次数',
      success: '刷新成功'
    },
    'en-US': {
      text: 'Refresh Count',
      success: 'Refresh success'
    }
  },

  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast(this.$t('success'));
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>

<style lang="less">
.demo-pull-refresh {
  .eva-pull-refresh {
    &,
    &__track {
      height: calc(100vh - 50px);
    }
  }

  p {
    margin: 10px 0 0 15px;
  }
}
</style>
