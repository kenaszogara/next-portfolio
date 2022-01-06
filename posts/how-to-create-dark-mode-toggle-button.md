---
title: "How to Create Dark Mode Toggle Button in Next.js"
date: "2022-01-03"
image: "/images/posts/nextjs_dark_mode_theme.png"
tags: ["Next.js"]
---

Creating dark mode is very easy with the help of [next-themes](https://www.npmjs.com/package/next-themes) package. If we take a look in the documentation it is very straightforward and easy to add.

make sure to install it first using npm:

```
npm install next-themes
```

or using yarn:

```
yarn add next-themes
```

Then simply add `<ThemeProvider>` in \_app.js

```jsx
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
```

To make the dark mode toggle we just need to use `useTheme()` hooks inside our Next.js app.

```jsx
import { theme, useTheme } from "next-themes";

// somehwere inside page/component function return ...
return (
  <div>
    <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
      Toggle DarkMode
    </button>
  </div>
);
```

It's as simple as that. 😤

...

Further down the line, we can make our toggle button look prettier with some css touch to it.

![toggle darkmode button - giphy](https://media.giphy.com/media/phjpWdi4JzclVVYzTo/giphy.gif)

First add Fontawesome. The simplest way is by using cdn and put it in the head inside \_app.js.

```jsx
// _app.js
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
```

Then create `<ToggleDarkModeButton />` component.

```jsx
// ToggleDarkModeButton.js
import { useTheme } from "next-themes";
import css from "./index.module.css";

const ButtonToggleDarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={() => setTheme(theme == "dark" ? "light" : "dark")}
        checked={theme == "dark" ? true : false}
        id="chk"
      />
      <label className={css.label} htmlFor="chk">
        <i className={`fas fa-moon ${css.faMoon}`}></i>
        <i className={`fas fa-sun ${css.faSun}`}></i>
        <div className={css.ball}></div>
      </label>
    </div>
  );
};

export default ButtonToggleDarkMode;
```

Lastly, create index.module.css for the component and paste the following

```css
.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  background-color: #111;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 26px;
  width: 50px;
  /* transform: scale(1.5); */
}

.label .ball {
  background-color: #f3f4f6;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball {
  transform: translateX(24px);
}

.faMoon {
  color: #f1c40f;
}

.faSun {
  color: #f39c12;
}
```

Congrats! Now you have a toggle button like so.

![toggle darkmode button - giphy](https://media.giphy.com/media/phjpWdi4JzclVVYzTo/giphy.gif)
