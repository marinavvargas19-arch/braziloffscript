import { languageAlternates } from "@/lib/i18n";
import { notFound } from "next/navigation";
import JourneysList from "@/components/journeys-list";
import { CATEGORIES } from "@/lib/data";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = CATEGORIES.find((x) => x.slug === slug);
  return { title: c ? c.name : "Journeys", alternates: { canonical: `/journeys/${slug}`, languages: languageAlternates(`/journeys/${slug}`) } };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const c = CATEGORIES.find((x) => x.slug === slug);
  if (!c) return notFound();
  return <JourneysList initialCategory={slug} />;
}
