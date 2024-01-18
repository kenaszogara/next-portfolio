import Navigation from '@/components/Navigation';
import { Hammer, PaintBucket, Paintbrush } from 'lucide-react';

export default async function ToolPage() {
	return (
		<>
			<Navigation active="tools" />

			<main className={'mt-10'}>
				<h1 className="mb-4 text-2xl">
					This is the tools page. It's still under construction
				</h1>
				<div className="flex gap-2">
					<Hammer className="text-yellow-500" />
					<PaintBucket className="text-red-500" />
					<Paintbrush className="text-blue-500" />
				</div>
			</main>
		</>
	);
}
