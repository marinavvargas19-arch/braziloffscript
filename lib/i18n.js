export const DEFAULT_LOCALE = "en";
export const SPANISH_LOCALE = "es";

export const LANGUAGES = {
  en: { tag: "en", name: "English", label: "Language" },
  es: { tag: "es-ES", name: "Español", label: "Idioma" },
  pt: { tag: "pt-BR", name: "Português", label: "Idioma" },
  fr: { tag: "fr", name: "Français", label: "Langue" },
  it: { tag: "it", name: "Italiano", label: "Lingua" },
};

export const SUPPORTED_LOCALES = Object.keys(LANGUAGES);

export function localeFromPath(pathname = "/") {
  const prefix = pathname.split("/")[1];
  return SUPPORTED_LOCALES.includes(prefix) ? prefix : DEFAULT_LOCALE;
}

export function unlocalizedPath(pathname = "/") {
  return localeFromPath(pathname) === DEFAULT_LOCALE
    ? pathname
    : pathname.replace(/^\/[^/]+/, "") || "/";
}

export function localePath(path = "/", locale = DEFAULT_LOCALE) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE || !SUPPORTED_LOCALES.includes(locale)) return normalized;
  if (localeFromPath(normalized) === locale) return normalized;
  if (locale !== SPANISH_LOCALE && /^\/blog(?:[/?#]|$)/.test(normalized)) return normalized;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function alternateLocalePath(pathname = "/") {
  const target = localeFromPath(pathname) === SPANISH_LOCALE ? DEFAULT_LOCALE : SPANISH_LOCALE;
  return localePath(unlocalizedPath(pathname), target);
}

export function languageAlternates(path) {
  const absolute = path.startsWith("https://") ? new URL(path) : null;
  const route = unlocalizedPath(absolute?.pathname || path);
  return Object.fromEntries(SUPPORTED_LOCALES.map(locale => [
    LANGUAGES[locale].tag, (absolute?.origin || "") + localePath(route, locale),
  ]));
}

export const homeLanguages = languageAlternates("/");
