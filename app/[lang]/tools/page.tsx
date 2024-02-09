import Navigation from '@/components/Navigation';

export default async function ToolPage() {
	return (
		<>
			<Navigation active="tools" />

			<main className={'mt-10'}>
				<h1 className="mb-4 text-2xl">Tools</h1>
				<p>
					This page aims to provide a set of useful snippets for library that I
					used on a day-to-day basis. These snippets act as a tool to improve my
					workflow.
				</p>

				<div>Search...</div>

				<div>List of tools</div>

				<pre>hello world</pre>
			</main>
		</>
	);
}
