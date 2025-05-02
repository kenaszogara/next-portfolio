'use client';

import { format } from 'date-fns';
import Image from 'next/image';

type PostCardProps = {
	tags: string[];
	date: string;
	title: string;
	image: string;
	slug: string;
};

export default function PostCard({
	title,
	date,
	tags,
	image,
	slug
}: PostCardProps) {
	return (
		<div
			className={`relative h-full w-full border border-gray-600 bg-black px-4 py-2 py-4 text-left md:mr-auto md:mb-0 md:h-[413px] md:flex-row`}
		>
			<div className="relative mb-5 pb-[40%] md:pb-[80%]">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover object-center"
				/>
			</div>

			<h2
				className={`mb-1 text-[20px] font-semibold break-normal hover:text-gray-400`}
			>
				{title}
			</h2>

			<p
				className={`mb-3 font-normal text-gray-400 md:absolute md:bottom-[10px]`}
			>
				{format(new Date(date), 'MMM d, yyyy')}
			</p>

			{/* <div className="absolute top-[13px] right-[-13px] z-[-10] h-[413px] border border-gray-600 md:w-[271px]" /> */}
		</div>
	);
}
