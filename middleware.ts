import acceptLanguage from 'accept-language';
import { NextResponse } from 'next/server';
import { fallbackLng, languages } from './i18n/settings';

acceptLanguage.languages(languages);

export const config = {
	// matcher: '/:lng*'
	/*
	 * Match all request paths except for the ones starting with:
	 * - api (API routes)
	 * - _next/static (static files)
	 * - _next/image (image optimization files)
	 * - favicon.ico (favicon file)
	 * - images (public folder)
	 */
	matcher: [
		'/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|images).*)'
	]
};

const cookieName = 'i18next';

export function middleware(req) {
	let lng;
	if (req.cookies.has(cookieName))
		lng = acceptLanguage.get(req.cookies.get(cookieName).value);
	if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
	if (!lng) lng = fallbackLng;

	// Redirect if lng in path is not supported
	if (
		!languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
		!req.nextUrl.pathname.startsWith('/_next')
	) {
		return NextResponse.redirect(
			new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
		);
	}

	if (req.headers.has('referer')) {
		const refererUrl = new URL(req.headers.get('referer'));
		const lngInReferer = languages.find((l) =>
			refererUrl.pathname.startsWith(`/${l}`)
		);
		const response = NextResponse.next();

		if (lngInReferer) response.cookies.set(cookieName, lngInReferer);

		return response;
	}

	return NextResponse.next();
}
