import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = 'articles/posts';

export type MatterResultData = {
	title: string;
	tags: string[];
	image: string;
	date: string;
};

export async function getPostData(id) {
	try {
		// to work with vercel file imports
		const fullPath = path.join(process.cwd(), postsDirectory, `${id}.md`);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// check if tags empty
		const tags = 'tags' in matterResult.data ? matterResult.data.tags : [];

		// use placeholder if image not found
		const imgPlaceholder = '/images/posts/placeholder.png';
		const image =
			'image' in matterResult.data ? matterResult.data.image : imgPlaceholder;

		return {
			id,
			...(matterResult.data as MatterResultData),
			content: matterResult.content
		};
	} catch (error) {
		console.log(error);
		return null;
	}
}

export function getAllPostNames() {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map((fileName) => {
		const fullPath = path.join(process.cwd(), postsDirectory, `${fileName}`);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);
		const tags: string[] =
			'tags' in matterResult.data ? matterResult.data.tags : [];
		const date: string =
			'date' in matterResult.data
				? matterResult.data.date
				: new Date().toString();

		return {
			params: {
				slug: fileName.replace(/\.md$/, ''),
				...(matterResult.data as MatterResultData),
				tags,
				date
			}
		};
	});
}

export function getAllPostPagesPath() {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map(
		(fileName) => `${postsDirectory}/${fileName.replace(/\.md$/, '')}`
	);
}

export function getAllPostSlug() {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map((fileName) => `${fileName.replace(/\.md$/, '')}`);
}
