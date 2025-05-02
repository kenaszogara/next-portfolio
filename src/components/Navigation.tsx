'use client';

import { cn } from '@lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

type NavigationProps = {
	active: 'home' | 'posts' | 'tools' | 'projects';
	className?: string;
};

export default function Navigation({ active, className }: NavigationProps) {
	const { scrollY } = useScroll();

	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const prev = scrollY.getPrevious();

		if (prev && latest > prev && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<motion.nav
			variants={{
				visible: { y: 0 },
				hidden: { y: '-100%' }
			}}
			animate={hidden ? 'hidden' : 'visible'}
			className={cn(
				'fixed top-0 z-[100] flex w-full justify-center px-4 py-5',
				className
			)}
		>
			<ul className="flex gap-20">
				<Link href="/" className="cursor-pointer hover:underline">
					<li
						className={
							active === 'home' ? 'text-white underline' : 'text-gray-400'
						}
					>
						home
					</li>
				</Link>
				<Link href={'/posts'} className="cursor-pointer hover:underline">
					<li
						className={
							active === 'posts' ? 'text-white underline' : 'text-gray-400'
						}
					>
						posts
					</li>
				</Link>
			</ul>
		</motion.nav>
	);
}
