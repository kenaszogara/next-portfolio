import Link from 'next/link';

type NavigationProps = {
	active: 'home' | 'post' | 'tools';
	breadcrumbs?: string;
};

export default function Navigation({ active, breadcrumbs }: NavigationProps) {
	return (
		<>
			{!breadcrumbs && (
				<ul className={`flex w-full gap-4`}>
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
								active === 'post' ? 'text-white underline' : 'text-gray-400'
							}
						>
							posts
						</li>
					</Link>
					<Link href={'/tools'} className="cursor-pointer hover:underline">
						<li
							className={
								active === 'tools' ? 'text-white underline' : 'text-gray-400'
							}
						>
							tools
						</li>
					</Link>
				</ul>
			)}

			{breadcrumbs && (
				<div className="flex items-center gap-2">
					<Link href={`/${active}`} className="cursor-pointer hover:underline">
						<div className={'text-white underline'}>{active}</div>
					</Link>
					<span>{'/'}</span>
					<span>{breadcrumbs}</span>
				</div>
			)}
		</>
	);
}
