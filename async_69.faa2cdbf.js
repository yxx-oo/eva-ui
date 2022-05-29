(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{174:function(t,C,E){"use strict";E.r(C);var s={created:function(){this.content=unescape("%3Ch2%20id%3D%22notify%22%3ENotify%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22install%22%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Notify%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Notify%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22usage%22%3EUsage%3C/h3%3E%0A%3Ch4%20id%3D%22basic-usage%22%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3ENotify%28%3Cspan%20class%3D%22hljs-string%22%3E%27Notify%20Message%27%3C/span%3E%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id%3D%22custom-config%22%3ECustom%20Config%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3ENotify%28%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emessage%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Notify%20Message%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eduration%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1000%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebackground%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%231989fa%27%3C/span%3E%0A%7D%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id%3D%22notify-method%22%3E%24notify%20Method%3C/h4%3E%0A%3Cp%3EAfter%20import%20the%20Notify%20component%2C%20the%20%24notify%20method%20is%20automatically%20mounted%20on%20Vue.prototype%2C%20making%20it%20easy%20to%20call%20within%20a%20vue%20component.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20mounted%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.%24notify%28%3Cspan%20class%3D%22hljs-string%22%3E%27Notify%20Message%27%3C/span%3E%29%3B%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22methods%22%3EMethods%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EMethods%3C/th%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EReturn%20value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3ENotify%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%20%7C%20message%3C/code%3E%3C/td%3E%0A%3Ctd%3Enotify%20instance%3C/td%3E%0A%3Ctd%3EShow%20notify%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3ENotify.clear%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3EClose%20notify%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3ENotify.setDefaultOptions%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3ESet%20default%20options%20of%20all%20notifies%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3ENotify.resetDefaultOptions%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3EReset%20default%20options%20of%20all%20notifies%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22api%22%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Emessage%3C/td%3E%0A%3Ctd%3EMessage%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eduration%3C/td%3E%0A%3Ctd%3EDuration%28ms%29%2C%20won%27t%20disappear%20if%20value%20is%200%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E3000%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecolor%3C/td%3E%0A%3Ctd%3EMessage%20color%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%23fff%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebackground%3C/td%3E%0A%3Ctd%3EBackground%20color%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%23f44%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")},mounted:function(){var t=this;[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5")).forEach(function(C){C.addEventListener("click",t.scrollToAnchor)})},methods:{scrollToAnchor:function(t){t.target.id&&this.$router.push({path:this.$route.path,hash:t.target.id})}}},e=E(0),d=Object(e.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement;return(this._self._c||t)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.default=d.exports}}]);