import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Users, Leaf, Shield, Check } from "lucide-react";
import { Container, SectionHead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TOURS, DESTINATIONS, DEST_TRIP, CATEGORIES, FULL_ITIN, BAHIA_ITIN, BAHIA_EXT_ITIN, buildLightItin } from "@/lib/data";
import BookingPanel from "@/components/booking-panel";
import ItineraryAccordion from "@/components/itinerary-accordion";

// Resolve a slug to a unified tour object from either TOURS or DESTINATIONS
function resolveTour(slug) {
  // Check packaged tours first
  const t = TOURS.find(x => x.slug === slug);
  if (t) return t;
  // Fall back to regional destinations
  const d = DESTINATIONS.find(x => x.slug === slug);
  if (!d) return null;
  const a = DEST_TRIP[d.slug] || { days: 7, price: 3500, regions: [d.region] };
  return {
    slug: d.slug,
    title: d.name,
    days: a.days,
    price: a.price,
    category: d.category,
    regions: a.regions,
    img: d.img,
    intro: a.intro,
    blurb: d.blurb,
    tags: [],
  };
}

export function generateStaticParams() {
  const tourSlugs = TOURS.map(t => ({ slug: t.slug }));
  const destSlugs = DESTINATIONS.map(d => ({ slug: d.slug }));
  return [...tourSlugs, ...destSlugs];
}

export function generateMetadata({ params }) {
  const t = resolveTour(params.slug);
  return { title: t ? `${t.title} — Brazil Off Script` : "Journey" };
}

export default function TourPage({ params }) {
  const tour = resolveTour(params.slug);
  if (!tour) return notFound();

  const cat = CATEGORIES.find(c => c.slug === tour.category);

  const dayPlan =
    tour.slug === "best-of-brazil-10-days" ? FULL_ITIN :
    tour.slug === "bahia"                  ? BAHIA_ITIN :
    tour.slug === "bahia-extended"         ? BAHIA_EXT_ITIN :
    buildLightItin(tour);

  return (
    <>
      <Container>
        <div className="pt-6 text-[13px] text-muted">
          <Link href="/" className="text-leaf underline underline-offset-2">Home</Link>
          <span className="mx-2 opacity-50">/</span>
          <Link href="/tours" className="text-leaf underline underline-offset-2">All Journeys</Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-ink-soft">{tour.title}</span>
        </div>
      </Container>

      <Container className="grid lg:grid-cols-12 gap-10 pt-4 pb-24">
        <div className="lg:col-span-8">

          {/* Hero image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)]">
            <img src={tour.img} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Title + meta */}
          <div className="mt-10">
            <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">{cat?.name}</div>
            <h1 className="font-serif text-[clamp(34px,4.5vw,56px)] leading-[1.05] text-ink">{tour.title}</h1>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-ink-soft">
              <span className="flex items-center gap-2"><Clock size={16}/> {tour.days} days</span>
              <span className="flex items-center gap-2"><Users size={16}/> Private trip</span>
              <span className="flex items-center gap-2"><Leaf size={16}/> Sustainable stays</span>
              <span className="flex items-center gap-2"><Shield size={16}/> Financially protected</span>
            </div>

            <p className="mt-7 text-[18px] leading-[1.7] text-ink-soft max-w-2xl">
              {tour.intro ? (
                tour.intro
              ) : (
                <><strong className="text-ink">Discover the heart of Brazil</strong> on a journey that blends urban energy with serene escapes. This immersive trip invites you to explore iconic regions, diving deep into the local culture and meeting the people who make this country so fascinating. Between <strong className="text-ink">sustainable stays and guided excursions through lush nature</strong>, you will gain a genuine perspective on Brazil&apos;s many layers.</>
              )}
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-8 border border-line bg-paper rounded-2xl overflow-hidden">
            {[
              { k: `${tour.days}d`,                        v: "duration" },
              { k: "Balanced",                             v: "pace" },
              { k: `${Math.max(2, tour.regions.length - 1)}`, v: "hotel changes" },
              { k: "May–Oct",                              v: "best season" },
            ].map((s, i) => (
              <div key={i} className={[
                "p-5 border-line",
                i < 3 ? "md:border-r" : "",
                i % 2 === 0 ? "border-r md:border-r" : "",
                i < 2 ? "border-b md:border-b-0" : "",
              ].join(" ")}>
                <div className="font-serif text-[26px] leading-tight text-leaf-d">{s.k}</div>
                <div className="text-[11.5px] tracking-[.14em] uppercase text-muted mt-1">{s.v}</div>
              </div>
            ))}
          </div>

          {/* Day by day — accordion */}
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
                  "All listed meals and tasting experiences",
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
            <BookingPanel tour={tour}/>
          </div>
        </aside>
      </Container>
    </>
  );
}
