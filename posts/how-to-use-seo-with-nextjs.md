---
title: "How to use SEO with Next.js"
date: "2022-01-03"
tags: ["Next.js", "SEO"]
---

For SEO we will going to use [next-seo](https://www.npmjs.com/package/next-seo). This package will help us create SEO easily wether we want it in a page-to-page basis or available globally throughout our Next.js app.

Firstly, let's add the package using npm:

```
npm install --save next-seo
```

or with yarn:

```
yarn add next-seo
```

Now if you want your SEO in a page-to-page basis, you can simply do it like this, just like in the [Readme of next-seo](https://www.npmjs.com/package/next-seo#add-seo-to-page).

```jsx
import { NextSeo } from "next-seo";

const Page = () => (
  <>
    <NextSeo
      title="Simple Usage Example"
      description="A short description goes here."
    />
    <p>Simple Usage</p>
  </>
);

export default Page;
```

This is nice, but I prefer to use `<DefaultSeo />` and attach it in the \_app.js. So we can simply pass SEO object to \_app.js using props from each page. In Next.js we can pass the props from within the [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) or [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering).

```jsx
// _app.js
import React from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const SEO = {
    ...(pageProps.seo != null ? { ...pageProps.seo } : {}),
    defaultTitle: "Some default title if pageProps.seo object is null",
  };

  return (
    <React.Fragment>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
```

Then inside the page:

```js
// some /page/name.js
export default function Page({ props }) {
  // ... some page logic
}

export async function getStaticProps({ params }) {
  return {
    props: {
      // here we pass the seo object to _app.js
      seo: {
        title: "Page Title",
        description: "Page Description",
      },
    },
  };
}
```

That's it! You now have SEO working in your Next.js app. 🥳

Further reading into [next-seo documentation](https://www.npmjs.com/package/next-seo) to know more about the SEO object scheme for your needs.
