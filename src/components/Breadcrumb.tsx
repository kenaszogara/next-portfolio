'use client';

import { cn } from '@lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';

type BreadcrumbProps = {
	active: string;
	breadcrumbs: string;
	className?: string;
};

export default function Breadcrumb({
	active,
	breadcrumbs,
	className
}: BreadcrumbProps) {
	return (
		<div className={cn('flex w-full gap-1 px-4 py-5', className)}>
			<Link href={`/${active}`} className="cursor-pointer hover:underline">
				<motion.div
					className={'text-white'}
					whileHover={{
						y: -5,
						transition: {
							duration: 0.2
						}
					}}
				>
					{active}
				</motion.div>
			</Link>

			<span>{'/'}</span>

			<Link
				href={`/${active}/${breadcrumbs}`}
				className="cursor-pointer hover:underline"
			>
				<motion.div
					className={'text-white'}
					whileHover={{
						y: -5,
						transition: {
							duration: 0.2
						}
					}}
				>
					{breadcrumbs}
				</motion.div>
			</Link>
		</div>
	);
}
