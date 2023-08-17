import { NextResponse } from 'next/server';

export async function GET() {
	const data = {
		title: 'kanninia'
	};

	return NextResponse.json(data);
}
