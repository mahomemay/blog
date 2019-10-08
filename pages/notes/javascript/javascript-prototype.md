---
title: JavaScript-prototype
lang: zh-CN
date: 2019-08-10
sidebar: auto
---

# JavaScript 原型 & 原型链

## 涉及到的内容

- `prototype`
- `__proto__`
- `new`
- `call()` / `apply()` / `bind()`
- `this`

## 相关描述

在其他的 **面向对象编程** 的语言中（如：Java），需要先进行 **类** 的定义，之后通过 类 创建的 **实例** 会把类上所定义的属性和方法都复制到实例上。而在 `JavaScript` 中并不会进行复制，而是通过 `__proto__` 属性与 `构造函数` 进行关联（该属性来自于构造函数的构造器），直接使用构造函数中对应的属性和方法。

- 每个实例对象都有一个 **原型对象**，实例对象会以该原型对象为模板，继承原型对象上的属性和方法。
- 原型对象 也可能是通过它的原型对象创建的，所以原型对象也能有自己的原型对象，这样一层一层的关系我们称之为 **原型链**。
- 一个实例对象从原型对象上继承过来的 **属性** 和 **方法** 并不会挂载到自己本身，而是通过构造器函数上的 `prototype` 链接到原型对象上。

参考文档：[对象原型](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)

## 深入了解

1. 创建一个函数 `doSomething`

```javascript
function doSomething() {}
console.log(doSomething.prototype)
/* =>
{
    constructor: ƒ doSomething(),  // => 该函数的构造器
    __proto__: Object              // => 该函数继承的原型对象
}
*/
```

2. 接下来给 `doSomething` 添加一个 `foo` 属性

``` javascript
doSomething.prototype.foo = 'bar'
console.log(doSomething.prototype)
/* =>
{
    foo: "bar",
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
*/
```

1. `new` 出一个 `doSomething` 的实例

```javascript
const newDoSomething = new doSomething()
newDoSomething.prop = 'some value'
/* => 
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}
*/
```

4. 我们发现 `newDoSomething.__proto__` 与 `doSomething.prototype` 相同
   
```javascript
newDoSomething.__proto__ === doSomething.prototype // => true
```

当我们尝试访问 `newDoSomething` 上的属性或方法时，浏览器会先去 `newDoSomething` 身上去找，如果不存在则去 `newDoSomething.__proto__`（即 `doSomething.prototype`） 中继续找该属性，如果 `newDoSomething.__proto__` 中仍然没有找到，则继续向下一级的 `newDoSomething.__proto__.__proto__` 中查找，如果还没有 则该属性为 `undefined`。

```javascript
function doSomething(){}
doSomething.prototype.foo = "bar"

const doSomeInstancing = new doSomething()
doSomeInstancing.prop = "some value"
console.log(doSomeInstancing.prop)          // => some value
console.log(doSomeInstancing.foo)           // => bar
console.log(doSomething.prop)               // => undefined
console.log(doSomething.foo)                // => undefined
console.log(doSomething.prototype.prop)     // => undefined
console.log(doSomething.prototype.foo)      // => bar
```

所以 `doSomeInstancing` 上没有添加 `foo` 属性，但仍然可以获取到 `doSomething.prototype` 上的 `foo`。

## 继承

我们可以发现 `doSomething.__proto__` 与 `Object.prototype` 相同，说明 `doSomething` 是继承自 `Object` 的。那么 `Object` 下还有其他的方法并没被继承过来，是因为 能够被实例继承的属性和方法只有`Object.prototype` 开头的，像 `Object.keys()` 等方法并不符合这个条件，他们是 `Object` 构造器的自有属性和方法。

## 修改原型

当我们修改了原型对象的构造函数时，所有使用该构造器创建的实例对象都会动态更新该原型属性，
