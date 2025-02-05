---
title: HTML (1) - Introduction to HTML page
tags:
  - html
---
# HTML (1) - Introduction to HTML page


**In this course you will learn:**
- what is HTML DOM
- how to construct and structure HTML to create a simple webpage

**Goal:**
- you will be able to understand the structure of an HTML web paged


## What is HTML DOM?
*HTML DOM = Hypertext Markup Language Document Object Model*
As the name suggest it is a model that the web browser used to interpret the things to show in a webpage.

Every webpage will have a main DOM structure composes of the "HTML elements" `<head>` and `<body>` like below:
```html
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
	</body>
</html>
```

We named these `<head/>, <body/>, <html>` as "HTML elements" (or "element"). 

Another example from the homepage of this website, as shown in the below screenshot.
![[Screenshot 2024-02-13 at 5.39.24 PM.png]]

When you inspect a web page in any browser and goes to the "Elements", tab you will see the same exact structure. This structure stays true to every kind of webpage you see on the web.

As you can see there is a pattern to an HTML element. It has an "opening tag" (`<>`) and a "closing tag" (`</>`). So for the head element it will looks like: `<head></head>`. The first head is an opening tag, the second one is a closing tag.

An HTML element can have "children elements". Children elements are elements that are put inside another element. Consider this example:
```html
<head>
	<element1></element1>
	<element2></element2>
	<element3></element3>
</head>
```

As we can see our `<head>` element have 3 children elements:
- `<element1>`
- `<element2>`
- `<element3>`

Now we can also say that `<head>` element is the "parent element" of `<element1>`, `<element2>` and `<element3>`

An HTML element can also have "sibling elements". Sibling elements are elements that are in the same level with each other, becoming a sibling to one another. From the above example, we can say that `<element1>` is a sibling to `<element2>` and `<element3>` but not a sibling to `<head>`.

In summary:
- `<head>`, `<body>`, `<html>` we call them HTML element
- each element has an opening tag (`<>`) and closing tag (`</>`)
- an element can have:
	- children element
	- parent element
	- sibling element

{ These concepts / terms will be used a lot throughout the course and it will be very helpful to understand them before moving on. }

Every html page must have a `<head>` and `<body>` element. Now we will discuss in detail each of these elements.

### <head />
The `<head>{...}</head>` element mainly have two main purpose:
1. to describe the metadata of the page
2. to load external resources required by the page

#### 1. Describe metadata of the page
For example the "text" and "icon" shown on the browser tab is determined by the value of `<title>` and `<link rel="icon">` element respectively, inside the `<head>`. 

For example this website homepage.
![[Screenshot 2024-02-13 at 6.15.37 PM.png]]

Has the following code on the html file:
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Hi, I'm Kenas 👋</title>
		<link rel="icon" href="/en/icon.png" type="image/png" sizes="100x100">
	</head>
	<body>
		...
	</body>
</html>
```

#### 2. Load external resources required by the page
A webpage may required external resources. These resources are mainly javascript and css files. Javascript files for the logic of the page. CSS files for giving the page a beautiful looks. 

### <body />
The `<body>{...}</body>` element is what you will see on a page.

Consider the following code on the html file:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hi, I'm Kenas 👋</title>
    <link rel="icon" href="/en/icon.png" type="image/png" sizes="100x100" />
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

What we see on the screen is only the `<h1>` element inside the `<body>`
![[Screenshot 2024-02-15 at 1.31.34 PM.png]]

So most of the time we will code inside the HTML `<body>`

## Summary
A good analogy of a webpage is that it is like a human body. The HTML elements are the skeleton, the Javascript logic is the nervous system, and the CSS is the skin, makeup, and all of the outward looks.

