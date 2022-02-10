<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 11:38:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-notice-bar
        :text="$t('text')"
        left-icon="volume-o"
      />
    </demo-block>

    <demo-block :title="$t('title2')">
      <eva-notice-bar
        :scrollable="false"
        :text="$t('text')"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <eva-notice-bar
        mode="closeable"
        :text="$t('text')"
      />
      <eva-notice-bar
        mode="link"
        :text="$t('text')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '禁用滚动',
      title3: '通告栏模式',
      text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。'
    },
    'en-US': {
      title2: 'Disable scroll',
      title3: 'Mode',
      text: 'Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.'
    }
  }
};
</script>

<style lang="less">
.demo-notice-bar {
  .eva-notice-bar:not(:first-of-type) {
    margin-top: 15px;
  }
}
</style>
