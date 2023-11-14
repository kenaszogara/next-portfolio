type PropsType = {
	text: string;
};

export default function Tag({ text }: PropsType) {
	return (
		<div className="mr-1 whitespace-nowrap rounded-md border border-gray-400 bg-gray-700 px-2 py-1 shadow-md">
			{text}
		</div>
	);
}
