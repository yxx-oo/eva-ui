<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 16:07:09
 * @LastEditTime: 2019-08-22 17:09:41
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-button
        type="primary"
        :text="$t('showOverlay')"
        style="margin-left: 16px;"
        @click="show = true"
      />

      <eva-overlay
        :show="show"
        @click="show = false"
      >
        <eva-button
        type="primary"
        :text="$t('showOverlay')"
        @click="show = true"
      />
      </eva-overlay>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      showOverlay: '显示遮罩层'
    },
    'en-US': {
      showOverlay: 'Show Overlay'
    }
  },

  data() {
    return {
      show: false
    };
  }
};
</script>
