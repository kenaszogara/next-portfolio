import CodeBlock from '@/components/CodeBlock';
import { Footer } from '@/components/Footer';
import { SocialShareButton } from '@/components/SocialShareButton';
import configData from '@/config/config.json';
import { getAllPostSlug, getPostData } from '@/lib/posts';
import styles from '@/styles/Article.module.css';
import { format } from 'date-fns';
import Image from 'next/image';
import { redirect } from 'next/navigation';
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
	const postData = await getPostData(slug);

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
			url: `${hostname}/posts/${slug}`,
			type: 'article',
			article: {
				publishedTime: postData.date,
				tags: postData.tags,
				authors: ['@kenaszogara']
			},
			images: [
				{
					url: `${hostname}${postData.image}`,
					width: 800,
					height: 500,
					alt: 'Photo of post'
				}
			]
		}
	};
}

const getPostDataFromSlug = async (slug: string) => {
	const postData = await getPostData(slug);

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
	const slugs = getAllPostSlug();

	return slugs.map((slug) => {
		slug;
	});
}

export default async function Page({ params }: PageProps) {
	const { postData, slug } = await getPostDataFromSlug(params.slug);

	if (postData === null) {
		redirect('/404');
	}

	console.log(postData.image);

	return (
		<div className={`mt-4 md:mt-0`}>
			<main className="container mx-auto md:p-8">
				<a className={`mb-10 block text-center underline`} href="/">
					Go back to homepage
				</a>

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
						<div className="w-full md:rounded">
							<Image
								src={postData?.image}
								width={900}
								height={500}
								alt="post image"
							/>
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
	);
}