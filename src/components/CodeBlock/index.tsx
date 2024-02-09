'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CopyButton = ({ text }: { text: string }) => {
	const [copied, set] = useState<boolean>(false);

	const handleCopyToClipboard = () => {
		navigator.permissions
			.query({ name: 'clipboard-write' as PermissionName })
			.then((result) => {
				if (result.state == 'granted' || result.state == 'prompt') {
					// alert('Write access granted!');

					navigator.clipboard.writeText(text).then(
						() => {
							console.log('Content copied to clipboard:');
							console.log(text);
							/* Resolved - text copied to clipboard successfully */
						},
						() => {
							console.error('Failed to copy');
							/* Rejected - text failed to copy to the clipboard */
						}
					);
				}
			});
	};

	return (
		<div
			className={cn(
				'absolute right-5 top-3 z-10 cursor-pointer rounded-md border border-gray-500 px-2 py-1 hover:bg-gray-700',
				copied ? 'bg-gray-700' : ''
			)}
			onClick={() => {
				set(true);
				handleCopyToClipboard();
				setTimeout(() => {
					set(false);
				}, 1000);
			}}
		>
			{copied ? 'copied!' : 'copy'}
		</div>
	);
};

export default function CodeBlock({
	node,
	inline,
	className,
	children,
	...props
}) {
	const match = /language-(\w+)/.exec(className || '');

	return !inline && match ? (
		<div className="relative">
			<CopyButton text={String(children).replace(/\n$/, '')} />
			<SyntaxHighlighter
				children={String(children).replace(/\n$/, '')}
				style={materialDark}
				language={match[1]}
				showLineNumbers={true}
				className={'rounded-md border border-gray-700 text-base shadow-md'}
				{...props}
			/>
		</div>
	) : !inline && !match ? (
		<div className="relative">
			<CopyButton text={String(children).replace(/\n$/, '')} />
			<SyntaxHighlighter
				children={String(children).replace(/\n$/, '')}
				className={'rounded-md border border-gray-700 text-base shadow-md'}
				style={materialDark}
				{...props}
			/>
		</div>
	) : (
		<code>{children}</code>
	);
}
