(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{462:function(t,a,i){"use strict";i.r(a);var s=i(18),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("今天来跟大家介绍一下 "),i("code",[t._v("CSS")]),t._v(" 隐藏元素的多种方法，虽然都是隐藏元素，但这些方法也都有着微小的区别，那么我们就来看一下究竟有哪些方法吧。")]),t._v(" "),i("h2",{attrs:{id:"准备工作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),i("p",[t._v("在正式介绍这些方法之前，我们先来准备一下 "),i("code",[t._v("DOM")]),t._v(" 结构和基本样式")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('<div class="hide"></div>\n.hide {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n}\n')])])]),i("p",[t._v("我们定义了一个 200*200 背景颜色为红色的 "),i("code",[t._v("div")]),t._v(",在浏览器上查看其结构如下图所示：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlO8pqDgibpWUV1tEzIkLtIqyuwP8Tw6cQo4TY4b33TDWhxtqBcQzwzh5w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),i("blockquote",[i("p",[t._v("接下来我们就在这个基础结构中介绍隐藏元素的多种方法")])]),t._v(" "),i("h2",{attrs:{id:"display-none"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#display-none"}},[t._v("#")]),t._v(" display: none")]),t._v(" "),i("p",[t._v("第一种，使用 "),i("code",[t._v("display: none;")]),t._v(",经典的 "),i("code",[t._v("display")]),t._v(" 隐藏元素,这个是彻底的隐藏了元素，不占据空间，也就不影响布局,元素脱离了标准流。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(".hide {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  display: none;\n}\n")])])]),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlOp35a2YQmRYMcjoSzwiaefJ4e0oZHC7iciaFESW0V4oj4ic0PLleCRlbjkg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),i("blockquote",[i("p",[t._v("可以看到，鼠标放到 "),i("code",[t._v("DOM")]),t._v(" 元素上的时候，元素已经完全隐藏了，并且不占据任何空间。")])]),t._v(" "),i("h2",{attrs:{id:"visibility-hidden"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#visibility-hidden"}},[t._v("#")]),t._v(" visibility: hidden")]),t._v(" "),i("p",[t._v("第二种，使用 "),i("code",[t._v("visibility: hidden;")]),t._v(",这种方式被隐藏的元素依然会对我们的网页布局起作用，就是元素没有脱离标准流。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(".hide {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  visibility: hidden;\n}\n")])])]),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlOBxq9FnU38icL0vYFVicVCr8s1B1zPnsz5bE8koUibDbOSEJamsLEcylxg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),i("blockquote",[i("p",[t._v("可以看到，鼠标放到 "),i("code",[t._v("DOM")]),t._v(" 元素上的时候，虽然元素已经被隐藏了，但元素依然占据这空间。")])]),t._v(" "),i("h2",{attrs:{id:"opacity"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#opacity"}},[t._v("#")]),t._v(" opacity")]),t._v(" "),i("p",[t._v("第三种，使用 "),i("code",[t._v("opacity: 0;")]),t._v(",这种方式就是改变元素的透明度，从而实现元素的隐藏效果，所以这种方式被隐藏的元素依然会对我们的网页布局起作用，就是元素没有脱离标准流。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(".hide {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  opacity: 0;\n}\n")])])]),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlOBxq9FnU38icL0vYFVicVCr8s1B1zPnsz5bE8koUibDbOSEJamsLEcylxg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),i("blockquote",[i("p",[t._v("结果同 "),i("code",[t._v("visibility")])])]),t._v(" "),i("h2",{attrs:{id:"position"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" position")]),t._v(" "),i("p",[t._v("第四种，使用 "),i("code",[t._v("position: absolute;")]),t._v(", 这种方法的原理就是将元素移出屏幕外，从而达到了不可见的效果。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(".hide {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  position: absolute;\n  left: -2000px;\n  top: -2000px;\n}\n")])])]),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlOZJsxKKle5efTEiaSnVYP5etz7tichMdySXBGmoIrUsWTAap0czCiakTDQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),i("blockquote",[i("p",[t._v("移出屏幕外，虽然还占用着空间，但是占据的位置确是无关紧要的了。")])]),t._v(" "),i("h2",{attrs:{id:"clip-path-polygon"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#clip-path-polygon"}},[t._v("#")]),t._v(" clip-path: polygon()")]),t._v(" "),i("p",[t._v("第五种， 使用 "),i("code",[t._v("clip-path: polygon()")]),t._v(",这种方法的原理就是对与元素进行裁剪，参数全部都给 0，这样就裁剪出来了一个 0*0 的形状，其实也就是变向隐藏了元素。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(".hide {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);\n}\n")])])]),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlOBxq9FnU38icL0vYFVicVCr8s1B1zPnsz5bE8koUibDbOSEJamsLEcylxg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),i("blockquote",[i("p",[t._v("虽然裁剪出来的是 0*0 的大小，但是元素本身大小还是不变的。")])]),t._v(" "),i("h2",{attrs:{id:"transform"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#transform"}},[t._v("#")]),t._v(" transform")]),t._v(" "),i("p",[t._v("第六种， 使用 "),i("code",[t._v("transform: scale(0);")]),t._v(",这种方法的原理就是对元素进行缩放，参数给 0，也相当于隐藏了元素。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(".hide {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  transform: scale(0);\n}\n")])])]),i("p",[i("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlO1dPCcX2gQudL68p7Cbq9N1fbybNChria2T1rC23t8k0rvPvVia3AmF7g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),i("blockquote",[i("p",[t._v("因为缩放是从四周到中间进行缩放，所以元素最后缩放后的位置在元素正中间。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);