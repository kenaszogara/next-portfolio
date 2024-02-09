import CodeBlock from '@/components/CodeBlock';
import Custom404 from '@/components/Custom404';
import { Footer } from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { SocialShareButton } from '@/components/SocialShareButton';
import configData from '@/config/config.json';
import { getAllToolSlug, getToolData } from '@/lib/tools';
import styles from '@/styles/Article.module.scss';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

type PageProps = {
	params: {
		slug: string;
	};
};

type MetaProps = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: MetaProps) {
	// read from route
	const slug = params.slug;
	const hostname = process.env.hostname;

	// get post data
	const postData = await getToolData(slug);

	if (postData === null)
		return {
			title: configData.title,
			description: configData.tagline
		};

	const description = postData.content
		.replace(/\r?\n|\r/gm, '')
		.substring(0, 158);

	return {
		title: postData.title,
		description,
		metadataBase: new URL(hostname || 'http://localhost:3000'),
		openGraph: {
			title: postData.title,
			description: description,
			url: `${hostname}/tools/${slug}`,
			type: 'article',
			article: {
				publishedTime: postData.date,
				tags: postData.tags,
				authors: ['@kenaszogara']
			}
		}
	};
}

const getPostDataFromSlug = async (slug: string) => {
	const postData = await getToolData(slug);

	if (postData === null) {
		return {
			postData: null,
			slug
		};
	}

	const description =
		postData?.content.replace(/\r?\n|\r/gm, '').substring(0, 158) ?? '';

	return {
		postData: {
			...postData,
			description
		},
		slug
	};
};

export async function generateStaticParams() {
	const slugs = getAllToolSlug();

	return slugs.map((slug) => {
		slug;
	});
}

export default async function Page({ params }: PageProps) {
	const { postData, slug } = await getPostDataFromSlug(params.slug);

	if (postData === null) return <Custom404 />;

	return (
		<>
			<Navigation active="tools" breadcrumbs={slug} />
			<div className={`mt-4 md:mt-0`}>
				<main className="container mx-auto md:py-8">
					<div className="bg-dark-800 mx-auto mb-10 max-w-4xl md:rounded-md">
						<header className={`mb-12`}>
							<div className="px-6 pb-6 pt-12 ">
								<h1 className="mb-4 text-4xl font-bold">{postData?.title}</h1>
								<div className="flex items-baseline">
									<p className="mr-auto text-sm">
										Published {format(new Date(postData?.date), 'MMM d, yyyy')}
									</p>
									<SocialShareButton data={postData} />
								</div>
							</div>
						</header>

						<article>
							<ReactMarkdown
								children={postData?.content}
								className={`${styles.postBody} px-6 pb-6`}
								components={{
									code: CodeBlock as any
								}}
							/>
						</article>
					</div>

					<div className={`text-center`}>
						<p>Copy Link</p>
						<SocialShareButton
							data={postData}
							className={`my-4 flex items-center justify-center space-x-2`}
						/>
					</div>
				</main>

				<Footer config={configData} />
			</div>
		</>
	);
}
