'use client';

import { Editor, EditorProps } from '@monaco-editor/react';
import { useState } from 'react';

type CodeEditorProps = {
	code?: string;
	classNames?: string;
} & EditorProps;

export default function CodeEditor({
	code,
	className,
	language,
	height,
	width,
	...rest
}: CodeEditorProps) {
	const [value, setValue] = useState(code || '');

	const handleEditorChange = (value) => {
		setValue(value);
	};

	return (
		<div className="overlay shadow-4xl h-full w-full overflow-hidden rounded-md">
			<Editor
				height={height ?? '85vh'}
				width={width ?? '100%'}
				language={language || 'javascript'}
				value={value}
				onChange={handleEditorChange}
				{...rest}
			/>
		</div>
	);
}
