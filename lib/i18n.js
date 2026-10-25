export const DEFAULT_LOCALE = "en";
export const SPANISH_LOCALE = "es";
export const SUPPORTED_LOCALES = [DEFAULT_LOCALE, SPANISH_LOCALE];

export function localePath(path = "/", locale = DEFAULT_LOCALE) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale !== SPANISH_LOCALE) return normalized;
  if (normalized === "/") return "/es";
  return normalized.startsWith("/es/") ? normalized : `/es${normalized}`;
}

export function alternateLocalePath(pathname = "/") {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3) || "/";
  return pathname === "/" ? "/es" : `/es${pathname}`;
}

export function localeFromPath(pathname = "/") {
  return pathname === "/es" || pathname.startsWith("/es/") ? SPANISH_LOCALE : DEFAULT_LOCALE;
}
