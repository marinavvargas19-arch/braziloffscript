"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { localePath } from "@/lib/i18n";

const COPY = {
  en: {
    nav: [
      { href: "/", label: "Home", key: "home" },
      { href: "/journeys", label: "Signature Journeys", key: "journeys" },
      { href: "/tours", label: "Explore Destinations", key: "tours" },
      { href: "/about", label: "About Us", key: "about" },
    ],
    quiz: "Take the Travel Quiz",
    start: "Start your journey",
    find: "Find my journey",
    contact: "Contact us",
    menu: "Menu",
  },
  es: {
    nav: [
      { href: "/", label: "Inicio", key: "home" },
      { href: "/journeys", label: "Viajes exclusivos", key: "journeys" },
      { href: "/tours", label: "Explorar destinos", key: "tours" },
      { href: "/about", label: "Quiénes somos", key: "about" },
    ],
    quiz: "Haz el test de viaje",
    start: "Empieza tu viaje",
    find: "Encuentra mi viaje",
    contact: "Contacta con nosotros",
    menu: "Menú",
  },
};

export function Header({ locale = "en" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const copy = COPY[locale] || COPY.en;
  const localizedPath = pathname === "/es" ? "/" : pathname.replace(/^\/es(?=\/)/, "");
  const current = (() => {
    if (localizedPath === "/") return "home";
    if (localizedPath.startsWith("/journeys") || localizedPath.startsWith("/destinations")) return "journeys";
    if (localizedPath.startsWith("/tours")) return "tours";
    if (localizedPath.startsWith("/about")) return "about";
    if (localizedPath.startsWith("/blog")) return "blog";
    return "";
  })();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md border-b border-line/60">
      <Container className="flex items-center gap-6 py-3.5">
        <Link href={localePath("/", locale)} className="flex items-center gap-2.5 leading-none -my-2">
          <Image src="/logo.png" alt="Brazil Off Script" width={240} height={76} priority style={{ height: 76, width: "auto" }} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-2">
          {copy.nav.map((n) => (
            <Link
              key={n.key}
              href={localePath(n.href, locale)}
              className={[
                "px-3.5 py-2 rounded-full text-[14px] font-medium tracking-wide transition",
                current === n.key ? "bg-leaf/10 text-leaf-d" : "text-ink-soft hover:bg-leaf/8 hover:text-leaf-d",
              ].join(" ")}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href={localePath("/quiz-discovery", locale)} className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[13px] font-semibold text-leaf-d hover:bg-leaf/10 transition">
            <Sparkles size={16}/> {copy.quiz}
          </Link>
          <Button href={localePath("/start", locale)} className="!px-5 !py-2.5 text-[13.5px]">{copy.start}</Button>
          <div className="hidden lg:flex items-center border-l border-line/80 pl-3 ml-1">
            <LanguageSwitcher compact />
          </div>
          <button
            onClick={() => setOpen(true)}
            aria-label={copy.menu}
            className="lg:hidden w-10 h-10 rounded-full bg-leaf/8 hover:bg-leaf/15 flex items-center justify-center text-leaf-d"
          >
            <Menu size={20} />
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-cream">
          <Container className="flex items-center justify-between py-3.5">
            <Link href={localePath("/", locale)} className="flex items-center gap-2.5 leading-none">
              <Image src="/logo.png" alt="Brazil Off Script" width={200} height={64} style={{ height: 64, width: "auto" }} />
            </Link>
            <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-full bg-leaf/8 flex items-center justify-center text-leaf-d">
              <X size={20} />
            </button>
          </Container>
          <Container className="pt-6">
            <div className="flex flex-col gap-1">
              {copy.nav.map((n) => (
                <Link key={n.key} href={localePath(n.href, locale)} className="py-3.5 border-b border-line/60 font-serif text-[26px] text-ink">
                  {n.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Button href={localePath("/start", locale)} className="w-full justify-center">{copy.find} <ArrowRight size={16} /></Button>
              <Button variant="ghost" href={localePath("/contact", locale)} className="w-full justify-center">{copy.contact}</Button>
            </div>
            <div className="mt-7 pt-5 border-t border-line/60 flex items-center justify-between">
              <span className="text-[12px] uppercase tracking-[.16em] font-semibold text-ink-soft">
                {locale === "es" ? "Idioma" : "Language"}
              </span>
              <LanguageSwitcher />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
