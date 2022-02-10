<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 17:12:45
 * @LastEditTime: 2019-09-05 11:49:30
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-row>
        <eva-image
          width="100"
          height="100"
          :src="image"
        />
      </eva-row>
    </demo-block>

    <demo-block :title="$t('fitMode')">
      <eva-row gutter="20">
        <eva-col
          v-for="fit in fits"
          span="8"
          :key="fit"
        >
          <eva-image
            :fit="fit"
            width="100%"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </eva-col>
      </eva-row>
    </demo-block>

    <demo-block :title="$t('round')">
      <eva-row gutter="20">
        <eva-col
          v-for="fit in fits"
          span="8"
          :key="fit"
        >
          <eva-image
            round
            :fit="fit"
            width="100%"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </eva-col>
      </eva-row>
    </demo-block>

    <demo-block :title="$t('loading')">
      <eva-row gutter="20">
        <eva-col span="8">
          <eva-image
            width="100%"
            height="27vw"
          />
          <div class="text">{{ $t('defaultTip') }}</div>
        </eva-col>

        <eva-col span="8">
          <eva-image
            width="100%"
            height="27vw"
          >
            <template #loading>
              <eva-loading
                type="spinner"
                size="20"
              />
            </template>
          </eva-image>
          <div class="text">{{ $t('customTip') }}</div>
        </eva-col>
      </eva-row>
    </demo-block>

    <demo-block :title="$t('error')">
      <eva-row gutter="20">
        <eva-col span="8">
          <eva-image
            width="100%"
            height="27vw"
            src="x"
          />
          <div class="text">{{ $t('defaultTip') }}</div>
        </eva-col>

        <eva-col span="8">
          <eva-image
            width="100%"
            height="27vw"
            src="x"
          >
            <template #error>{{ $t('loadFail') }}</template>
          </eva-image>
          <div class="text">{{ $t('customTip') }}</div>
        </eva-col>
      </eva-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      fitMode: '填充模式',
      round: '圆形图片',
      loading: '加载中提示',
      error: '加载失败提示',
      defaultTip: '默认提示',
      customTip: '自定义提示',
      loadFail: '加载失败'
    },
    'en-US': {
      fitMode: 'Fit Mode',
      round: 'Round',
      loading: 'Loading',
      error: 'Error',
      defaultTip: 'Default Tip',
      customTip: 'Custom Tip',
      loadFail: 'Load failed'
    }
  },

  data() {
    return {
      image: (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery1.jpg',
      fits: ['contain', 'cover', 'fill', 'none', 'scale-down']
    };
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-image {
  overflow-x: hidden;
  background-color: @white;

  .eva-row {
    padding: 0 @padding-md;
  }

  .eva-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: @gray-darker;
    font-size: 14px;
    text-align: center;
  }
}
</style>
