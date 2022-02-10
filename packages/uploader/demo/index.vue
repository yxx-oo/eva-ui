<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 14:07:55
 * @LastEditTime: 2019-09-04 15:40:19
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-uploader :after-read="afterRead" />
    </demo-block>

    <demo-block :title="$t('preview')">
      <eva-uploader
        v-model="fileList"
        multiple
        accept="*"
        :after-read="afterRead"
      />
    </demo-block>

    <demo-block :title="$t('maxCount')">
      <eva-uploader
        v-model="fileList2"
        multiple
        :max-count="2"
      />
    </demo-block>

    <demo-block :title="$t('uploadStyle')">
      <eva-uploader>
        <eva-button
          type="primary"
          icon="photo"
        >
          {{ this.$t('upload') }}
        </eva-button>
      </eva-uploader>
    </demo-block>

    <demo-block :title="$t('beforeRead')">
      <eva-uploader
        v-model="fileList3"
        :before-read="beforeRead"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      upload: '上传文件',
      preview: '文件预览',
      maxCount: '限制上传数量',
      beforeRead: '上传前校验',
      uploadStyle: '自定义上传样式',
      invalidType: '请上传 jpg 格式图片'
    },
    'en-US': {
      upload: 'Upload File',
      preview: 'Preview File',
      maxCount: 'Max Count',
      beforeRead: 'Before Read',
      uploadStyle: 'Upload Style',
      invalidType: 'Please upload an image in jpg format'
    }
  },

  data() {
    return {
      fileList: [{ url: (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery1.jpg' }],
      fileList2: [],
      fileList3: []
    };
  },

  methods: {
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        this.$toast(this.$t('invalidType'));
        return false;
      }
      return true;
    },

    afterRead(file) {
      console.log('*************************************');
      console.log(file);
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-uploader {
  background-color: @white;

  .eva-uploader {
    margin-left: @padding-md;
  }
}
</style>
