'use client';

import { cn } from '@lib/utils';
import { motion } from 'motion/react';

export default function FlickeringText({
	children,
	className,
	order = 1,
	repeatDelay = 5
}: {
	children: React.ReactNode;
	className?: string;
	order?: number;
	repeatDelay?: number;
}) {
	return (
		<motion.span
			className={cn('font-bold', className)}
			animate={{
				color: ['var(--color-white)', 'var(--secondary)', 'var(--color-white)']
			}}
			transition={{
				duration: 1,
				delay: order,
				repeat: Infinity,
				repeatDelay,
				ease: 'backOut'
			}}
		>
			{children}
		</motion.span>
	);
}
