"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CATEGORIES, DESTINATIONS, DEST_TRIP } from "@/lib/data";

function cn(...classes) { return classes.filter(Boolean).join(" "); }

function catBadgeVariant(color) {
  if (color === "terra") return "terraSolid";
  if (color === "leaf")  return "leafSolid";
  return "azulSolid";
}

export default function JourneysList({ initialCategory }) {
  const [tab, setTab] = useState(
    initialCategory && CATEGORIES.find(c => c.slug === initialCategory) ? initialCategory : "all"
  );
  const list = useMemo(
    () => tab === "all" ? DESTINATIONS : DESTINATIONS.filter(d => d.category === tab),
    [tab]
  );

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="/start-beach.jpg" className="w-full h-full object-cover" alt="Aerial view of a beach in northeastern Brazil"/>
          <div className="absolute inset-0 bg-leaf-d/55"/>
        </div>
        <Container className="relative py-20 md:py-24 text-cream-50">
          <div className="text-[11px] tracking-[.22em] uppercase opacity-85 mb-3">Our Journeys</div>
          <h1 className="font-serif font-medium text-[clamp(32px,4vw,54px)] leading-[1.06] tracking-tight max-w-4xl">
            Brazil — many worlds in one country.
          </h1>
          <p className="mt-5 max-w-2xl text-cream-50/90 text-[16px] leading-relaxed">
            From iconic landscapes to hidden coastal towns, vibrant cities, wild nature, and cultural escapes. We help you design a journey that feels personal, authentic, and unforgettable.
          </p>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="inline-flex p-1 rounded-full bg-paper border border-line flex-wrap">
              {[{ value: "all", label: "All journeys" }, ...CATEGORIES.map(c => ({ value: c.slug, label: c.name }))].map(t => (
                <button
                  key={t.value}
                  onClick={() => setTab(t.value)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition",
                    tab === t.value ? "bg-leaf text-cream-50" : "text-ink-soft hover:text-leaf-d"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="text-[13px] text-muted">{list.length} destinations</div>
          </div>

          {/* Collection description banner */}
          {tab === "all" ? (
            <div className="mb-10 rounded-2xl bg-leaf/[.06] border border-leaf/20 p-7 md:p-9">
              <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-leaf-d mb-2">Collection</div>
              <h2 className="font-serif text-[clamp(28px,3.4vw,40px)] leading-tight text-ink">All Journeys</h2>
              <p className="mt-4 text-ink-soft max-w-3xl text-[16px] leading-relaxed">
                There is no single way to experience Brazil.<br className="hidden md:block"/>
                Explore our signature collections and discover different sides of the country — iconic destinations beyond the obvious, untouched natural wonders, and places that remain beautifully off the beaten path.
              </p>
              <p className="mt-3 text-ink-soft max-w-3xl text-[16px] leading-relaxed font-serif italic">
                Each collection offers inspiration. Every journey is crafted around you.
              </p>
            </div>
          ) : (() => {
            const c = CATEGORIES.find(x => x.slug === tab);
            return (
              <div className={cn(
                "mb-10 rounded-2xl p-7 md:p-9",
                c.color === "terra" ? "bg-terra/10" : c.color === "leaf" ? "bg-leaf/10" : "bg-azul/10"
              )}>
                <div className={cn(
                  "text-[11px] tracking-[.22em] uppercase font-semibold mb-2",
                  c.color === "terra" ? "text-terra-d" : c.color === "leaf" ? "text-leaf-d" : "text-azul"
                )}>
                  Collection
                </div>
                <h2 className="font-serif text-[clamp(28px,3.4vw,40px)] leading-tight text-ink">{c.name}</h2>
                <p className="font-serif italic text-[18px] text-ink-soft mt-2">{c.tagline}</p>
                <p className="mt-3 text-ink-soft max-w-3xl leading-relaxed">{c.desc}</p>
              </div>
            );
          })()}

          {/* Destination cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {list.map(d => {
              const c = CATEGORIES.find(c => c.slug === d.category);
              return (
                <Link key={d.slug} href={`/tours/${d.slug}`} className="group h-full">
                  <Card className="h-full flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={d.img}
                        alt={d.name}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="inkSolid">
                          {d.slug === "bahia"
                            ? "10–15 days"
                            : `${DEST_TRIP[d.slug]?.days ?? "—"} days`}
                        </Badge>
                        <Badge variant={catBadgeVariant(c.color)}>{c.name}</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="text-[12px] tracking-[.12em] uppercase text-muted font-semibold">{d.region}</div>
                      <h3 className="font-serif text-[26px] text-ink mt-1.5 leading-tight">{d.name}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{d.blurb}</p>
                      <div className="mt-auto pt-5 inline-flex items-center gap-1.5 text-terra font-semibold text-[14px] group-hover:gap-2.5 transition-all self-start">
                        Discover <ArrowRight size={16}/>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20 border-t border-line">
        <Container className="text-center">
          <h2 className="font-serif text-[clamp(28px,3.4vw,42px)] leading-tight text-ink">Don&apos;t see your dream Brazil?</h2>
          <p className="mt-4 max-w-xl mx-auto text-ink-soft text-[17px]">
            Tell us what you&apos;re imagining — we design entirely custom journeys, region by region.
          </p>
          <div className="mt-7 flex justify-center gap-3 flex-wrap">
            <Button href="/quiz-discovery" size="lg">Take the 60-second quiz <Sparkles size={16}/></Button>
            <Button variant="ghost" size="lg" href={`/start`}>Talk to an expert</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
