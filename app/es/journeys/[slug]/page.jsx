import { notFound } from "next/navigation";
import JourneysList from "@/components/journeys-list";
import { CATEGORIES } from "@/lib/data-es";

export function generateStaticParams() {
  return CATEGORIES.map(category => ({ slug: category.slug }));
}

export function generateMetadata({ params }) {
  const category = CATEGORIES.find(item => item.slug === params.slug);
  return {
    title: category?.name || "Viajes",
    alternates: {
      canonical: `/es/journeys/${params.slug}`,
      languages: { en: `/journeys/${params.slug}`, "es-ES": `/es/journeys/${params.slug}` },
    },
  };
}

export default function Page({ params }) {
  if (!CATEGORIES.some(category => category.slug === params.slug)) notFound();
  return <JourneysList initialCategory={params.slug} locale="es" />;
}
