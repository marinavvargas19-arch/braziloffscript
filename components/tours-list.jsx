"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, inputCls } from "@/components/ui/field";
import { TOURS, CATEGORIES, DESTINATIONS, DEST_TRIP } from "@/lib/data";

function cn(...classes) { return classes.filter(Boolean).join(" "); }

const EXPLORE_TOUR_SLUGS = [
  "best-of-brazil-10-days",
  "lencois-women-trek",
  "rio-for-women",
  "amazon-women-exploration",
  "honeymoon-brazil",
];

// Journeys highlighted in the "Women Who Explore" filter
const WOMEN_WHO_EXPLORE = [
  "lencois-women-trek",
  "rio-for-women",
  "amazon-women-exploration",
];

const FILTER_GROUPS = [
  {
    v: "all",
    l: "All journeys",
    slugs: null,
  },
  {
    v: "beyond-the-obvious",
    l: "Beyond the Obvious",
    slugs: ["bahia", "rio", "amazon", "best-of-brazil-10-days"],
  },
  {
    v: "the-explorer",
    l: "The Explorer",
    slugs: ["jalapao", "pantanal", "foz"],
  },
  {
    v: "paradise-found",
    l: "Paradise Found",
    slugs: ["honeymoon-brazil", "noronha", "lencois", "northeast"],
  },
  {
    v: "women-who-explore",
    l: "Women Who Explore",
    slugs: WOMEN_WHO_EXPLORE,
  },
  {
    v: "honeymoon",
    l: "Honeymoon",
    slugs: ["honeymoon-brazil"],
  },
];

// Badge variant per collection colour
function catBadgeVariant(color) {
  if (color === "terra") return "terraSolid";
  if (color === "leaf")  return "leafSolid";
  if (color === "azul")  return "azulSolid";
  return "goldSolid";
}

