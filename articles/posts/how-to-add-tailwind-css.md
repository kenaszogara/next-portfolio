---
title: "How to add TailwindCSS to Next.js Project"
date: "2022-01-03"
image: "/images/posts/nextjs_with_tailwind.png"
tags: ["Next.js", "TailwindCSS"]
---

Sometimes we would like to use TailwindCSS for our Next.js Project. We can do so by simply doing the below steps.

Install tailwind as dependencies in poject and initialize it.

```
npm install -D tailwindcss
npx tailwindcss init
```

Add tailwind directives inside a css file. I like to put tailwind directives inside global.css and import it in \_app.js like so:

```css
/* global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```jsx
// _app.js
import "../styles/globals.css";
```

That's it. You have tailwind now. 😤

**Note:** If you want to add tailwind directives in separate css file is ok too. It doesn't necessarily have to be inside global.css. Just make sure to import it in \_app.js.
