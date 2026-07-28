import { notFound } from "next/navigation";
import JourneysList from "@/components/journeys-list";
import { CATEGORIES } from "@/lib/data";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = CATEGORIES.find((x) => x.slug === params.slug);
  return { title: c ? c.name : "Journeys", alternates: { canonical: `/journeys/${params.slug}`, languages: { en: `/journeys/${params.slug}`, "es-ES": `/es/journeys/${params.slug}` } } };
}

export default function Page({ params }) {
  const c = CATEGORIES.find((x) => x.slug === params.slug);
  if (!c) return notFound();
  return <JourneysList initialCategory={params.slug} />;
}
