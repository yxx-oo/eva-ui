<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 14:26:02
 * @LastEditTime: 2019-09-11 17:51:11
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <eva-button type="primary" @click="checke">{{ $t('cropper') }}</eva-button>
      </div>
      <eva-cropper v-if="show" ref="cropper"
                    :img="option.img"
                    :outputSize="option.outputSize"
                    :outputType="option.outputType"
                    :info="option.info"
                    :canScale="option.canScale"
										:centerBox="option.centerBox"
										:fixedBox="option.fixedBox"
										:canMoveBox="option.canMoveBox"
                    :autoCrop="option.autoCrop"
                    @cancel="cancel"
                    @determine="determine"
                    :fixed="option.fixed"
                    :fixedNumber="option.fixedNumber"/>
    </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cropper: '图片剪裁',
    },
    'en-US': {
      cropper: 'Cropper',
    }
  },
  props: {
    
  },
  data(){
    return {
      option: {
        img: (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery4.jpg',//裁剪图片的地址
        info: true,                      //裁剪框的大小信息
        outputSize: 1,                   // 裁剪生成图片的质量
				outputType: 'jpeg',              //裁剪生成图片的格式
				canMoveBox: false,              //截图框能否拖动
				centerBox: true,                //截图框是否被限制在图片里面
				canScale: false,               // 图片是否允许滚轮缩放
				fixedBox: true,                // 固定截图框大小 不允许改变
        autoCrop: true,                  // 是否默认生成截图框
        // autoCropWidth: 150,              // 默认生成截图框宽度
        // autoCropHeight: 150,             // 默认生成截图框高度
        fixed: true,                    //是否开启截图框宽高固定比例
        fixedNumber: [5, 5]              //截图框的宽高比例
      },
      show: false,
    }
  },

  methods: {
    checke() {
      console.log('点击按钮');
      this.show = true;
    },
    cancel() {
      this.show = false;
    },
    determine(data) {
      console.log(data);
      this.show = false;
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

.van-doc-demo-block {
  padding: 0 @padding-md;
}

</style>
