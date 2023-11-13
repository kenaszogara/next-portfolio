import styles from '@/styles/Home.module.scss';
import { getAllPostNames } from '@/lib/posts';
import configData from '@/config/config.json';
import Trapesium from '@/components/Trapesium';
import Navigation from '@/components/Navigation';

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

export default async function Home() {
	const { paths, tags } = await getPathsData();

	return (
		<>
			<Navigation active="home" />

			<main className={`${styles.main} max-w-4xl`}>
				<h1 className={`${styles.title}`}>{configData.title}</h1>

				<div className={styles.brand}>
					<span
						style={{
							top: '0px',
							position: 'absolute'
						}}
					>
						<Trapesium width="97px" height="97px" />
					</span>
					<span
						style={{
							top: '102px',
							right: '82px',
							position: 'absolute'
						}}
					>
						<Trapesium width="43px" height="43px" color="yellow" />
					</span>
					<span
						style={{
							bottom: '116px',
							left: '5px',
							position: 'absolute'
						}}
					>
						<Trapesium width="29px" height="29px" color="blue" />
					</span>
					<span
						style={{
							bottom: '83px',
							left: '83px',
							position: 'absolute'
						}}
					>
						<Trapesium width="59px" height="59px" color="red" />
					</span>
				</div>

				<span
					style={{
						top: '76px',
						left: '0px',
						position: 'absolute'
					}}
				>
					<Trapesium width="22px" height="22px" />
				</span>
			</main>

			<section>
				<div>
					As a web artisan, I sculpt digital masterpieces. <br />
					Each project is a canvas where I blend artistry and functionality.{' '}
					<br />
					Dedicated to crafting unforgettable online experiences, I bring my
					best to every endeavor, ensuring your web presence is a lasting
					masterpiece.
				</div>
			</section>
		</>
	);
}
