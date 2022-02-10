<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:53:06
 * @LastEditTime: 2019-09-03 13:51:27
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-collapse v-model="active1">
        <eva-collapse-item :title="$t('title1')">{{ $t('content1') }}</eva-collapse-item>
        <eva-collapse-item :title="$t('title2')">{{ $t('content2') }}</eva-collapse-item>
        <eva-collapse-item
          :title="$t('title3')"
          disabled
        >
          {{ $t('content3') }}
        </eva-collapse-item>
      </eva-collapse>
    </demo-block>

    <demo-block :title="$t('accordion')">
      <eva-collapse
        v-model="active2"
        accordion
      >
        <eva-collapse-item :title="$t('title1')">{{ $t('content1') }}</eva-collapse-item>
        <eva-collapse-item :title="$t('title2')">{{ $t('content2') }}</eva-collapse-item>
        <eva-collapse-item :title="$t('title3')">{{ $t('content3') }}</eva-collapse-item>
      </eva-collapse>
    </demo-block>

    <demo-block :title="$t('titleSlot')">
      <eva-collapse v-model="active3">
        <eva-collapse-item>
          <div slot="title">{{ $t('title1') }}<eva-icon name="question-o" /></div>
          {{ $t('content1') }}
        </eva-collapse-item>
        <eva-collapse-item
          :title="$t('title2')"
          :value="$t('content')"
          icon="shop-o"
        >
          {{ $t('content2') }}
        </eva-collapse-item>
      </eva-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      accordion: '手风琴',
      titleSlot: '自定义标题内容',
      title1: '伊娃名称由来',
      title2: '伊娃简介',
      title3: '伊娃的构成',
      content1: '机器总动员里面的机器人Eva',
      content2: 'vue组件库，还处于优化迭代阶段',
      content3: 'pc的后管文档和依赖组件'
    },
    'en-US': {
      accordion: 'Accordion',
      titleSlot: 'Custom title',
      title1: 'Title1',
      title2: 'Title2',
      title3: 'Title3',
      content1: 'Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.',
      content2: 'When someone walk out your life, let them. They are just making more room for someone else better to walk in.',
      content3: 'The world is big and life is short. Live the life the way you want.'
    }
  },

  data() {
    return {
      active1: [0],
      active2: 0,
      active3: []
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-collapse {
  .van-icon-question-o {
    color: @blue;
    vertical-align: -3px;
    margin-left: 5px;
    font-size: 15px;
  }
}
</style>
