import { getAllPostNames } from '@/lib/posts';
import { format } from 'date-fns';
import Link from 'next/link';

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
		<div>
			<div className={`md:flex-col w-full px-4`}>
				{paths.map((path, index) => {
					return (
						<Link
							href={`/posts/${path.params.slug}`}
							key={index}
							className={`flex-col md:flex-row w-full`}
						>
							<div
								className={` md:max-w-lg md:mb-0 md:mr-auto border rounded-md border-gray-400 text-left py-2 px-4`}
							>
								<h3 className={`font-bold text-2xl mb-4  break-normal`}>
									{path.params.title}
								</h3>
								<div className={`flex flex-wrap flex-row`}>
									{path.params.tags.map((tag, i) => {
										return (
											<div key={i} className={`m-1 border-2 rounded px-2 py-1`}>
												{tag}
											</div>
										);
									})}
								</div>
							</div>
							<p className={`font-normal mb-8`}>
								{format(new Date(path.params.date), 'MMM d, yyyy')}
							</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
