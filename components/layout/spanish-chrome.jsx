"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/wa-fab";

const IMMERSIVE_ROUTES = new Set(["/es/start", "/es/quiz", "/es/quiz-discovery"]);

export function SpanishChrome({ children }) {
  const pathname = usePathname() || "/es";
  useEffect(() => {
    document.documentElement.lang = "es-ES";
    return () => { document.documentElement.lang = "en"; };
  }, []);
  if (IMMERSIVE_ROUTES.has(pathname)) return children;

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="es" />
      <main className="flex-1">{children}</main>
      <Footer locale="es" />
      <WhatsAppFab locale="es" />
    </div>
  );
}
