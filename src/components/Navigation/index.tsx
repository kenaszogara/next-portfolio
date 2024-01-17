import Link from 'next/link';

type NavigationProps = {
	active: 'home' | 'post';
};

export default function Navigation({ active }: NavigationProps) {
	return (
		<ul className={`flex w-full `}>
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
		</ul>
	);
}