import Navigation from '@components/Navigation';
import PageWrapper from '@components/PageWrapper';
import PostCard from '@components/PostCard';
import { getAllPostNames } from '@lib/posts';
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
		<>
			<Navigation active="posts" className="bg-black" />

			<PageWrapper className="h-auto pt-20">
				<main className="mx-auto py-20 md:max-w-[900px]">
					<h1 className={'mb-5 text-3xl font-bold uppercase'}>Posts</h1>

					<div
						className={`grid w-full grid-cols-1 gap-[40px] sm:grid-cols-2 md:grid-cols-3`}
					>
						{paths.map((path, index) => {
							return (
								<Link href={`/posts/${path.params.slug}`} key={index}>
									<PostCard
										title={path.params.title}
										date={path.params.date}
										tags={path.params.tags}
										image={path.params.image}
										slug={path.params.slug}
									/>
								</Link>
							);
						})}
					</div>
				</main>
			</PageWrapper>
		</>
	);
}
