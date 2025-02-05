---
title: JS (5) - Loops
tags:
  - js
prev: javascript-4
next: javascript-6
---
# JS (5) - Loops

**In this course you will learn:**
- what is a loop
- how to create loop in JS
- when to use loop
- infinite loop

**Goal:**
- To know the differences and when to use `for` and `while`

## What is a Loop?
Loops are used in JavaScript to perform repeated tasks based on a condition. The conditions are either `true` or `false`. The loop will continue running until the condition returns `false`.

```js
let i = 0;
let x = 0;

while (i < 5) { // this loop will keep running as long as i < 5
	// on every run do the following
	x = x + 2; // add x by 2
	i = i + 1; // add i by 1
}

console.log(x) // will print 10
```

As the code above, the loop will run 5 times, because on every run we increment the value of `i` by `1`. Eventually `i` will be `5`. By then the condition will return `false` and the loop will stop.

## How to create Loop in JS?
In JavaScript there are many ways to create a loop. For this subject I will introduce the basic `for` loop and `while` loop.

### while

```js
while (condition) {
	// code executes on every run while condition is true
}
```

The `while` keyword takes in a condition. It will keep running the code while the condition is true. We can take a look from the previous code example.

```js
let i = 0;
let x = 0;

while (i < 5) { // this loop will keep running as long as i < 5
	// on every run do the following
	x = x + 2; // add x by 2
	i = i + 1; // add i by 1
}

console.log(x) // will print 10
```

The loop will keep running while `i` is less than `5`. Once `i` is equal to `5` the loop will stop. [more in javascript-while-1]

{{ try playing around with the console }}

### for

```js
for (expression 1; expression 2; expression 3) {
	// code executes on every run for as long as expression 2 is true
}
```

The `for` keyword takes in 3 expressions inside `()`.
- expression 1:  initialize variable(s) used in the loop
- expression 2:  evaluates the condition of the initialized variable(s)
- expression 3: will be executed after every run. normally used to increment(`++`) the initialized variable(s). Can also be used to decrement with `--` symbol

Consider the below code:
```js
for (let i = 0; i < 10; i++) {
	console.log("hello world"); // will be printed 10 times
}
```

To explain this `for` loop. We initialize the variable `i` with the value `0`. We evaluates the condition of `i`, if its value is under `10` we will keep the loop running. After every run, the `i` variable will increment by `1`. Eventually `i` will equal to `10` and the `i < 10` condition will return `false`, then the loop will stop.

```js
for (let i = 0, let j = 0; (i + j) < 10; i++, j++) {
	console.log("hello world"); // will be printed 5 times
}
```

We can add multiple initial variable in `expression 1` separated by `,`. Also we can add multiple increments in `expression 3` separated by `,`.  [more in javascript-for-1]

{{ try playing around with the console }}

## When to use Loop?
We should use loop when we wanted to run a repeated task in our code. For example a repeated task to print 10 times, or a repeated task to increment a number several times.

```js
let x = 1;
while (x < 10) {
	console.log("currently the number x = " + x);
}
```

{{ try playing around with the console }}

## Infinite Loop
Sometimes when working with loop, our program becomes stuck or "hangs". This is caused by an infinite loop in our logic. In normal cases, we should try to avoid infinite loop.

Consider the following code:
```js
while (true) { // this loop will keep running 
	console.log("hello") // will keep pringint "hello" infinitely
}
```


## Summary
Loop is a very useful code blocks to do a repeated task. Although it is very powerful, we have to be careful when using loops so it didn't become an infinite loop.

## References:
[while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
[for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
