import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/section";
import * as EN from "@/lib/data";
import * as ES from "@/lib/data-es";
import { localePath } from "@/lib/i18n";
import TourPageContent from "@/components/tour-page-content";

// Resolve a slug → unified tour object from TOURS or DESTINATIONS
export function resolveTour(slug, data = EN, locale = "en") {
  const { TOURS, DESTINATIONS, DEST_TRIP, BAHIA_ITIN, BAHIA_EXT_ITIN, HONEYMOON_ITIN, HONEYMOON_TRANCOSO_ITIN } = data;
  const es = locale === "es";
  // Packaged tours
  const t = TOURS.find(x => x.slug === slug);
  if (t) {
    if (slug === "honeymoon-brazil") {
      return {
        ...t,
        selectorLabel: es ? "Elige tu luna de miel" : "Choose your honeymoon",
        variants: [
          {
            label: "Trancoso",
            sub: es ? "12 días" : "12 days",
            days: 12,
            price: t.price,
            regions: [es ? "Trancoso · 11 noches" : "Trancoso · 11 nights"],
            note: es ? "Un lugar extraordinario, vivido sin prisas" : "One extraordinary place, experienced slowly",
            img: "/bahia-day-5-trancoso.jpg",
            tagline: es ? "Una luna de miel diseñada para bajar el ritmo" : "A Honeymoon Designed to Slow Down",
            intro: es ? "Algunos destinos invitan a explorar; Trancoso invita a quedarse. Diseñada exclusivamente para parejas, esta luna de miel cambia el movimiento constante por doce días sin prisas entre playas infinitas, jardines tropicales, largas comidas junto al mar y noches bajo las luces del Quadrado. Con UXUA Casa Hotel & Spa como hogar durante toda la estancia, cada día puede desarrollarse de forma natural." : "Some destinations invite you to explore. Trancoso invites you to stay. Designed exclusively for couples, this honeymoon trades constant movement for twelve unhurried days of endless beaches, tropical gardens, long lunches by the sea and evenings beneath the glowing lanterns of the Quadrado. With UXUA Casa Hotel & Spa as your home throughout, each day is free to unfold naturally.",
            dayPlan: HONEYMOON_TRANCOSO_ITIN,
          },
          {
            label: "Fernando de Noronha",
            sub: es ? "12 días" : "12 days",
            days: 12,
            price: t.price,
            regions: [es ? "Fernando de Noronha · 11 noches" : "Fernando de Noronha · 11 nights"],
            note: es ? "Una isla protegida, explorada en profundidad" : "One protected island, explored in depth",
            img: "/noronha.jpg",
            tagline: es ? "Una luna de miel entre el océano y el cielo" : "A Honeymoon Between Ocean and Sky",
            intro: es ? "Algunos destinos invitan a escapar; Fernando de Noronha invita a reconectar. Diseñada exclusivamente para parejas, esta luna de miel de doce días equilibra descubrimiento y calma: bahías cristalinas, senderos volcánicos, vida marina y atardeceres dorados, con una única pousada boutique como hogar. Sin cambios de hotel ni salidas apresuradas, solo tiempo para que la isla se revele poco a poco." : "Some destinations invite you to escape. Fernando de Noronha invites you to reconnect. Designed exclusively for couples, this twelve-day honeymoon balances discovery with stillness: crystalline bays, volcanic trails, marine life and golden sunsets, with one boutique pousada as your home throughout. There are no hotel changes or rushed departures — only time for the island to reveal itself gradually.",
            dayPlan: HONEYMOON_ITIN,
          },
        ],
      };
    }
    return t;
  }

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
        label:   es ? "10 días" : "10 days",
        sub:     es ? "Esencial" : "Signature",
        days:    a.days,
        price:   a.price,
        regions: a.regions,
        note:    es ? "Perfecto para una primera visita" : "Perfect for first-time visitors",
        img:     a.heroImg || d.img,
        intro:   a.intro,
        dayPlan: BAHIA_ITIN,
      },
      {
        label:   es ? "15 días" : "15 days",
        sub:     es ? "Ampliado" : "Extended",
        days:    ext.days,
        price:   ext.price,
        regions: ext.regions,
        note:    es ? "Una exploración más pausada y profunda" : "A slower and deeper exploration",
        img:     ext.heroImg || "/bahia-corumbau.jpg",
        intro:   ext.intro,
        dayPlan: BAHIA_EXT_ITIN,
      },
    ];
  }

  return base;
}

export function generateStaticParams() {
  const tourSlugs = EN.TOURS.map(t => ({ slug: t.slug }));
  // Exclude bahia-extended from static params (merged into bahia page)
  const destSlugs = EN.DESTINATIONS
    .filter(d => d.slug !== "bahia-extended")
    .map(d => ({ slug: d.slug }));
  return [...tourSlugs, ...destSlugs];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = resolveTour(slug, EN, "en");
  return { title: t ? `${t.title} — Brazil Off Script` : "Journey", alternates: { canonical: `/tours/${slug}`, languages: { en: `/tours/${slug}`, "es-ES": `/es/tours/${slug}` } } };
}

export async function TourRoutePage({ params, locale = "en" }) {
  const data = locale === "es" ? ES : EN;
  const { CATEGORIES, FULL_ITIN, RIO_ITIN, BAHIA_ITIN, AMAZON_ITIN, PANTANAL_ITIN, JALAPAO_ITIN, WOMEN_EXPLORE_ITIN, LENCOIS_ITIN, LENCOIS_WOMEN_TREK_ITIN, RIO_WOMEN_ITIN, AMAZON_WOMEN_ITIN, HONEYMOON_ITIN, FOZ_ITIN, NORONHA_ITIN, ALAGOAS_ITIN, buildLightItin } = data;
  const { slug } = await params;
  const tour = resolveTour(slug, data, locale);
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
    tour.slug === "lencois"                ? LENCOIS_ITIN :
    tour.slug === "lencois-women-trek"     ? LENCOIS_WOMEN_TREK_ITIN :
    tour.slug === "rio-for-women"          ? RIO_WOMEN_ITIN :
    tour.slug === "amazon-women-exploration" ? AMAZON_WOMEN_ITIN :
    tour.slug === "honeymoon-brazil"       ? HONEYMOON_ITIN :
    tour.slug === "foz"                    ? FOZ_ITIN :
    tour.slug === "noronha"                ? NORONHA_ITIN :
    tour.slug === "northeast"              ? ALAGOAS_ITIN :
    buildLightItin(tour);

  return (
    <>
      <Container>
        <div className="pt-6 text-[13px] text-muted">
          <Link href={localePath("/", locale)} className="text-leaf underline underline-offset-2">{locale === "es" ? "Inicio" : "Home"}</Link>
          <span className="mx-2 opacity-50">/</span>
          <Link href={localePath("/tours", locale)} className="text-leaf underline underline-offset-2">{locale === "es" ? "Todos los viajes" : "All Journeys"}</Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-ink-soft">{tour.title}</span>
        </div>
      </Container>

      <TourPageContent tour={tour} cat={cat} dayPlanBase={dayPlanBase} locale={locale}/>
    </>
  );
}

export default function TourPage(props) {
  return <TourRoutePage {...props} locale="en" />;
}
