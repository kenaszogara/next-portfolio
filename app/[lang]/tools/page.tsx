import Navigation from '@/components/Navigation';
import Tag from '@/components/Tag';
import { getAllToolNames } from '@/lib/tools';
import { format } from 'date-fns';
import Link from 'next/link';

const getPathsData = async () => {
	const paths = getAllToolNames();
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

export default async function ToolPage() {
	const { paths, tags } = await getPathsData();

	return (
		<>
			<Navigation active="tools" />

			<main className={'mt-10'}>
				<h1 className="mb-4 text-2xl">Tools</h1>
				<p>
					This page aims to provide a set of useful snippets for library that I
					used on a day-to-day basis. These snippets act as a tool to improve my
					workflow.
				</p>

				<div>Search...</div>

				<div className={`w-fullmd:flex-col`}>
					{paths.map((path, index) => {
						return (
							<Link
								href={`/tools/${path.params.slug}`}
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
