import Navigation from '@components/Navigation';
import PageWrapper from '@components/PageWrapper';
import { Button } from '@ui/button';
import FlickeringText from 'app/[lang]/FlickeringText';

export default async function Home() {
	return (
		<>
			<Navigation active="home" />

			<PageWrapper className="flex flex-col items-center justify-center">
				<main>
					<div className="mb-10 text-center">
						<p className="leading-none">Hi, my name is</p>
						<h1 className={'text-[48px]/15 font-semibold'}>Kenas Zogara</h1>
						<p className={'text-accent text-[32px] leading-relaxed'}>
							I build things for the web
						</p>
					</div>

					<div className="mb-10 max-w-[448px]">
						<p className="text-center text-[24px] text-gray-300">
							I consider myself a modern web developer with hands-on experience
							in
							<br />
							<FlickeringText order={1} repeatDelay={5}>
								Frontend
							</FlickeringText>
							,&nbsp;
							<FlickeringText order={2} repeatDelay={5}>
								Backend
							</FlickeringText>
							,&nbsp;
							<FlickeringText order={3} repeatDelay={5}>
								DevOps
							</FlickeringText>
							,&nbsp;
							<FlickeringText order={4} repeatDelay={5}>
								SEO
							</FlickeringText>
							,&nbsp;and
							<br />
							<FlickeringText order={5} repeatDelay={5}>
								Designing UI/UX
							</FlickeringText>
						</p>
					</div>

					<div className="flex justify-center gap-4">
						<a href="mailto:kenaszogara@live.com">
							<Button variant="secondary" className="w-[140px]">
								Hire me
							</Button>
						</a>
						<a
							href="/files/kenas_zogara_cv_05_2025.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="outline" className="w-[140px]">
								Get my resume
							</Button>
						</a>
					</div>
				</main>
			</PageWrapper>

			<footer className="fixed bottom-0 flex w-full justify-center gap-[150px] p-10">
				<a href="https://www.linkedin.com/in/kenas-zogara/" target="_blank">
					<p className="text-gray-300">LinkedIn</p>
				</a>
				<a href="https://github.com/kenaszogara" target="_blank">
					<p className="text-gray-300">Github</p>
				</a>
			</footer>
		</>
	);
}
