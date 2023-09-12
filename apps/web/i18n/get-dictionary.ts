import 'server-only';
import type { i18n, Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the defalt import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default)
};

// export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export const getDictionary = async (locale: Local) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();