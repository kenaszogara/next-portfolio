import Navigation from '@/components/Navigation';
import Tag from '@/components/Tag';
import { getAllPostNames } from '@/lib/posts';
import cn from 'classnames';
import { format } from 'date-fns';
import { Roboto } from 'next/font/google';
import Link from 'next/link';

const font = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: '400'
});

const getPathsData = async () => {
	const paths = getAllPostNames();
	paths.sort((a, b) => {
		if (Date.parse(a.params.date) > Date.parse(b.params.date)) {
			return -1;
		} else {
			return 1;
		}
	});

	const allTags: string[] = [];

	// get all tags from posts
	paths.map((item) => {
		item.params.tags.map((tag) => {
			if (allTags.indexOf(tag) === -1) {
				allTags.push(tag);
			}
		});
	});

	return { paths, tags: allTags };
};

export default async function PostPage() {
	const { paths, tags } = await getPathsData();

	return (
		<>
			<Navigation active="post" />

			<main className={cn('mt-10', font.className)}>
				<h1 className={'bold mb-5 text-3xl'}>Please read my blog</h1>

				<div className={`w-fullmd:flex-col`}>
					{paths.map((path, index) => {
						return (
							<Link
								href={`/posts/${path.params.slug}`}
								key={index}
								className={`mb-6 block w-full flex-col md:flex-row`}
							>
								<div
									className={`rounded-lg  py-4 text-left  hover:shadow-lg md:mb-0 md:mr-auto`}
								>
									<h3
										className={`mb-1 break-normal text-2xl font-bold hover:text-gray-400`}
									>
										{path.params.title}
									</h3>
									<p className={`mb-3 font-normal text-gray-400`}>
										{format(new Date(path.params.date), 'MMM d, yyyy')}
									</p>
									<div className={`flex flex-row flex-wrap gap-2`}>
										{path.params.tags.map((tag, i) => {
											return <Tag key={i} text={tag} />;
										})}
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</main>
		</>
	);
}
