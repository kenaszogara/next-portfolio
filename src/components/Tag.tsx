type PropsType = {
	text: string;
};

export default function Tag({ text }: PropsType) {
	return (
		<div className="bg-primary border-secondary mr-1 whitespace-nowrap rounded-md border px-2 py-1 text-white shadow-md">
			{text}
		</div>
	);
}
