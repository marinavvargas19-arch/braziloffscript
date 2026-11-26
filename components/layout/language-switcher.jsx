"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { LANGUAGES, localeFromPath, localePath, unlocalizedPath } from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }) {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const path = unlocalizedPath(pathname);

  return (
    <details key={pathname} className="relative">
      <summary aria-label={LANGUAGES[locale].label} className="flex list-none cursor-pointer items-center gap-1.5 rounded-full border border-line px-3 py-2 text-sm font-bold text-leaf-d hover:bg-leaf/10 [&::-webkit-details-marker]:hidden">
        {compact ? locale.toUpperCase() : LANGUAGES[locale].name}<ChevronDown size={14} aria-hidden="true" />
      </summary>
      <ul className="absolute right-0 z-50 mt-1 min-w-36 rounded-xl border border-line bg-cream p-1.5 shadow-lg">
        {Object.entries(LANGUAGES).map(([code, language]) => {
          const target = localePath(path, code);
          const href = code !== "en" && localeFromPath(target) !== code ? localePath("/", code) : target;
          return (
            <li key={code}>
              <Link href={href} hrefLang={language.tag} lang={language.tag} aria-current={code === locale ? "true" : undefined} className="block rounded-lg px-3 py-2 text-sm text-leaf-d hover:bg-leaf/10 aria-[current=true]:font-bold">
                {language.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
