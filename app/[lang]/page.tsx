import Navigation from '@components/Navigation';
import PageWrapper from '@components/PageWrapper';
import { Button } from '@ui/button';

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
							<span className="font-bold text-white">Frontend</span>,&nbsp;
							<span className="font-bold text-white">Backend</span>,&nbsp;
							<span className="font-bold text-white">DevOps</span>,&nbsp;
							<span className="font-bold text-white">SEO</span>,&nbsp;and
							<br />
							<span className="font-bold text-white">Designing UI/UX</span>
						</p>
					</div>

					<div className="flex justify-center gap-4">
						<Button variant="secondary" className="w-[140px]">
							Hire me
						</Button>
						<Button variant="outline" className="w-[140px]">
							Get my resume
						</Button>
					</div>
				</main>
			</PageWrapper>

			<footer className="fixed bottom-0 flex w-full justify-center gap-[150px] p-10">
				<a href="https://www.linkedin.com/in/kenas-zogara/">
					<p className="text-gray-300">LinkedIn</p>
				</a>
				<a href="https://github.com/kenaszogara">
					<p className="text-gray-300">Github</p>
				</a>
			</footer>
		</>
	);
}
