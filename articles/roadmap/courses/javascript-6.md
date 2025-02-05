---
title: JS (6) - Functions
tags:
  - js
prev: javascript-5
next: javascript-7
---
# JS (6) - Functions

**In this course you will learn:**
- what is a function
- how to create function in JS

**Goal:**
- To be able to create simple function using the `function` keyword and `es5`

## What is a function?
Function is a piece of logic that takes in value(s) and produce a result. You can imagine a function is like a juice blender. The blender machine is the function, the oranges are the values, and the juice is the result.


## How to crate Function in JS:
To create a function we use the keyword `function` followed by a `name` and `()` operator to declare a function. Then we can call the function like `name()`.

```js
function name() {
	// code block to execute
}

name() // calling the function name
```

In the below example, we create a function to print a string `im just a function`. And calls it twice.

```js
function fn() {
	cosole.log('im just a function')
}

// we can call fn() as many times as we want
fn() // will print 'im just a function' in the console
fn() // will print again
```

In the below example, we create a function to do simple addition of 2 values: `a` and `b`. 

```js
function add(a,b) {
	return a + b;
}

let a = 5
let b = 3
let sum = add(a, b) // call the function and assign the value to sum

console.log(sum) // 8
console.log(add(3,3)) // 6

// we can call function add as many times as you want after its been declared
```

Changing the value `a` and `b` will not change the main logic of the function, which is adding `a` and `b`. The function will still add `a` and `b` regardless what you pass as the value. This is what makes a function so powerful. [more in javascript-function-1]

{{ try playing around with the console }}

{{ notice the above code uses the keyword `return` to know more about `return` click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)}}

## Summary
TODO

## Reference
[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

