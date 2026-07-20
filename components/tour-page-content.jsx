"use client";
import { useState } from "react";
import Link from "next/link";
import { Clock, Users, Leaf, Shield, Check } from "lucide-react";
import { Container, SectionHead } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { TOURS } from "@/lib/data";
import BookingPanel from "@/components/booking-panel";
import ItineraryAccordion from "@/components/itinerary-accordion";

function cn(...classes) { return classes.filter(Boolean).join(" "); }

export default function TourPageContent({ tour, cat, dayPlanBase }) {
  const [vIdx, setVIdx] = useState(0);

  // If this tour has duration variants (e.g. Bahia 10 vs 15 days)
  const variant = tour.variants ? tour.variants[vIdx] : null;
  const view    = variant ? { ...tour, ...variant } : tour;

  // Day plan: variant overrides, then slug-specific, then generated
  const dayPlan = variant?.dayPlan ?? dayPlanBase;
  const staysLabel = view.regions.join(" · ");

  return (
    <Container className="grid lg:grid-cols-12 gap-10 pt-4 pb-24">
      <div className="lg:col-span-8">

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)]">
          <img src={view.img} alt="" className="w-full h-full object-cover"/>
        </div>

        {/* Title + meta */}
        <div className="mt-10">
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">{cat?.name}</div>
          <h1 className="font-serif text-[clamp(34px,4.5vw,56px)] leading-[1.05] text-ink">{tour.title}</h1>
          {view.tagline && (
            <p className="mt-2 font-serif italic text-[clamp(21px,2.4vw,28px)] text-leaf">{view.tagline}</p>
          )}
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-ink-soft">
            <span className="flex items-center gap-2"><Clock size={16}/> {view.days} days</span>
            <span className="flex items-center gap-2"><Users size={16}/> Private trip</span>
            <span className="flex items-center gap-2"><Leaf size={16}/> Sustainable stays</span>
            <span className="flex items-center gap-2"><Shield size={16}/> Financially protected</span>
          </div>

          {/* Journey variant selector */}
          {tour.variants && (
            <div className="mt-7 bg-paper border border-line rounded-2xl p-5">
              <div className="text-[11px] tracking-[.16em] uppercase text-muted font-bold mb-3">{tour.selectorLabel || "Choose your pace"}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tour.variants.map((v, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setVIdx(i)}
                    className={cn(
                      "text-left rounded-xl border p-4 transition",
                      vIdx === i
                        ? "bg-leaf border-leaf text-cream-50 shadow-[0_10px_24px_-14px_rgba(25,40,30,.5)]"
                        : "bg-cream-50 border-line text-ink hover:border-leaf"
                    )}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-serif text-[24px] leading-none">{v.label}</span>
                      <span className={cn(
                        "text-[11px] tracking-[.14em] uppercase font-bold",
                        vIdx === i ? "text-cream-50/80" : "text-terra"
                      )}>{v.sub}</span>
                    </div>
                    <div className={cn("mt-2 text-[13px]", vIdx === i ? "text-cream-50/85" : "text-muted")}>
                      {v.note}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Intro */}
          <p className="mt-7 text-[18px] leading-[1.7] text-ink-soft max-w-2xl">
            {view.intro ? (
              view.intro
            ) : (
              <><strong className="text-ink">Discover the heart of Brazil</strong> on a journey that blends urban energy with serene escapes. This immersive trip invites you to explore iconic regions, diving deep into the local culture and meeting the people who make this country so fascinating. Between <strong className="text-ink">sustainable stays and guided excursions through lush nature</strong>, you will gain a genuine perspective on Brazil&apos;s many layers.</>
            )}
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8 border border-line bg-paper rounded-2xl overflow-hidden">
          {[
            { k: view.days,                                     v: "days" },
            { k: "Balanced",                                    v: "pace" },
            { k: staysLabel,                                    v: "stays", compact: true },
            { k: "May–Oct",                                     v: "best season" },
          ].map((s, i) => (
            <div key={i} className={[
              "p-5 border-line",
              i < 3 ? "md:border-r" : "",
              i % 2 === 0 ? "border-r md:border-r" : "",
              i < 2 ? "border-b md:border-b-0" : "",
            ].join(" ")}>
              <div className={cn(
                "font-serif leading-tight text-leaf-d break-words",
                s.compact ? "text-[18px] md:text-[20px]" : "text-[26px]"
              )}>{s.k}</div>
              <div className="text-[11.5px] tracking-[.14em] uppercase text-muted mt-1">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Day by day accordion */}
        <div className="mt-14">
          <SectionHead
            eyebrow="Day by day"
            title="The shape of your days."
            sub="Tap any day to open the details — every detail is fully customizable."
          />
          <ItineraryAccordion days={dayPlan}/>
        </div>

        {/* Included / not included */}
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          <div className="bg-paper border border-line rounded-2xl p-7">
            <h3 className="font-serif text-[22px] text-ink mb-4">Included</h3>
            <ul className="space-y-2.5 text-[14.5px] text-ink-soft">
              {[
                "All private transfers and domestic flights within Brazil",
                "Hand-picked boutique or eco-luxury accommodation",
                "Private local guides for every excursion",
                "24/7 in-country support during your trip",
                "Daily breakfast",
                "Curated experiences booked in advance",
              ].map(x => (
                <li key={x} className="flex gap-3">
                  <span className="text-leaf mt-0.5"><Check size={16}/></span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper border border-line rounded-2xl p-7">
            <h3 className="font-serif text-[22px] text-ink mb-4">Not included</h3>
            <ul className="space-y-2.5 text-[14.5px] text-ink-soft">
              {[
                "International flights to / from Brazil",
                "Travel insurance (we'll recommend trusted providers)",
                "Personal expenses & gratuities",
                "Meals not specifically listed",
                "Optional add-on experiences",
              ].map(x => (
                <li key={x} className="flex gap-3">
                  <span className="text-muted mt-0.5">×</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related journeys */}
        <div className="mt-16">
          <SectionHead eyebrow="You might also love" title="Related journeys."/>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {TOURS.filter(x => x.slug !== tour.slug).slice(0, 3).map(t => (
              <Link key={t.slug} href={`/tours/${t.slug}`} className="group">
                <Card>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={t.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt=""/>
                  </div>
                  <div className="p-5">
                    <div className="text-[11.5px] tracking-[.16em] uppercase text-terra font-semibold">{t.days} days</div>
                    <h4 className="font-serif text-[19px] mt-1.5 text-ink">{t.title}</h4>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Booking panel */}
      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <BookingPanel tour={view}/>
        </div>
      </aside>
    </Container>
  );
}
