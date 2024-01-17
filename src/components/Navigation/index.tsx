import Link from 'next/link';

type NavigationProps = {
	active: 'home' | 'post';
	breadcrumbs?: string;
};

export default function Navigation({ active, breadcrumbs }: NavigationProps) {
	return (
		<ul className={`flex w-full `}>
			{!breadcrumbs && (
				<>
					<Link href="/" className="mr-4 cursor-pointer hover:underline">
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
								active === 'post' ? 'text-white underline' : 'text-gray-400'
							}
						>
							posts
						</li>
					</Link>
				</>
			)}

			{breadcrumbs && (
				<div className="flex items-center gap-2">
					<Link href={'/posts'} className="cursor-pointer hover:underline">
						<li
							className={
								active === 'post' ? 'text-white underline' : 'text-gray-400'
							}
						>
							posts
						</li>
					</Link>
					<span>{'/'}</span>
					<span>{breadcrumbs}</span>
				</div>
			)}
		</ul>
	);
}
