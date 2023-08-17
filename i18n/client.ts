'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import {
	UseTranslationOptions,
	initReactI18next,
	useTranslation as useTranslationOrg
} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages } from './settings';
import { fetchTranslation } from './index';

const runsOnServerSide = typeof window === 'undefined';

//
i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init({
		...getOptions(),
		lng: undefined, // let detect the language on client side
		detection: {
			order: ['path', 'htmlTag', 'cookie', 'navigator']
		},
		preload: runsOnServerSide ? languages : [],
		backend: {
			loadPath: (lng, ns) => {
				return `http://localhost:3001/api/translation/${lng}?ns=${ns}`;
			},
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
		}
	});

export function useTranslation(
	lng,
	ns,
	options: UseTranslationOptions<any> = {}
) {
	const ret = useTranslationOrg(ns, options);
	const { i18n } = ret;

	if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
		i18n.changeLanguage(lng);
	} else {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (activeLng === i18n.resolvedLanguage) return;
			setActiveLng(i18n.resolvedLanguage);
		}, [activeLng, i18n.resolvedLanguage]);

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (!lng || i18n.resolvedLanguage === lng) return;
			i18n.changeLanguage(lng);
		}, [lng, i18n]);
	}

	return ret;
}
