import Link from 'next/link';

type NavigationProps = {
	active: 'home' | 'posts' | 'tools' | 'projects';
	breadcrumbs?: string;
};

export default function Navigation({ active, breadcrumbs }: NavigationProps) {
	return (
		<>
			{!breadcrumbs && (
				<nav className="fixed top-0 z-[100] flex w-full justify-center px-4 py-5">
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
				</nav>
			)}

			{breadcrumbs && (
				<nav className="fixed top-0 z-[100] flex w-full justify-center gap-1 px-4 py-5">
					<Link href={`/${active}`} className="cursor-pointer hover:underline">
						<div className={'text-white'}>{active}</div>
					</Link>

					<span>{'/'}</span>

					<Link
						href={`/${active}/${breadcrumbs}`}
						className="cursor-pointer hover:underline"
					>
						<span>{breadcrumbs}</span>
					</Link>
				</nav>
			)}
		</>
	);
}
