'use client';

type CardProps = {
	url: string;
	children: JSX.Element | JSX.Element[];
};

export default function Card({ url, children }: CardProps) {
	return (
		<div
			className="border-gray-30 flex cursor-pointer items-center gap-0 rounded-md border px-5 py-4"
			onClick={() => {
				window.open(url, 'blank');
			}}
		>
			{children}
		</div>
	);
}
