---
title: "How to SVGR with Next.js"
date: "2023-06-14"
image: "/images/posts/svgr_logo.webp"
tags: ["svgr", "Next.js"]
---

> Config for Next version 12 and above.

### Install

```bash
npm install --save-dev @svgr/webpack
# or use yarn
yarn add --dev @svgr/webpack
```

### Next.js config

```js
// next.config.js
module.exports = {
  webpack(config) {
    // config of next 12 and above
    config.module.rules.push({
      test: /\.svg$/,
      include: [options.dir],
      use: [
        "next-swc-loader",
        {
          loader: "@svgr/webpack",
          options: { babel: false },
        },
      ],
    });

    return config;
  },
};
```
