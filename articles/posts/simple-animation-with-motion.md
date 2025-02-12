---
title: 'Simple Animation with Motion'
date: '2025-01-03'
tags: ['motion', 'animation']
---

Motion is a library that makes it fun, simple, and easy to create animations in React. Motion is derived from the famous framer-motion package, but seems now it has been decoupled from framer. Hopefully, this means that motions now is focus solely to deliver better animation for the web.

If you are a web engineer, you will most likely need to create simple animations for your project, and I myself many times feel that it is such a hassle to just create a simple animation. What I ended up doing is to create a copy pasted template CSS and every time a project needs the same animation, I will copy and paste all of it and sort of re-use the classNames. Well to me, I think this is such a boilerplated work and I think it is not a good practice to do so.

What I like about motion is their easy to use component/functions to create animation and it works using web API under-the-hood. Animations should not be a hard thing to do. Instead it should be fun and simple to do, and it that sense motion makes the perfect fit for me.

Here are a simple use-case that I end up keep using with motion accross my projects. I found them simply to be useful and I hope you will find them useful too.

## Scale down on tap

I like to use this animation on buttons. It gives the feeling that the button is being pressed down on click. Just a one-line of code to achive this.

```jsx
import { motion } from 'motion/react';

const Button = () => {
	return <motion.button whileTap={{ scale: 0.95 }}>click me</motion.button>;
};
```

## Border glow on hover

Yes, this is a very simple animation: add border on hover. But for users it makes your site more living.

```jsx
import { motion } from 'motion/react';

const Button = () => {
	return (
		<motion.div
			initial={{
				borderColor: 'var(--color-border)' // your default border color variable
			}}
			whileHover={{
				borderColor: 'var(--color-border-accent)', // your hover border color variable
				transition: {
					duration: 0.2
				}
			}}
		>
			hover me
		</motion.div>
	);
};
```

## SVG animations

Motion can also use to animate SVGs. I found it also very easy to animate SVGs.

This is an example of a settings button that I created using motion. It uses the button of the parent and listen to the whileHover event to animate the setting SVG. Surprisingly, in motion you can do such a complex animation with just a few settings.

```jsx
import { motion } from 'motion/react';

export default function SettingsButton({
  className,
  onClick,
  disabled
}: HTMLProps<HTMLButtonElement>) {
  return (
    <motion.button
      className={cn(
        'w-[72px] h-[72px] cursor-pointer flex justify-center items-center shadow-lg rounded-full bg-white',
        className
      )}
      whileHover={'hover'}
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-settings-2"
      >
        <path d="M20 7H5" />
        <path d="M20 17H5 " />
        <motion.circle
          variants={{
            hover: {
              cx: 7,
              cy: 17,
              r: 3
            }
          }}
          initial={{
            cx: 17,
            cy: 17,
            r: 3
          }}
          fill={'white'}
          transition={{ duration: 0.5 }}
        />
        <motion.circle
          variants={{
            hover: {
              cx: 17,
              cy: 7,
              r: 3
            }
          }}
          fill={'white'}
          initial={{
            cx: 7,
            cy: 7,
            r: 3
          }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </motion.button>
  )
}

```
