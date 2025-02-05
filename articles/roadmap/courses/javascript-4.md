---
title: JS (4) - Conditional Statement
tags:
  - js
prev: javascript-3
next: javascript-5
---
# JS (4) - Conditional Statement

**In this course you will learn:**
- what is conditional statement
- how to use `if`, `else` and `if else`
- single vs multiple conditional statement

**Goal:**
- To be able to create simple conditional statement using `if`, `else`, and `if else`

## What is Conditional Statement?
Conditional statements are used to perform different actions based on different conditions.

```js
let x = 3;

if (x === 3) {
	x = x + 3;
}

console.log(x); // this will prints 6
```

The code above translates to: `if` the value `x` equals to `3`, then we will add `3` to `x`. That's why the `console.log(x)` prints `6`. If the value `x` is not equals to `3` then `console.log(x)` will prints 3. So this is conditional statement. 

To create a conditional statement in JavaScript, we uses the `if` keyword followed by `()` for the conditions and whatever inside `{}` for the actions we want to execute.

```js
if (condition) {
	// code runs when condition is true
}
```

Consider the following code
```js
let x = 1;

if (x > 0) {
	x = 5;
}

if (x < 4) {
	x = 10;
}

console.log(x); // what is the output of x?
```

{{ try playing around with the code }}

In JavaScript conditional statement are created with the keyword: `if`, `else`, `if else` and `switch`. But in this subject we will focus on `if` only.

## How to use `if`, `else` and `else if`?
In JavaScript (and most programing language), we starts with the `if` keyword to create a conditional statement. 

```js
if (x === 2) {
	console.log('x is equal to 2')
}
```

In some cases, we also want to perform an action only when the condition is not satisfied. In this case we can use the `else` keyword.

```js
if (x === 2) {
	console.log('x is equal to 2'); // will print when x is 2
} else {
	console.log('x is not equal to 2'); // will print when x is not 2
}
```

In more complex cases, we might want to add a new condition in cases the first condition is not satisfied. We can achieve this with `else if` keyword.

```js
if (x === 2) {
	console.log('x is equal to 2'); // will print when x is 2
} else if (x === 3){ // else if must be put after if condition
	console.log('x is equal to 3'); // will print when x is 3
} else { // else must be put at the last condition
	console.log('x is not equal to 2'); // will print when x is not 2
}
```

{{ try playing around with the console }}

## Single vs Multiple Conditional Statement
There is a difference in using multiple `if` statements and chaining an `if` with `else if`. Consider the following code:
```js
let x = 2;

// first conditional statement
if (x === 2) { // x is equal to 2
	x = 3; // so we re-assign the value x to 3
} else if (x === 3) {
	console.log("I don't got print out");
}

// second conditional statement
if (x === 3) { // x is now equal to 3
	console.log('I got print out!');
}
```

The action inside `else if` is not being executed. It's because an `if` and `else if` is a single conditional statement containing 2 actions that will perform differently when `x = 2` or `x = 3`.  In some cases it is better to just use `if` without an `else if` because it will make code easier to understands. [more in javascript-if-1]

{{ try playing around with the console }}

## Summary
In JavaScript we use the `if` keyword to create conditional statements. We can also chain multiple conditions in a single conditional statement using the `else` and `else if` keywords. We use the `else if` to specify a new condition and `else` keyword to catch any conditions that doesn't satisfy the `if` and `else if`.

## Reference:
[if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
