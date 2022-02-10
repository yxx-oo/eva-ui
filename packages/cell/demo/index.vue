<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 18:42:17
 * @LastEditTime: 2019-08-30 17:11:15
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-cell-group>
        <eva-cell
          :title="$t('cell')"
          :value="$t('content')"
        />
        <eva-cell
          :title="$t('cell')"
          :value="$t('content')"
          :label="$t('desc')"
        />
      </eva-cell-group>
    </demo-block>

    <demo-block :title="$t('largeSize')">
      <eva-cell
        :title="$t('cell')"
        :value="$t('content')"
        size="large"
      />
      <eva-cell
        :title="$t('cell')"
        :value="$t('content')"
        size="large"
        :label="$t('desc')"
      />
    </demo-block>

    <demo-block :title="$t('showIcon')">
      <eva-cell
        :title="$t('cell')"
        :value="$t('content')"
        icon="location-o"
      />
    </demo-block>

    <demo-block :title="$t('valueOnly')">
      <eva-cell :value="$t('content')" />
    </demo-block>

    <demo-block :title="$t('showArrow')">
      <eva-cell
        :title="$t('cell')"
        is-link
      />
      <eva-cell
        :title="$t('cell')"
        is-link
        :value="$t('content')"
      />
      <eva-cell
        :title="$t('cell')"
        is-link
        arrow-direction="down"
        :value="$t('content')"
      />
    </demo-block>

    <demo-block :title="$t('router')">
      <eva-cell
        :title="$t('urlRoute')"
        is-link
        url="//youzan.github.io/vant/mobile.html"
      />
      <eva-cell
        :title="$t('vueRoute')"
        is-link
        to="index"
      />
    </demo-block>

    <demo-block :title="$t('groupTitle')">
      <eva-cell-group :title="`${$t('group')} 1`">
        <eva-cell
          :title="$t('cell')"
          :value="$t('content')"
        />
      </eva-cell-group>
      <eva-cell-group :title="`${$t('group')} 2`">
        <eva-cell
          :title="$t('cell')"
          :value="$t('content')"
        />
      </eva-cell-group>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <eva-cell
        :value="$t('content')"
        is-link
      >
        <template #title>
          <span class="custom-title">{{ $t('cell') }}</span>
          <eva-tag type="danger">{{ $t('tag') }}</eva-tag>
        </template>
      </eva-cell>
      <eva-cell
        icon="shop-o"
        :title="$t('cell')"
      >
        <template #right-icon>
          <eva-icon
            name="search"
            style="line-height: inherit;"
          />
        </template>
      </eva-cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转'
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router'
    }
  }
};
</script>

<style lang="less">
.demo-cell {
  .custom-title {
    margin-right: 5px;
    vertical-align: middle;
  }
}
</style>
