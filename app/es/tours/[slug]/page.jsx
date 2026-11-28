import { languageAlternates } from "@/lib/i18n";
import { TourRoutePage, resolveTour } from "@/app/(main)/tours/[slug]/page";
import * as ES from "@/lib/data-es";

export function generateStaticParams() {
  const tourSlugs = ES.TOURS.map(tour => ({ slug: tour.slug }));
  const destinationSlugs = ES.DESTINATIONS.filter(destination => destination.slug !== "bahia-extended").map(destination => ({ slug: destination.slug }));
  return [...tourSlugs, ...destinationSlugs];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = resolveTour(slug, ES, "es");
  return {
    title: tour ? tour.title : "Viaje",
    description: tour?.blurb,
    alternates: {
      canonical: `/es/tours/${slug}`,
      languages: languageAlternates(`/tours/${slug}`),
    },
  };
}

export default function Page(props) {
  return <TourRoutePage {...props} locale="es" />;
}
