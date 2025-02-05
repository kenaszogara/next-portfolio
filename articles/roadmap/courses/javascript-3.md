---
title: JS (3) - Reference Values
tags:
  - js
prev: javascript-2
next: javascript-4
---
# JS (3) - Reference Values

**In this course you will learn:**
- what are reference values
- what are the types of reference values in JS

**Goal:**
- To know the basic differences between each reference values

## What are Reference Values?
Reference values are objects that are stored in computer's memory and accessed through reference. When we assign a reference value to a variable, changing that variable will affect the original value.

```js
let a = [1, 2, 3]; // assign a to an array
let b = a; // assign b to the reference of a
a.push(4);  // add number 4 to a
console.log(b); // when we print b it will shows [1,2,3,4]
```

In above example `b` is assigned to the reference of the original value of `a`. So changing `b` will also change the original value of `a`.

## What are the types of reference values in JS
In JavaScript the following types are considered reference values: `array`, `object`, `function`. In this section we will briefly walk through `array` and `object` types. The `function` type will be discussed in further subject.

### Array
Array is a list of values. It can be a list of **primitive values** and **reference values**. To create an array we use the `[` operator at the start and ends with the `]` operator. 

```js
let array1 = [1, 2, 3, 4, 5] // array of primitives
let array2 = [1, [1, 2, 3], [[1]], {"name": "John"}] // array of reference values

let array3 = ["123", 2.22, null, undefined, 2] // a combination of values

console.log(array1)
console.log(array2[1]) // use the index 1 of array2 to access the value
console.log(array3)
```

There are many operations to an array. To read a value in an array, we can use its "index". `array1[0]` will give use the value `1` (the first item of an array starts with index 0). Another example we can add an item to an array using the `push()` method. What makes an array great is that it's a list data structure that enables use to work with list data in JavaScript. [more in javascript-array-1]

{{ try playing around with the console }}

### Object
Object unlike arrays, are a data with key and value pairs. So if we want to read the "value" of an object we need to use the "key".

```js
let obj = { "name": "John", "job": "student" }; // assign an object

console.log(obj['name']); // will print 'John'
console.log(obj['job']); // will print 'student'
```

Object has many other operations such as, deleting a key-value pair, adding a key-value pair, modifying key-value pair, and much more. This makes object a great data structure to work with abstract data in JavaScript. [more in javascript-object-1]

{{ try playing around with the console }}

## Summary
We now know that reference values are `array`, `object` and `function`. When we assign the reference to a variable and make any changes, it will also changes the original value.