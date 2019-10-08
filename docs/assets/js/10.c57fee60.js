(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{195:function(t,n,a){"use strict";a.r(n);var s=a(0),o=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-原型-原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-原型-原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript 原型 & 原型链")]),t._v(" "),a("h2",{attrs:{id:"涉及到的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#涉及到的内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 涉及到的内容")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("prototype")])]),t._v(" "),a("li",[a("code",[t._v("__proto__")])]),t._v(" "),a("li",[a("code",[t._v("new")])]),t._v(" "),a("li",[a("code",[t._v("call()")]),t._v(" / "),a("code",[t._v("apply()")]),t._v(" / "),a("code",[t._v("bind()")])]),t._v(" "),a("li",[a("code",[t._v("this")])])]),t._v(" "),a("h2",{attrs:{id:"相关描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关描述")]),t._v(" "),a("p",[t._v("在其他的 "),a("strong",[t._v("面向对象编程")]),t._v(" 的语言中（如：Java），需要先进行 "),a("strong",[t._v("类")]),t._v(" 的定义，之后通过 类 创建的 "),a("strong",[t._v("实例")]),t._v(" 会把类上所定义的属性和方法都复制到实例上。而在 "),a("code",[t._v("JavaScript")]),t._v(" 中并不会进行复制，而是通过 "),a("code",[t._v("__proto__")]),t._v(" 属性与 "),a("code",[t._v("构造函数")]),t._v(" 进行关联（该属性来自于构造函数的构造器），直接使用构造函数中对应的属性和方法。")]),t._v(" "),a("ul",[a("li",[t._v("每个实例对象都有一个 "),a("strong",[t._v("原型对象")]),t._v("，实例对象会以该原型对象为模板，继承原型对象上的属性和方法。")]),t._v(" "),a("li",[t._v("原型对象 也可能是通过它的原型对象创建的，所以原型对象也能有自己的原型对象，这样一层一层的关系我们称之为 "),a("strong",[t._v("原型链")]),t._v("。")]),t._v(" "),a("li",[t._v("一个实例对象从原型对象上继承过来的 "),a("strong",[t._v("属性")]),t._v(" 和 "),a("strong",[t._v("方法")]),t._v(" 并不会挂载到自己本身，而是通过构造器函数上的 "),a("code",[t._v("prototype")]),t._v(" 链接到原型对象上。")])]),t._v(" "),a("p",[t._v("参考文档："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes",target:"_blank",rel:"noopener noreferrer"}},[t._v("对象原型"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"深入了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入了解","aria-hidden":"true"}},[t._v("#")]),t._v(" 深入了解")]),t._v(" "),a("ol",[a("li",[t._v("创建一个函数 "),a("code",[t._v("doSomething")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* =>\n{\n    constructor: ƒ doSomething(),  // => 该函数的构造器\n    __proto__: Object              // => 该函数继承的原型对象\n}\n*/")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("接下来给 "),a("code",[t._v("doSomething")]),t._v(" 添加一个 "),a("code",[t._v("foo")]),t._v(" 属性")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* =>\n{\n    foo: "bar",\n    constructor: ƒ doSomething(),\n    __proto__: {\n        constructor: ƒ Object(),\n        hasOwnProperty: ƒ hasOwnProperty(),\n        isPrototypeOf: ƒ isPrototypeOf(),\n        propertyIsEnumerable: ƒ propertyIsEnumerable(),\n        toLocaleString: ƒ toLocaleString(),\n        toString: ƒ toString(),\n        valueOf: ƒ valueOf()\n    }\n}\n*/')]),t._v("\n")])])]),a("ol",[a("li",[a("code",[t._v("new")]),t._v(" 出一个 "),a("code",[t._v("doSomething")]),t._v(" 的实例")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newDoSomething "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnewDoSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some value'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* => \n{\n    prop: "some value",\n    __proto__: {\n        foo: "bar",\n        constructor: ƒ doSomething(),\n        __proto__: {\n            constructor: ƒ Object(),\n            hasOwnProperty: ƒ hasOwnProperty(),\n            isPrototypeOf: ƒ isPrototypeOf(),\n            propertyIsEnumerable: ƒ propertyIsEnumerable(),\n            toLocaleString: ƒ toLocaleString(),\n            toString: ƒ toString(),\n            valueOf: ƒ valueOf()\n        }\n    }\n}\n*/')]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("我们发现 "),a("code",[t._v("newDoSomething.__proto__")]),t._v(" 与 "),a("code",[t._v("doSomething.prototype")]),t._v(" 相同")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("newDoSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n")])])]),a("p",[t._v("当我们尝试访问 "),a("code",[t._v("newDoSomething")]),t._v(" 上的属性或方法时，浏览器会先去 "),a("code",[t._v("newDoSomething")]),t._v(" 身上去找，如果不存在则去 "),a("code",[t._v("newDoSomething.__proto__")]),t._v("（即 "),a("code",[t._v("doSomething.prototype")]),t._v("） 中继续找该属性，如果 "),a("code",[t._v("newDoSomething.__proto__")]),t._v(" 中仍然没有找到，则继续向下一级的 "),a("code",[t._v("newDoSomething.__proto__.__proto__")]),t._v(" 中查找，如果还没有 则该属性为 "),a("code",[t._v("undefined")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ndoSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" doSomeInstancing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndoSomeInstancing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some value"')]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomeInstancing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => some value")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomeInstancing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => bar")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => undefined")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => undefined")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => undefined")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => bar")]),t._v("\n")])])]),a("p",[t._v("所以 "),a("code",[t._v("doSomeInstancing")]),t._v(" 上没有添加 "),a("code",[t._v("foo")]),t._v(" 属性，但仍然可以获取到 "),a("code",[t._v("doSomething.prototype")]),t._v(" 上的 "),a("code",[t._v("foo")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),a("p",[t._v("我们可以发现 "),a("code",[t._v("doSomething.__proto__")]),t._v(" 与 "),a("code",[t._v("Object.prototype")]),t._v(" 相同，说明 "),a("code",[t._v("doSomething")]),t._v(" 是继承自 "),a("code",[t._v("Object")]),t._v(" 的。那么 "),a("code",[t._v("Object")]),t._v(" 下还有其他的方法并没被继承过来，是因为 能够被实例继承的属性和方法只有"),a("code",[t._v("Object.prototype")]),t._v(" 开头的，像 "),a("code",[t._v("Object.keys()")]),t._v(" 等方法并不符合这个条件，他们是 "),a("code",[t._v("Object")]),t._v(" 构造器的自有属性和方法。")]),t._v(" "),a("h2",{attrs:{id:"修改原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改原型","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改原型")]),t._v(" "),a("p",[t._v("当我们修改了原型对象的构造函数时，所有使用该构造器创建的实例对象都会动态更新该原型属性，")])])},[],!1,null,null,null);n.default=o.exports}}]);