<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 10:12:31
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-tabs v-model="active">
        <eva-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </eva-tab>
      </eva-tabs>
    </demo-block>

    <demo-block :title="$t('title2')">
      <eva-tabs @scroll="onScroll">
        <eva-tab
          v-for="index in 8"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </eva-tab>
      </eva-tabs>
    </demo-block>

    <demo-block :title="$t('title3')">
      <eva-tabs @disabled="onClickDisabled">
        <eva-tab
          v-for="index in 3"
          :title="$t('tab') + index"
          :disabled="index === 2"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </eva-tab>
      </eva-tabs>
    </demo-block>

    <demo-block :title="$t('title4')">
      <eva-tabs type="card">
        <eva-tab
          v-for="index in 3"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </eva-tab>
      </eva-tabs>
    </demo-block>

    <demo-block :title="$t('title5')">
      <eva-tabs @click="onClick">
        <eva-tab
          v-for="index in 2"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </eva-tab>
      </eva-tabs>
    </demo-block>

    <demo-block :title="$t('title6')">
      <eva-tabs
        :active="active"
        sticky
      >
        <eva-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </eva-tab>
      </eva-tabs>
    </demo-block>

    <demo-block :title="$t('title7')">
      <eva-tabs :active="active">
        <eva-tab
          v-for="index in 2"
          :key="index"
        >
          <div slot="title">
            <eva-icon name="more-o" />{{ $t('tab') }}
          </div>
          {{ $t('content') }} {{ index }}
        </eva-tab>
      </eva-tabs>
    </demo-block>

    <demo-block :title="$t('title8')">
      <eva-tabs
        animated
      >
        <eva-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </eva-tab>
      </eva-tabs>
    </demo-block>

    <demo-block :title="$t('title9')">
      <eva-tabs
        :active="active"
        swipeable
      >
        <eva-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </eva-tab>
      </eva-tabs>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '标签 ',
      title2: '横向滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '切换动画',
      title9: '滑动切换',
      disabled: ' 已被禁用'
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Switch Animation',
      title9: 'Swipeable',
      disabled: ' is disabled'
    }
  },

  data() {
    return {
      active: 2,
      tabs: [1, 2, 3, 4]
    };
  },

  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.$t('disabled'));
    },

    onClick(index, title) {
      this.$toast(title);
    },

    onScroll(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tab {
  margin-bottom: 300px;

  .eva-tab .eva-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .eva-tab__pane {
    background-color: @white;
    padding: 20px;
  }

  .eva-tabs--card .eva-tab__pane {
    background-color: transparent;
  }

  .custom-tabwrap .eva-tab-active {
    color: #20a0ff;
  }

  .custom-tabwrap .eva-tabs-nav-bar {
    background: #20a0ff;
  }

  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  .eva-doc-demo-block:last-child {
    .eva-tab__pane {
      padding: 50px 20px;
    }
  }
}
</style>
