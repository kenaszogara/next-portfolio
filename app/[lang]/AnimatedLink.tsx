'use client';

import { HTMLMotionProps, motion } from 'motion/react';
import { Ref } from 'react';

type AnimatedLinkProps = HTMLMotionProps<'a'>;

export default function AnimatedLink({
	href,
	className,
	target,
	...props
}: AnimatedLinkProps & { ref?: Ref<HTMLAnchorElement> }) {
	return <motion.a href={href} whileHover={{ scale: 1.2 }} {...props} />;
}
