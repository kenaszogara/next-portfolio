---
title: "How I design my simple login form with React"
date: "2020-01-03"
---

# How I Create Simple Login Form with React

Design and UX is an integral part in front-end web development and with React Framework things are getting awesome.

> Disclaimer: this article discuss how I design the login form, routing omitted, and is a part of my series of documentation on how I create a simple full-stack with React, Express, MySQL and Node.

## **Design**

Start by designing the login form. I’m using Adobe Xd and this is how it turns out…

![](https://cdn-images-1.medium.com/max/2560/1*0eIz0KUGd7mPbiJL-6LeSQ.png)

Alright, Now let’s actually translate this into a webpage…

## **Create the environment**

Make sure [Node](https://nodejs.org/en/) installed on your machine…

I.) Install React globally:

    $ npm install -g create-react-app

II.) Then create the React App:

    $ create-react-app login-reactjs-tutorial
    $ cd login-reactjs
    $ npm start

> Syntax: create-react-app <app name> go to app directory then npm start , by now you should have React running by default on[ \*\*localhost:3000](http://localhost:3000/)\*\*

Your working directory should now looks like this:

    **|-login-reactjs-tutorial**
    |  |-node_modules
    |  **|-public
    **|    |-favicon.ico
    |    |-index.html
    |    |-manifest.json
    |  **|-src
    **|    |-App.css
    |    |-App.js
    |    |-App.test.js
    |    |-index.css
    |    |-index.js
    |    |-logo.svg
    |    |-serviceWorker.js
    |    |-setupTests.js
    |  |-package.json
    |  |-package-lock.json
    |  |-README.md

> We will focus more on **src **directory

## Let’s Code!

Start by creating a folder named “component” under “src” _(src/component)_, then create a new file **login.js** and put the following code…

![](https://medium.com/media/8d50ce3c01a6bdaf7eceabe38b36787a)

<iframe src="https://medium.com/media/8d50ce3c01a6bdaf7eceabe38b36787a" frameborder=0></iframe>

Now let’s paint it with css, create another file in component named **login.css**

<iframe src="https://medium.com/media/2a6d9d3e8e43a03fe0ad29e41b795b35" frameborder=0></iframe>

At this point, if you open [\*\*localhost](http://localhost:3000/)** you won’t see any changes. It’s because you need to tell React to launch **login.js** on the root web directory. We can do so by editing the **src/App.js\*\* to the following:

<iframe src="https://medium.com/media/62937f3846bdd6a5aa1c5e569c801d41" frameborder=0></iframe>
> tells React to import login.js from component then return the whole page on root web directory (**“/”**)

[\*\*localhost:3000](http://localhost:3000/) \*\*should change accordingly and looks like the above picture.

Hmm… the login text field is not interacting with the page, and the password field looks weird…

The password is not shown as “password” to the user, and when we submit the form, it shows our original password on the url, this is disastrous…

So let’s make it better…

**What needs to be done:**
**1.** The default value “password” has to be shown as **type=”text**”, but when user types in, the text dynamically changes to **type=”password**”
**2.** Password should be encrypted into **md5 3. **When user focuses on text fields, its automatically reset to empty string

Start by installing md5 from the command line:
$ npm install md5

Now we want to make the form input to store data dynamically, this way we can manipulate the data,(_ such as encrypting the password into md5_), and also creates better user experience.

Let’s add **state** to our login.js, (*one of the powerful feature of react *❤*)*

<iframe src="https://medium.com/media/3fc66df9193ab2abcd80d6fc0b7261e7" frameborder=0></iframe>

Then create **handleInputChange** that handle changes of our input dynamically. Let’s make it so that we can use this function for all of the inputs (_username & password_), and specifically encrypt password to md5

<iframe src="https://medium.com/media/34b9da5e585765d60ea0c2021f01439b" frameborder=0></iframe>

Create **setEmptyValue **to make our input’s become empty string on focus.

<iframe src="https://medium.com/media/76c98d83819e7f5d1bfe70d5d1d3b8c2" frameborder=0></iframe>

Modify our form’s input* (username and password) *to use state as its default value and make it calls our **handleInputChange **on every change and **setEmptyValue** on focus.

    <input
      ...
      defaultValue={this.state.<username or password>}
      onChange={this.handleInputChange}
      onFocus={this.setEmptyValue}
    />

The whole login.js should now looks like this…

<iframe src="https://medium.com/media/19d5c8baf9e22db4479924f171539ac9" frameborder=0></iframe>

Fire up **localhost:3000** and your login should have user friendly interaction.
[**Imgur**
*Edit description*i.imgur.com](https://i.imgur.com/ixXUtcP.gifv)

Perfect.

The login button and the signup link are not redirecting to any pages, since we are not discussing about routing, but I will soon drop in another article about it. ❤

Cheers!
