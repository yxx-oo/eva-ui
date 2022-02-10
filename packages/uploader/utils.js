/*
 * @Description: In User Settings Edit
 * @Author: yuxiaoxiao
 * @Date: 2019-08-23 16:34:50
 * @LastEditTime: 2019-08-30 14:37:32
 * @LastEditors: Please set LastEditors
 */

const IMAGE_EXT = ['jpeg', 'jpg', 'gif', 'png', 'svg'];

import lrz from 'lrz/dist/lrz.all.bundle';

export default {
  methods: {
    toArray(item) {
      if (Array.isArray(item)) {
        return item;
      }
    
      return [item];
    },

    readFile(file,resultType) {
        
      return new Promise(resolve => {
        const reader = new FileReader();
    
        reader.onload = event => {
          resolve((event.target).result);
        };
    
        if (resultType === 'dataUrl') {
          reader.readAsDataURL(file);
        } else if (resultType === 'text') {
          reader.readAsText(file);
        }
      });
    },

    isOversize(files, maxSize) {
      return this.toArray(files).some(file => file.size > maxSize);
    },

    isImageUrl(url) {
      return IMAGE_EXT.some(ext => url.indexOf(`.${ext}`) !== -1);
    },
    
    isImageFile(item) {
      // some special urls cannot be recognized
      // user can add `isImage` flag to mark it as an image url
    
      if (item.isImage) {
        return true;
      }
    
      if (item.file && item.file.type) {
        return item.file.type.indexOf('image') === 0;
      }
    
      if (item.url) {
        return this.isImageUrl(item.url);
      }
    
      if (item.content) {
        return item.content.indexOf('data:image') === 0;
      }
    
    return false;
    }

  }
}
