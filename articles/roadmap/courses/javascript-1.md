---
title: JS (1) - Variables
tags:
  - js
prev: javascript-0
next: javascript-2
---
# JS (1) - Variables

**In this course you will learn:**
- what is a variable?
- creating a variable
- declare, assign and re-assign

**Goal:**
- To be able to create a variable

## What is a Variable?:
Variable is a named container to a value (data or object). With variable we can access the value by the variable's name. 

```js
let x = 10; // create a variable

console.log(x); // this will print 10 to web console
```

## Creating a Variable
To create a variable we need to declare the name and assign it to a value. In JavaScript we use the keyword `var`, `let` and `const` to create a variable, but we should only use `let` and `const`. [more in javascript-variable-1]

```js
let x = 10; // declare a variable and assign it a value

console.log(x); // access the variable to print to web console
```

Consider the above code example. We use the keyword `let` to declare the variable name `x` and assign it a value of `10`. We then can directly access the value of `10` by using `x`.  

## Declare, Assign and Re-assign
We declare a variable once then assign it an initial a value or re-assign again later to a different value.

```js
let x = 10; // declare and assign variable x to 10
x = 5; // re-assign variable x to 5
x = 4; // re-assign variable x again to 4

console.log(x); // this will print 4
```

We can also only declare a variable but not assign it to an initial value.
```js
let x; // declare variable x
x = 10; // assign x to 10

console.log(x); // this will prints 10
```

An important rule to note: **only after we declare a variable we can then use it on the next line**.
```js
x = 10; // this will be an error xd
let x = 20;
```

In JavaScript only the keyword `let` allows you to create a re-assignable variables. But if we use they keyword `const` we are not able to re-assign it to a different value. [more in javascript-variable-1]
```js
const x = 10
x = 20 // this will be an error xd
```

By now you should know the differences of `declare`, `assign` and `re-assign` of a variable.

{{ The same concept can be found in other programming language, so it is very important to fully understand this concept before moving on }}

## Summary:
To create a variable we need to use the keyword `let` or `const` and assign it a value with the `=` operator. Declare a variable first, then after we can assign it a value or use it later in our code. In JavaScript we use `console.log()` to print things into the browser console.

## Resources:
[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
