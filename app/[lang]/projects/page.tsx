import Navigation from '@components/Navigation';
import Link from 'next/link';

type Project = {
	title: string;
	url: string;
};

const projects: Project[] = [
	{
		title: 'Pomodoro Spotify',
		url: 'https://pomodoro-spotify.vercel.app/'
	},
	{
		title: 'Minesweeper',
		url: 'https://minesweeper-nu.vercel.app/'
	}
	// {
	// 	title: 'LINE TODAY demo',
	// 	url: 'https://line-today-demo.vercel.app/'
	// },
	// {
	// 	title: `I CAN'T SLEEP T-T`,
	// 	url: 'https://es-deprived-system.vercel.app/'
	// },
	// {
	// 	title: 'Not a Working Calculator',
	// 	url: 'https://simple-calculator-gamma.vercel.app/'
	// }
];

export default async function ProjectsPage() {
	return (
		<>
			<Navigation active="projects" />

			<main className={'mt-10'}>
				<h1 className={'bold mb-5 text-3xl'}>Projects</h1>
				<p className={'mb-5 text-gray-400'}>
					Here listed my personal projects. I am currently working on a few
					projects, so I will update this page as I make progress. These
					projects are mostly for my personal learning purposes and for fun. If
					you are interested in my work, feel free to check out my GitHub
					profile.
				</p>

				<div className={`grid grid-cols-2 gap-4`}>
					{projects.map((project, index) => {
						return (
							<Link
								href={project.url}
								target="_blank"
								key={index}
								className={`block w-full flex-col rounded-md border border-gray-600 px-4 py-2 md:flex-row`}
							>
								<div
									className={`rounded-lg  py-4 text-left  hover:shadow-lg md:mb-0 md:mr-auto`}
								>
									<h3
										className={`mb-1 break-normal text-2xl font-bold hover:text-gray-400`}
									>
										{project.title}
									</h3>
								</div>
							</Link>
						);
					})}
				</div>
			</main>
		</>
	);
}
