type NextProps = {};

export default function Next(props: NextProps) {
	let index = 0;
	const id = ['0', '1'];

	return (
		<div
			onClick={() => {
				const e = document.getElementById(id[index]);
				e?.scrollIntoView(true);
				index++;
			}}
		>
			Next
		</div>
	);
}
