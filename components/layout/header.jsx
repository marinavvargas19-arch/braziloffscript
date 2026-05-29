"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

const NAV = [
  { href: "/", label: "Home", key: "home" },
  { href: "/journeys", label: "Our Journeys", key: "journeys" },
  { href: "/tours", label: "All Tours", key: "tours" },
  { href: "/about", label: "About", key: "about" },
  { href: "/how-it-works", label: "How it works", key: "how" },
  { href: "/blog", label: "Blog", key: "blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const current = (() => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/journeys") || pathname.startsWith("/destinations")) return "journeys";
    if (pathname.startsWith("/tours")) return "tours";
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/how-it-works") || pathname.startsWith("/faq")) return "how";
    if (pathname.startsWith("/blog")) return "blog";
    return "";
  })();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md border-b border-line/60">
      <Container className="flex items-center gap-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 leading-none -my-2">
          <Image src="/logo.png" alt="Brazil Off Script" width={200} height={64} priority style={{ height: 64, width: "auto" }} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-2">
          {NAV.map((n) => (
            <Link
              key={n.key}
              href={n.href}
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
          <Link href="/quiz" className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[13px] font-semibold text-leaf-d hover:bg-leaf/10 transition">
            <Compass size={16} /> Find my journey
          </Link>
          <Button href="/quiz" className="!px-5 !py-2.5 text-[13.5px]">Start your journey</Button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Menu"
            className="lg:hidden w-10 h-10 rounded-full bg-leaf/8 hover:bg-leaf/15 flex items-center justify-center text-leaf-d"
          >
            <Menu size={20} />
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-cream">
          <Container className="flex items-center justify-between py-3.5">
            <Link href="/" className="flex items-center gap-2.5 leading-none">
              <Image src="/logo.png" alt="Brazil Off Script" width={200} height={64} style={{ height: 64, width: "auto" }} />
            </Link>
            <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-full bg-leaf/8 flex items-center justify-center text-leaf-d">
              <X size={20} />
            </button>
          </Container>
          <Container className="pt-6">
            <div className="flex flex-col gap-1">
              {NAV.map((n) => (
                <Link key={n.key} href={n.href} className="py-3.5 border-b border-line/60 font-serif text-[26px] text-ink">
                  {n.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Button href="/quiz" className="w-full justify-center">Find my journey <ArrowRight size={16} /></Button>
              <Button variant="ghost" href="/contact" className="w-full justify-center">Contact us</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