export default function ToursList() {
  const [q, setQ]         = useState("");
  const [cat, setCat]     = useState("all");
  const [dur, setDur]     = useState("all");
  const [price, setPrice] = useState(8000);
  const [sort, setSort]   = useState("featured");

  // Explore destinations highlights Signature Journeys plus selected packaged routes.
  const ALL = useMemo(() => {
    const fromDest = DESTINATIONS.map(d => {
      const a = DEST_TRIP[d.slug] || {};
      return {
        slug: d.slug,
        title: d.name,
        category: d.category,
        days: a.days || 7,
        price: a.price || 3500,
        regions: a.regions || [d.region],
        img: d.img,
        blurb: d.blurb,
        tags: [],
      };
    });
    const selectedTours = EXPLORE_TOUR_SLUGS
      .map(slug => TOURS.find(t => t.slug === slug))
      .filter(Boolean);
    return [...fromDest, ...selectedTours];
  }, []);

  const filtered = useMemo(() => {
    let arr = ALL.filter(t => {
      const group = FILTER_GROUPS.find(g => g.v === cat);
      if (group?.slugs && !group.slugs.includes(t.slug)) return false;
      if (t.price > price) return false;
      if (dur === "short" && t.days > 7) return false;
      if (dur === "mid"   && (t.days < 7 || t.days > 10)) return false;
      if (dur === "long"  && t.days < 10) return false;
      if (q) {
        const ql = q.toLowerCase();
        if (!(
          t.title.toLowerCase().includes(ql) ||
          t.regions.join(" ").toLowerCase().includes(ql) ||
          (t.tags || []).join(" ").toLowerCase().includes(ql)
        )) return false;
      }
      return true;
    });
    if (sort === "price-asc")      arr = [...arr].sort((a, b) => a.price - b.price);
    if (sort === "price-desc")     arr = [...arr].sort((a, b) => b.price - a.price);
    if (sort === "duration-asc")   arr = [...arr].sort((a, b) => a.days - b.days);
    if (sort === "duration-desc")  arr = [...arr].sort((a, b) => b.days - a.days);
    return arr;
  }, [q, cat, dur, price, sort, ALL]);

  const collectionFilters = FILTER_GROUPS;
  const activeCollection = collectionFilters.find(group => group.v === cat);

  return (
    <>
      {/* Header */}
      <section className="bg-paper border-b border-line">
        <Container className="py-12 md:py-16">
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">All Journeys</div>
          <h1 className="font-serif text-[clamp(30px,3.6vw,48px)] leading-[1.08] text-ink max-w-3xl">
            A starting point for inspiration.{" "}
            <em className="not-italic text-leaf">A journey designed around you.</em>
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft text-[16px] leading-relaxed">
            Explore curated itineraries across Brazil, then let us tailor every detail to your travel style, pace, and interests.
          </p>
        </Container>
      </section>

      {/* Filters + Grid */}
      <section className="py-12">
        <Container className="grid lg:grid-cols-12 gap-10">

          {/* Sidebar filters */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <div className="bg-paper border border-line rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-ink">Filters</h3>
                  <button
                    onClick={() => { setQ(""); setCat("all"); setDur("all"); setPrice(8000); setSort("featured"); }}
                    className="text-[12.5px] text-terra hover:underline"
                  >
                    Reset
                  </button>
                </div>

                <Field icon={<Search size={16}/>} className="mb-5">
                  <input
                    className={inputCls}
                    placeholder="Search regions, tags…"
                    value={q}
                    onChange={e => setQ(e.target.value)}
                  />
                </Field>

                <div className="mb-5">
                  <div className="text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Collection</div>
                  <div className="flex flex-col gap-1.5">
                    {collectionFilters.map(o => (
                      <button
                        key={o.v}
                        onClick={() => setCat(o.v)}
                        className={cn(
                          "text-left px-3 py-2 rounded-lg text-[13.5px] transition",
                          cat === o.v ? "bg-leaf text-cream-50" : "text-ink-soft hover:bg-leaf/8"
                        )}
                      >
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Duration</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { v: "all",   l: "Any" },
                      { v: "short", l: "≤ 7 days" },
                      { v: "mid",   l: "7–10 days" },
                      { v: "long",  l: "10+ days" },
                    ].map(o => (
                      <button
                        key={o.v}
                        onClick={() => setDur(o.v)}
                        className={cn(
                          "px-3 py-2 rounded-lg text-[13px] transition border",
                          dur === o.v
                            ? "bg-leaf border-leaf text-cream-50"
                            : "border-line text-ink-soft hover:border-leaf"
                        )}
                      >
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </aside>

          {/* Tour grid */}
          <div className="lg:col-span-9">
            <div className="flex justify-between items-center mb-6">
              <div className="text-[14px] text-muted">
                {filtered.length} journey{filtered.length === 1 ? "" : "s"} found
              </div>
              <div className="relative">
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="appearance-none bg-paper border border-line rounded-full pl-4 pr-9 py-2 text-[13.5px] font-semibold text-ink cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="duration-asc">Duration (short → long)</option>
                  <option value="duration-desc">Duration (long → short)</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink">
                  <ChevronDown size={16}/>
                </span>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-paper border border-line rounded-2xl p-10 text-center">
                <h3 className="font-serif text-2xl text-ink">Nothing matches just yet.</h3>
                <p className="text-ink-soft mt-2">Try widening the filters — or let us design something completely custom.</p>
                <Button href="/start" className="mt-5">Plan something custom</Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5 items-start">
                {filtered.map(t => {
                  const c = CATEGORIES.find(c => c.slug === t.category);
                  const showActiveCollection = activeCollection?.v !== "all";
                  const activeCollectionVariant = c?.slug === activeCollection?.v
                    ? catBadgeVariant(c.color)
                    : "goldSolid";
                  return (
                    <Link key={t.slug} href={`/tours/${t.slug}`} className="group h-full">
                      <Card className="h-full flex flex-col">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={t.img}
                            alt=""
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                            <Badge variant="inkSolid">{t.days} days</Badge>
                            {showActiveCollection && (
                              <Badge variant={activeCollectionVariant}>
                                {activeCollection.l}
                              </Badge>
                            )}
                            {c && c.slug !== activeCollection?.v && (
                              <Badge variant={catBadgeVariant(c.color)}>{c.name}</Badge>
                            )}
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="font-serif text-[24px] text-ink leading-tight">{t.title}</h3>
                          <div className="text-[12.5px] text-muted mt-1.5">{t.regions.join(" · ")}</div>
                          <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{t.blurb}</p>
                          {t.tags && t.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-4">
                              {t.tags.map(tag => (
                                <span key={tag} className="text-[11px] tracking-wider uppercase px-2 py-1 rounded-full bg-leaf/10 text-leaf-d font-semibold">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="mt-auto pt-5 border-t border-line flex items-center justify-end">
                            <span className="inline-flex items-center gap-1.5 text-terra font-semibold text-[14px] group-hover:gap-2.5 transition-all">
                              Discover <ArrowRight size={16}/>
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
