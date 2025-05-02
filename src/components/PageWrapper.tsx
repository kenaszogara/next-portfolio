import { cn } from '@lib/utils';

export default function PageWrapper({
	children,
	className,
	...rest
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn('mx-4 h-full w-auto', className)} {...rest}>
			{children}
		</div>
	);
}
