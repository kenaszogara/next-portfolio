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
				{/* <div className={`flex-col text-center mb-40`}>
          <Image
            className={`${styles.circular} m-auto `}
            src={configData.profilePic}
            alt="Picture of the author"
            width="150"
            height="150"
          />
          <p className={`${styles.description} p-3 mb-5`}>
            {configData.tagline}
          </p>
        </div> */}

				{/* <div className={`${styles.grid} md:flex-col w-full px-4`}>
					{paths.map((path, index) => {
						return (
							<Link
								href={`/posts/${path.params.slug}`}
								key={index}
								className={`${styles.card} flex-col md:flex-row w-full`}
							>
								<div className={` md:max-w-lg md:mb-0 md:mr-auto`}>
									<h3 className={`font-bold text-2xl mb-4  break-normal`}>
										{path.params.title}
									</h3>
									<div className={`flex flex-wrap flex-row`}>
										{path.params.tags.map((tag, i) => {
											return (
												<div
													key={i}
													className={`m-1 border-2 rounded px-2 py-1`}
												>
													{tag}
												</div>
											);
										})}
									</div>
								</div>
								<p className={`font-normal`}>
									{format(new Date(path.params.date), 'MMM d, yyyy')}
								</p>
							</Link>
						);
					})}
				</div> */}
			</main>

			<Navigation />
		</>
	);
}
