(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{135:function(t,n,o){"use strict";o.r(n);var e={i18n:{"zh-CN":{alert1:"提示弹窗",alert2:"提示弹窗（无标题）",confirm:"确认弹窗",asyncClose:"异步关闭",componentCall:"组件调用",content:"代码是写出来给人看的，附带能在机器上运行"},"en-US":{alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",asyncClose:"Async Close",componentCall:"Component Call"}},data:function(){return{show:!1,currentRate:0,image:"https://yxx-oo.github.io/eva-ui/distasserts/scenery1.jpg"}},methods:{onClickAlert:function(){this.$dialog.alert({title:this.$t("title"),message:this.$t("content")})},onClickAlert2:function(){this.$dialog.alert({message:this.$t("content")})},onClickConfirm:function(){this.$dialog.confirm({title:this.$t("title"),message:this.$t("content")})},onClickAsyncClose:function(){this.$dialog.confirm({title:this.$t("title"),message:this.$t("content"),beforeClose:function(t,n){"confirm"===t?setTimeout(n,1e3):n()}})}}},i=(o(93),o(0)),l=Object(i.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("demo-section",[o("demo-block",{attrs:{title:t.$t("alert1")}},[o("eva-button",{attrs:{type:"primary"},on:{click:t.onClickAlert}},[t._v("\n      "+t._s(t.$t("alert1"))+"\n    ")]),o("eva-button",{attrs:{type:"primary"},on:{click:t.onClickAlert2}},[t._v("\n      "+t._s(t.$t("alert2"))+"\n    ")])],1),o("demo-block",{attrs:{title:t.$t("confirm")}},[o("eva-button",{attrs:{type:"primary"},on:{click:t.onClickConfirm}},[t._v("\n      "+t._s(t.$t("confirm"))+"\n    ")])],1),o("demo-block",{attrs:{title:t.$t("asyncClose")}},[o("eva-button",{attrs:{type:"primary"},on:{click:t.onClickAsyncClose}},[t._v("\n      "+t._s(t.$t("asyncClose"))+"\n    ")])],1),o("demo-block",{attrs:{title:t.$t("componentCall")}},[o("eva-button",{attrs:{type:"primary"},on:{click:function(n){t.show=!0}}},[t._v("\n      "+t._s(t.$t("componentCall"))+"\n    ")]),o("eva-dialog",{attrs:{title:t.$t("title"),"show-cancel-button":"","lazy-render":!1},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[o("img",{attrs:{src:t.image}})])],1)],1)},[],!1,null,null,null);n.default=l.exports},65:function(t,n,o){var e=o(94);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(24)(e,i);e.locals&&(t.exports=e.locals)},93:function(t,n,o){"use strict";var e=o(65);o.n(e).a},94:function(t,n,o){(t.exports=o(23)(!1)).push([t.i,".demo-dialog {\n  background-color: #fff;\n}\n.demo-dialog .van-doc-demo-block > .eva-button {\n  margin-left: 16px;\n}\n.demo-dialog img {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 25px 20px 0;\n}\n",""])}}]);