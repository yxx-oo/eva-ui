<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-22 15:32:48
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
     <demo-block :title="$t('type')">
      <eva-loading />
      <eva-loading type="spinner" />
    </demo-block>

    <demo-block :title="$t('color')">
      <eva-loading color="#1989fa" />
      <eva-loading
        type="spinner"
        color="#1989fa"
      />
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('text')"
    >
      <eva-loading 
        size="24px" 
        :text="$t('loading')"
      />
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('vertical')"
    >
      <eva-loading
        size="24px"
        vertical
        :text="$t('loading')"
      />
    </demo-block>
    
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: 'Circular',
      title2: 'Spinner',
      type: '加载类型',
      color: '自定义颜色',
      text: '加载文案',
      vertical: '垂直排列'
    },
    'en-US': {
      title1: 'Circular',
      title2: 'Spinner',
      type: 'Type',
      color: 'Color',
      text: 'Text',
      vertical: 'Vertical'
    }
  }
};
</script>

<style lang="less">
.demo-loading {
  .eva-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
