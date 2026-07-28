"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternateLocalePath, localeFromPath } from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }) {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const target = alternateLocalePath(pathname);
  const nextLocale = locale === "es" ? "EN" : "ES";
  const nextFlag = locale === "es" ? "🇬🇧" : "🇪🇸";

  return (
    <Link
      href={target}
      hrefLang={locale === "es" ? "en" : "es-ES"}
      aria-label={locale === "es" ? "View this page in English" : "Ver esta página en español"}
      className="group inline-flex items-center justify-center gap-1.5"
    >
      <span aria-hidden="true" className="text-[14px] leading-none tracking-normal transition-transform group-hover:scale-110">{nextFlag}</span>
      <span className={compact
        ? "inline-flex items-center justify-center rounded-full border border-line px-3 py-2 text-[12px] font-bold tracking-[.12em] text-leaf-d group-hover:bg-leaf/10 transition"
        : "inline-flex items-center justify-center rounded-full border border-line px-3.5 py-2 text-[12px] font-bold tracking-[.12em] text-leaf-d group-hover:bg-leaf/10 transition"
      }>{nextLocale}</span>
    </Link>
  );
}
