"use client";

import { useEffect } from "react";
import { LANGUAGES } from "@/lib/i18n";

export function LocaleDocument({ children, locale }) {
  const language = LANGUAGES[locale].tag;
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = language;
    return () => { document.documentElement.lang = previous; };
  }, [language]);
  return <div lang={language}>{children}</div>;
}
