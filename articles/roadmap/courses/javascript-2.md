---
title: JS (2) - Primitive Values
tags:
  - js
prev: javascript-1
next: javascript-3
---
# JS (2) - Primitive Values

**In this course you will learn:**
- what are primitive values
- what are the types of primitives in JS

**Goal:**
- To know the basic differences between each primitive values


## What are Primitive Values?
Primitive values are values that are stored directly in variable. The values are stored as a copy to the variable, meaning any changes made to the variable do not affect the original value.

```js
let x = 5;
let y = x; // we assign y to the variable x
y = 10; // when we re-assign y to 10, it did not change the value of x
console.log(x); // Output: 5
console.log(y); // Output: 10
```

As the example above `x` value did not change even thou we assign `y` to `x` and change the value of `y` to `10`. 

{quick test section: can you guess the console.log of x, y, z?}
```js
let x = 1;
let y = 6;
let z = x + y;
z = y;
z = x;
x = z + y;

console.log(x;) // 7
console.log(y); // 6
console.log(z); // 1
```

## Types of Primitive Values in JS
In JavaScript the types of primitives are: **number**, **string**, **boolean**, **null** and **undefined**. We will go briefly through each one.

### Number
Number types can either be int or float. Int is a number without decimal point. Float is a number with decimal. [more in javascript-number-1]

```js
let x = 10; // int
let y = 10.001; // float

console.log(x + y); // 20.001
```

{{ try playing around with the console }}

### String
String types are textual data. We use the `'` or `"` operator to create a string. Strings unlike number type have its own unique properties and operations. One of the example is concatenating strings. [more in javascript-string-1]
```js
let str = 'hello world!';
let char = 'a';
let empty_space = ' '; // this is the space character

console.log(str + empty_space + char); // "hello world! a"
```

{{ try playing around with the console }}

### Boolean
Booleans are "truthy" values. It can either be `true` or `false`. Booleans are useful for creating a conditional statement in coding. (Which we will learn in later subject) [more in javascript-if-1]
```js
let bool = true;
let foo = false;

console.log(bool);
```

{{ try playing around with the console }}

### Null
null is a special value that represents an empty or unknown value. `let x = null;`
The above code means that `x` is currently have an empty value, and may be assign a new one later.

```js
let x = null; // assign a value of type null
x = 10;

console.log(x);
```

{{ try playing around with the console }}

### Undefined
A variable that has not been assigned a value is of type undefined. The differences with null type is that undefined is not yet assigned, while null is assigned.

```js
let x; // x is of type undefined

console.log(x); // will print undefined
```

{{ try playing around with the console }}

## Summary
In JavaScript the primitive types are: **number**, **string**, **boolean**, **null** and **undefined**. Each of these types have their own unique ways to assign to variable, and each with their properties.