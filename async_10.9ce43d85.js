(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{102:function(t,n,e){"use strict";var o=e(69);e.n(o).a},103:function(t,n,e){(t.exports=e(23)(!1)).push([t.i,".demo-image-preview {\n  background-color: #fff;\n}\n.demo-image-preview .eva-button {\n  margin-left: 16px;\n}\n.eva-image-preview img {\n  -webkit-user-drag: none;\n}\n",""])},139:function(t,n,e){"use strict";e.r(n);var o=e(16),s=["http://10.59.98.187:8888/eva/asserts/scenery1.jpg","http://10.59.98.187:8888/eva/asserts/scenery2.jpg","http://10.59.98.187:8888/eva/asserts/scenery3.jpg","http://10.59.98.187:8888/eva/asserts/EVA.png"],a={i18n:{"zh-CN":{button1:"预览图片",button2:"指定初始位置",button3:"异步关闭",componentCall:"组件调用",index:function(t){return"第"+(t+1)+"页"}},"en-US":{button1:"Show Images",button2:"Custom Start Position",button3:"Async Close",componentCall:"Component Call",index:function(t){return"Page: "+t}}},data:function(){return{show:!1,images:s,index:0}},methods:{componentCall:function(){this.show=!0},onChange:function(t){this.index=t},showImagePreview:function(t,n){var e=Object(o.a)({images:s,swipeDuration:300,asyncClose:!!n,closeOnPopstate:!0,startPosition:"number"==typeof t?t:0});n&&setTimeout(function(){e.close()},n)}}},i=(e(102),e(0)),r=Object(i.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-section",[e("demo-block",{attrs:{title:t.$t("basicUsage")}},[e("eva-button",{attrs:{type:"primary"},on:{click:t.showImagePreview}},[t._v("\n      "+t._s(t.$t("button1"))+"\n    ")])],1),e("demo-block",{attrs:{title:t.$t("button2")}},[e("eva-button",{attrs:{type:"primary"},on:{click:function(n){return t.showImagePreview(1)}}},[t._v("\n      "+t._s(t.$t("button2"))+"\n    ")])],1),e("demo-block",{attrs:{title:t.$t("button3")}},[e("eva-button",{attrs:{type:"primary"},on:{click:function(n){return t.showImagePreview(0,1e3)}}},[t._v("\n      "+t._s(t.$t("button3"))+"\n    ")])],1),e("demo-block",{attrs:{title:t.$t("componentCall")}},[e("eva-button",{attrs:{type:"primary"},on:{click:t.componentCall}},[t._v("\n      "+t._s(t.$t("componentCall"))+"\n    ")]),e("eva-image-preview",{attrs:{images:t.images,"swipe-duration":300},on:{change:t.onChange},scopedSlots:t._u([{key:"index",fn:function(){return[t._v(t._s(t.$t("index",t.index)))]},proxy:!0}]),model:{value:t.show,callback:function(n){t.show=n},expression:"show"}})],1)],1)},[],!1,null,null,null);n.default=r.exports},69:function(t,n,e){var o=e(103);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(24)(o,s);o.locals&&(t.exports=o.locals)}}]);