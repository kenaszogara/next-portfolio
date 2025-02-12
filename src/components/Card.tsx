'use client';

import { motion } from 'motion/react';

type CardProps = {
	url: string;
	children: JSX.Element | JSX.Element[];
};

export default function Card({ url, children }: CardProps) {
	return (
		<motion.a
			className="text-secondary flex cursor-pointer items-center gap-0 rounded-md border px-5 py-4"
			href={url}
			target={'_blank'}
			whileTap={{
				scale: 1.05,
				transition: {
					duration: 0.2
				}
			}}
			initial={{
				borderColor: 'var(--color-primary)'
			}}
			whileHover={{
				borderColor: 'var(--color-secondary)',
				transition: {
					duration: 0.2
				}
			}}
		>
			{children}
		</motion.a>
	);
}
