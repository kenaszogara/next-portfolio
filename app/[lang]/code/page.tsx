import CodeEditor from '@components/CodeEditor/CodeEditor';

export default function Page() {
	return (
		<div>
			<h1>Coding page</h1>

			<CodeEditor defaultValue='console.log("Hello, world!")' />
		</div>
	);
}
