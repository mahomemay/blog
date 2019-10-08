---
title: call, apply, bind
lang: zh-CN
date: 2019-08-10
sidebar: auto
---

# call(), apply() 和 bind()

这三个方法都是是用来改变 函数指向时 上下文的 `this` 指向 的。

## Function.prototype.call()

### 定义

**`call()`** 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

### 语法

```javascript
fun.call(thisArg, arg1, arg2, ...)
// thisArg : 
//   在 fun 函数运行时指定的 this 值。
//   if(thisArg == undefined|null) this = window
//   if(thisArg == number|boolean|string) this = new Number()|new Boolean()|new String()
// arg1, arg2, ... :
//   指定的参数列表。
```

### 返回值

使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。

### 示例

1. 使用 `call` 方法调用父构造函数

在一个子构造函数中，你可以通过调用父构造函数的 call 方法来实现继承。下例中，使用 Food 和 Toy 构造函数创建的对象实例都会拥有在 Product 构造函数中添加的 name 属性和 price 属性,但 category 属性是在各自的构造函数中定义的。

```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

2. 使用 `call` 方法调用函数并且指定上下文的 `this`

```javascript
function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```

## Function.prototype.apply()

`apply()` 的语法和作用与 `call()` 方法类似，只有一个区别，就是 `call()` 方法接受的是一个参数列表，而 `apply()` 方法接受的是一个包含多个参数的数组。

```javascript
func.apply(thisArg, [argsArray])
// thisArg
//   可选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
// argsArray
//   可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。 浏览器兼容性 请参阅本文底部内容。
```

## Function.prototype.bind()

### 定义

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被 `bind` 的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。

### 语法

基础使用方法同 `call()`, 返回的函数需要手动调用（不需要传参数）

```javascript
function.bind(thisArg[, arg1[, arg2[, ...]]])
// thisArg
//   调用绑定函数时作为this参数传递给目标函数的值。 如果使用new运算符构造绑定函数，则忽略该值。当使用bind在setTimeout中创建一个函数（作为回调提供）时，作为thisArg传递的任何原始值都将转换为object。如果bind函数的参数列表为空，执行作用域的this将被视为新函数的thisArg。
// arg1, arg2, ...
//   当目标函数被调用时，预先添加到绑定函数的参数列表中的参数。
```

### 返回值

返回一个原函数的拷贝，并拥有指定的 `this` 值和初始参数。
