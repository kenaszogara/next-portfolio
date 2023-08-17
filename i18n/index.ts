import { createInstance } from 'i18next';
// import resourcesToBackend from 'i18next-resources-to-backend';
import httpBackend, { HttpBackendOptions } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

export const fetchTranslation = async (url) => {
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	return data;
};

const initI18next = async (lng, ns) => {
	const i18nInstance = createInstance();
	await i18nInstance
		.use(httpBackend)
		.use(initReactI18next)
		.init<HttpBackendOptions>({
			backend: {
				loadPath: `http://localhost:3001/api/translation/${lng}?ns=${ns}`,
				request: (options, url, payload, callback) => {
					try {
						fetchTranslation(url).then((result) => {
							callback(null, {
								status: 200,
								data: result
							});
						});
					} catch (error) {
						// console.error(error);
						callback(error, {
							data: {},
							status: 500
						});
					}
				}
			},
			...getOptions(lng, ns)
		});
	return i18nInstance;
};

export async function useTranslation(lng, ns, keyPrefix = undefined) {
	const i18nextInstance = await initI18next(lng, ns);

	return {
		t: i18nextInstance.getFixedT(
			lng,
			Array.isArray(ns) ? ns[0] : ns,
			keyPrefix
		),
		i18n: i18nextInstance
	};
}
