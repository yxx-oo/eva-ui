<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 14:26:02
 * @LastEditTime: 2019-08-30 16:03:04
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <eva-button type="default" @click="checke" @touchstart="onTouchstart">{{ $t('default') }}</eva-button>
        <eva-button type="primary">{{ $t('primary') }}</eva-button>
        <eva-button type="gradient">{{ $t('gradient') }}</eva-button>
      </div>
      <!-- <eva-button type="danger">{{ $t('danger') }}</eva-button>
      <eva-button type="warning">{{ $t('warning') }}</eva-button> -->
    </demo-block>

    <demo-block :title="$t('plain')">
      <eva-button
        plain
        type="primary"
        :text="$t('plain')"
      />
    </demo-block>

    <demo-block :title="$t('hairline')">
      <eva-button
        plain
        hairline
        type="primary"
        :text="$t('hairlineButton')"
      />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <eva-button
        disabled
        type="primary"
        :text="$t('disabled')"
      />
      <eva-button
        disabled
        plain
        hairline
        type="primary"
        :text="$t('disabled')"
      />
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <div class="demo-button-row">
        <eva-button
          loading
          type="primary"
        />
        <eva-button
          loading
          type="primary"
          loading-type="spinner"
        />
        <eva-button
          loading
          :loadingText="$t('loadingText')"
          type="primary"
        />
      </div>
      <eva-button
        loading
        plain
        hairline
        type="primary"
      />
      <eva-button
        loading
        plain
        hairline
        type="primary"
        loading-type="spinner"
      />
      <eva-button
        loading
        plain
        hairline
        :loadingText="$t('loadingText')"
        type="primary"
      />
    </demo-block>

    <demo-block :title="$t('shape')">
      <eva-button
        type="primary"
        square
        :text="$t('square')"
      />
      <eva-button
        type="primary"
        round
        :text="$t('round')"
      />
    </demo-block>

    <!-- <demo-block :title="$t('icon')">
      <eva-button
        type="primary"
        icon="star-o"
      />
      <eva-button
        type="primary"
        icon="star-o"
        :text="$t('button')"
      />
      <eva-button
        plain
        type="primary"
        icon="https://img.yzcdn.cn/vant/logo.png"
        :text="$t('button')"
      />
    </demo-block> -->

    <demo-block :title="$t('size')">
      <eva-button
        type="primary"
        size="large"
      >
        {{ $t('large') }}
      </eva-button>
      <eva-button
        type="primary"
        size="normal"
      >
        {{ $t('normal') }}
      </eva-button>
      <eva-button
        type="primary"
        size="small"
      >
        {{ $t('small') }}
      </eva-button>
      <eva-button
        type="primary"
        size="mini"
      >
        {{ $t('mini') }}
      </eva-button>
    </demo-block>

    <!-- <demo-block :title="$t('router')">
      <eva-button
        :text="$t('urlRoute')"
        type="primary"
        url="//youzan.github.io/vant/mobile.html"
      />
      <eva-button
        :text="$t('vueRoute')"
        type="primary"
        to="index"
      />
    </demo-block> -->
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      gradient: '渐变色',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆角按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转'
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      gradient: 'Gradient',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router'
    }
  },

  methods: {
    checke() {
      console.log('点击按钮');
      
    },
    onTouchstart() {
      console.log('点击开始');
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-button {
  .eva-button {
    &--large {
      margin-bottom: @padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md;
    }
  }

  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: @padding-sm;
  }
}
</style>
