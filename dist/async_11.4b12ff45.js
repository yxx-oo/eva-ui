(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(t,e,a){"use strict";var i=a(68);a.n(i).a},101:function(t,e,a){(t.exports=a(23)(!1)).push([t.i,".demo-image {\n  overflow-x: hidden;\n  background-color: #fff;\n}\n.demo-image .eva-row {\n  padding: 0 16px;\n}\n.demo-image .eva-col {\n  margin-bottom: 20px;\n}\n.demo-image .text {\n  margin-top: 5px;\n  color: #7d7e80;\n  font-size: 14px;\n  text-align: center;\n}\n",""])},138:function(t,e,a){"use strict";a.r(e);var i={i18n:{"zh-CN":{fitMode:"填充模式",round:"圆形图片",loading:"加载中提示",error:"加载失败提示",defaultTip:"默认提示",customTip:"自定义提示",loadFail:"加载失败"},"en-US":{fitMode:"Fit Mode",round:"Round",loading:"Loading",error:"Error",defaultTip:"Default Tip",customTip:"Custom Tip",loadFail:"Load failed"}},data:function(){return{image:"https://yxx-oo.github.io/eva-ui/distasserts/scenery1.jpg",fits:["contain","cover","fill","none","scale-down"]}}},o=(a(100),a(0)),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",[a("demo-block",{attrs:{title:t.$t("basicUsage")}},[a("eva-row",[a("eva-image",{attrs:{width:"100",height:"100",src:t.image}})],1)],1),a("demo-block",{attrs:{title:t.$t("fitMode")}},[a("eva-row",{attrs:{gutter:"20"}},t._l(t.fits,function(e){return a("eva-col",{key:e,attrs:{span:"8"}},[a("eva-image",{attrs:{fit:e,width:"100%",height:"27vw",src:t.image}}),a("div",{staticClass:"text"},[t._v(t._s(e))])],1)}),1)],1),a("demo-block",{attrs:{title:t.$t("round")}},[a("eva-row",{attrs:{gutter:"20"}},t._l(t.fits,function(e){return a("eva-col",{key:e,attrs:{span:"8"}},[a("eva-image",{attrs:{round:"",fit:e,width:"100%",height:"27vw",src:t.image}}),a("div",{staticClass:"text"},[t._v(t._s(e))])],1)}),1)],1),a("demo-block",{attrs:{title:t.$t("loading")}},[a("eva-row",{attrs:{gutter:"20"}},[a("eva-col",{attrs:{span:"8"}},[a("eva-image",{attrs:{width:"100%",height:"27vw"}}),a("div",{staticClass:"text"},[t._v(t._s(t.$t("defaultTip")))])],1),a("eva-col",{attrs:{span:"8"}},[a("eva-image",{attrs:{width:"100%",height:"27vw"},scopedSlots:t._u([{key:"loading",fn:function(){return[a("eva-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}])}),a("div",{staticClass:"text"},[t._v(t._s(t.$t("customTip")))])],1)],1)],1),a("demo-block",{attrs:{title:t.$t("error")}},[a("eva-row",{attrs:{gutter:"20"}},[a("eva-col",{attrs:{span:"8"}},[a("eva-image",{attrs:{width:"100%",height:"27vw",src:"x"}}),a("div",{staticClass:"text"},[t._v(t._s(t.$t("defaultTip")))])],1),a("eva-col",{attrs:{span:"8"}},[a("eva-image",{attrs:{width:"100%",height:"27vw",src:"x"},scopedSlots:t._u([{key:"error",fn:function(){return[t._v(t._s(t.$t("loadFail")))]},proxy:!0}])}),a("div",{staticClass:"text"},[t._v(t._s(t.$t("customTip")))])],1)],1)],1)],1)},[],!1,null,null,null);e.default=s.exports},68:function(t,e,a){var i=a(101);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(24)(i,o);i.locals&&(t.exports=i.locals)}}]);