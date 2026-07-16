import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/section";
import { TOURS, DESTINATIONS, DEST_TRIP, CATEGORIES, FULL_ITIN, RIO_ITIN, BAHIA_ITIN, BAHIA_EXT_ITIN, AMAZON_ITIN, PANTANAL_ITIN, JALAPAO_ITIN, WOMEN_EXPLORE_ITIN, LENCOIS_WOMEN_TREK_ITIN, RIO_WOMEN_ITIN, AMAZON_WOMEN_ITIN, HONEYMOON_ITIN, FOZ_ITIN, NORONHA_ITIN, buildLightItin } from "@/lib/data";
import TourPageContent from "@/components/tour-page-content";

// Resolve a slug → unified tour object from TOURS or DESTINATIONS
function resolveTour(slug) {
  // Packaged tours
  const t = TOURS.find(x => x.slug === slug);
  if (t) return t;

  // Regional destinations
  const d = DESTINATIONS.find(x => x.slug === slug);
  if (!d) return null;
  const a = DEST_TRIP[d.slug] || { days: 7, price: 3500, regions: [d.region] };

  const base = {
    slug:     d.slug,
    title:    d.name,
    days:     a.days,
    price:    a.price,
    category: d.category,
    regions:  a.regions,
    img:      a.heroImg || d.img,
    intro:    a.intro,
    blurb:    d.blurb,
    tags:     [],
  };

  // Bahia is offered at two paces — surface them as selectable variants
  if (slug === "bahia") {
    const ext = DEST_TRIP["bahia-extended"];
    base.variants = [
      {
        label:   "10 days",
        sub:     "Signature",
        days:    a.days,
        price:   a.price,
        regions: a.regions,
        note:    "Perfect for first-time visitors",
        img:     a.heroImg || d.img,
        intro:   a.intro,
        dayPlan: BAHIA_ITIN,
      },
      {
        label:   "15 days",
        sub:     "Extended",
        days:    ext.days,
        price:   ext.price,
        regions: ext.regions,
        note:    "A slower and deeper exploration",
        img:     ext.heroImg || "/bahia-corumbau.jpg",
        intro:   ext.intro,
        dayPlan: BAHIA_EXT_ITIN,
      },
    ];
  }

  return base;
}

export function generateStaticParams() {
  const tourSlugs = TOURS.map(t => ({ slug: t.slug }));
  // Exclude bahia-extended from static params (merged into bahia page)
  const destSlugs = DESTINATIONS
    .filter(d => d.slug !== "bahia-extended")
    .map(d => ({ slug: d.slug }));
  return [...tourSlugs, ...destSlugs];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = resolveTour(slug);
  return { title: t ? `${t.title} — Brazil Off Script` : "Journey" };
}

export default async function TourPage({ params }) {
  const { slug } = await params;
  const tour = resolveTour(slug);
  if (!tour) return notFound();

  const cat = CATEGORIES.find(c => c.slug === tour.category);

  // Pre-compute the base day plan (for non-variant or fallback)
  const dayPlanBase =
    tour.slug === "best-of-brazil-10-days" ? FULL_ITIN :
    tour.slug === "rio"                    ? RIO_ITIN :
    tour.slug === "bahia"                  ? BAHIA_ITIN :
    tour.slug === "amazon"                 ? AMAZON_ITIN :
    tour.slug === "pantanal"                ? PANTANAL_ITIN :
    tour.slug === "jalapao"                 ? JALAPAO_ITIN :
    tour.slug === "women-who-explore"      ? WOMEN_EXPLORE_ITIN :
    tour.slug === "lencois-women-trek"     ? LENCOIS_WOMEN_TREK_ITIN :
    tour.slug === "rio-for-women"          ? RIO_WOMEN_ITIN :
    tour.slug === "amazon-women-exploration" ? AMAZON_WOMEN_ITIN :
    tour.slug === "honeymoon-brazil"       ? HONEYMOON_ITIN :
    tour.slug === "foz"                    ? FOZ_ITIN :
    tour.slug === "noronha"                ? NORONHA_ITIN :
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

      <TourPageContent tour={tour} cat={cat} dayPlanBase={dayPlanBase}/>
    </>
  );
}
