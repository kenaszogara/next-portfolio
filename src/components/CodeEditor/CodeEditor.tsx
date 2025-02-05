'use client';

import { Editor, EditorProps } from '@monaco-editor/react';
import { Button } from '@ui/button';
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
		<div className="flex gap-3">
			<div className="overlay shadow-4xl h-full w-full overflow-hidden rounded-md">
				<Editor
					height={height ?? '80vh'}
					width={width ?? '100%'}
					language={language || 'javascript'}
					value={value}
					onChange={handleEditorChange}
					{...rest}
				/>
			</div>

			<div>
				<div className={'mb-8  rounded-md border border-white px-4 py-4'}>
					console here
				</div>
				<Button variant={'outline'}>Execute</Button>
			</div>
		</div>
	);
}
