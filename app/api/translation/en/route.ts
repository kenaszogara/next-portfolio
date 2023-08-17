import { NextResponse } from 'next/server';

export async function GET() {
	const data = {
		title: 'hello'
	};

	return NextResponse.json(data);
}
