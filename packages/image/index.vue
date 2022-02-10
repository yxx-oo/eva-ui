<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:53:00
 * @LastEditTime: 2019-08-28 15:52:09
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="b({ round })" :style="style" @click="onClick" >
    <img v-if="lazyLoad" v-lazy="src" :class="b('img')" :attrs="attrs" :style="styleImg"/>
    <img v-else :src="src" @load="onLoad" @error="onError" :class="b('img')" :attrs="attrs" :style="styleImg"/>
    <div v-if="loading && showLoading" :class="b('loading')">
      <slot name="loading"><Icon name="photo-o" size="22" /></slot> 
    </div>
    <div v-if="error && showError" :class="b('error')">
      <slot name="error"><Icon name="warning-o" size="22" /></slot> 
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import { isDef, addUnit } from '../utils';
import Icon from '../icon';

export default create({
  name: 'image',

  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      loading: true,
      error: false,
      attrs:{
        alt: this.alt,
      },
      styleImg: {
        objectFit: this.fit
      }
    };
  },

  watch: {
    src() {
      this.loading = true;
      this.error = false;
    }
  },

  computed: {
      
    style() {
      const style = {};
      
      if (isDef(this.width)) {
        style.width = addUnit(this.width);
      }

      if (isDef(this.height)) {
        style.height = addUnit(this.height);
      }
    
      return style;
    }
  },

  created() {
    const { $Lazyload } = this;
    
    if ($Lazyload) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },

  beforeDestroy() {
    const { $Lazyload } = this;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },

  methods: {
      
    onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },

    onLazyLoaded({ el }) {
      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },

    onLazyLoadError({ el }) {
      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },

    onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },

    onClick(event) {
      this.$emit('click', event);
    },

  },
  
});
</script>
