<!--
 * @Description: In User Settings Edit
 * @Author: yuxiaoxiao
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-12 18:50:22
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="b()">
    <div :class="b('wrapper')">
      <template v-if="previewImage">
        <template v-for="(item,index) in fileList">
          <div :class="b('preview')" :key="index">
            <eva-image
              v-if="isImageFile(item)"
              fit="cover"
              :src="item.content || item.url"
              :class="b('preview-image')"
              :width="previewSize"
              :height="previewSize"
              @click="onPreviewImage(item)"
            />
            <div v-else :class="b('file')" :style="style">
              <eva-icon :class="b('file-icon')" name="description" />
              <div :class="[b('file-name'),'eva-ellipsis']">
                {{ item.file ? item.file.name : item.url }}
              </div>
            </div>
            <eva-icon name="delete" :class="b('preview-delete')" @click="onDelete(item, index)" />
          </div>
        </template>
      </template>
      <template v-if="maxCount >= fileList.length">
        <div v-if="$slots.default" :class="b('input-wrapper')">
          <slot />
          <input ref="input" :multiple="multiple" type="file" :accept="accept" :class="b('input')" :disabled="disabled" @change="onChange">
        </div>
        <div v-else :class="b('upload')" :style="style">
          <eva-icon name="plus" :class="b('upload-icon')" />
          <span v-if="uploadText" :class="b('upload-text')">
            {{ uploadText }}
          </span>
          <input ref="input" :multiple="multiple" type="file" :accept="accept" :class="b('input')" :disabled="disabled" @change="onChange">
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import Utils from './utils';
import { addUnit } from '../utils';
import lrz from 'lrz';
import ImagePreview from '../image-preview';

export default create({
  name: 'uploader',

  inheritAttrs: false,
  mixins: [Utils],
  model: {
    prop: 'fileList'
  },

  props: {
    disabled: Boolean,
    uploadText: String,
    previewSize: [Number, String],
    afterRead: Function,
    beforeRead: Function,
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: () => []
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: Number,
      default: Number.MAX_VALUE
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    quality: {
      type: Number,
    },
    qualityWidth: {
      type: Number,
      default: 800
    }
  },

  computed: {
    detail() {
      return {
        name: this.name,
      };
    },

    previewSizeWithUnit() {
      return addUnit(this.previewSize);
    },

    style() {
      let style = {};
      if (this.previewSize) {
        const size = this.previewSizeWithUnit;
        style = {
          width: size,
          height: size,
        };
      }
      return style;
    }
  },
  methods: {
    onChange(event) {
      let { files } = event.target;
      if (this.disabled || !files.length) {
        return;
      }
      files = files.length === 1 ? files[0] : [].slice.call(files);
      if (this.beforeRead) {
        const response = this.beforeRead(files, this.detail);
        if (!response) {
          this.resetInput();
          return;
        }
        if (response.then) {
          response
            .then(() => {
              this.readFiled(files);
            })
            .catch(this.resetInput);
          return;
        }
      }
      this.readFiled(files);
    },

    readFiled(files) {
      const oversize = this.isOversize(files, this.maxSize);
      if (Array.isArray(files)) {
        const maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(file => this.readFile(file, this.resultType))).then(contents => {
          const fileList = files.map((file, index) => ({
            file,
            content: contents[index]
          }));

          this.onAfterRead(fileList, oversize);
        });
      } else {
        this.readFile(files, this.resultType).then(content => {
          this.onAfterRead({ file: files, content }, oversize);
        });
      }
    },

    onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files, this.detail);
        return;
      }
      this.resetInput();
      this.$emit('input', [...this.fileList, ...this.toArray(files)]);

      if (this.afterRead) {
        // todo
        if (Array.isArray(files)) {
          const { qualityWidth, quality } = this;
          console.log(files);
          Promise.all(files.map(file => lrz(file.content, { qualityWidth, quality }))).then((contents) => {
            console.log(contents);
            this.afterRead(contents, this.detail);
          }).catch(function(error) { // 失败时执行
            console.log('图片压缩失败' + error);
            this.afterRead(files, this.detail);
          });
        } else {
          console.log(files);
          lrz(files.content, this.qualityWidth, this.quality).then((res) => {
            this.afterRead({ ...files, base64: res.base64 }, this.detail);
          });
        }
      }
    },

    onDelete(file, index) {
      const fileList = this.fileList.slice(0);
      fileList.splice(index, 1);
      this.$emit('input', fileList);
      this.$emit('delete', file, index);
    },

    resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },

    onPreviewImage(item) {
      const imageFiles = this.fileList
        .filter(item => this.isImageFile(item))
        .map(item => item.content || item.url);

      ImagePreview({
        images: imageFiles,
        startPosition: imageFiles.indexOf(item.content || item.url)
      });
    },
  }
});
</script>
