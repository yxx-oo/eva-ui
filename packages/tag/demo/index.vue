<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 16:22:01
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-tag>{{ $t('tag') }}</eva-tag>
      <eva-tag type="danger">{{ $t('tag') }}</eva-tag>
      <eva-tag type="primary">{{ $t('tag') }}</eva-tag>
      <eva-tag type="success">{{ $t('tag') }}</eva-tag>
    </demo-block>

    <demo-block :title="$t('plain')">
      <eva-tag plain>{{ $t('tag') }}</eva-tag>
      <eva-tag
        round
        plain
        type="danger"
      >
        {{ $t('tag') }}
      </eva-tag>
      <eva-tag
        round
        plain
        type="primary"
      >
        {{ $t('tag') }}
      </eva-tag>
      <eva-tag
        plain
        type="success"
      >
        {{ $t('tag') }}
      </eva-tag>
    </demo-block>

    <demo-block :title="$t('round')">
      <eva-tag round>{{ $t('tag') }}</eva-tag>
      <eva-tag
        round
        type="danger"
      >
        {{ $t('tag') }}
      </eva-tag>
      <eva-tag
        round
        type="primary"
      >
        {{ $t('tag') }}
      </eva-tag>
      <eva-tag
        round
        type="success"
      >
        {{ $t('tag') }}
      </eva-tag>
    </demo-block>

    <demo-block :title="$t('mark')">
      <eva-tag mark>{{ $t('tag') }}</eva-tag>
      <eva-tag
        mark
        type="danger"
      >
        {{ $t('tag') }}
      </eva-tag>
      <eva-tag
        mark
        type="primary"
      >
        {{ $t('tag') }}
      </eva-tag>
      <eva-tag
        mark
        type="success"
      >
        {{ $t('tag') }}
      </eva-tag>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <eva-tag color="#f2826a">{{ $t('tag') }}</eva-tag>
      <eva-tag
        color="#f2826a"
        plain
      >
        {{ $t('tag') }}
      </eva-tag>
      <eva-tag color="#7232dd">{{ $t('tag') }}</eva-tag>
      <eva-tag
        color="#7232dd"
        plain
      >
        {{ $t('tag') }}
      </eva-tag>
      <eva-tag
        color="#ffe1e1"
        text-color="#ad0000"
      >
        {{ $t('tag') }}
      </eva-tag>
    </demo-block>

    <demo-block :title="$t('customSize')">
      <eva-tag type="danger">{{ $t('tag') }}</eva-tag>
      <eva-tag
        type="danger"
        size="medium"
      >
        {{ $t('tag') }}
      </eva-tag>
      <eva-tag
        type="danger"
        size="large"
      >
        {{ $t('tag') }}
      </eva-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      customColor: '自定义颜色',
      customSize: '标签大小'
    },
    'en-US': {
      plain: 'Plain style',
      round: 'Round style',
      mark: 'Mark style',
      customColor: 'Custom Color',
      customSize: 'Custom Size'
    }
  }
};
</script>

<style lang="less">
.demo-tag {
  .eva-tag + .eva-tag {
    margin-left: 10px;
  }

  .eva-tag {
    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
