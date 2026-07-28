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
    title: tour ? `${tour.title} — Brazil Off Script` : "Viaje",
    alternates: {
      canonical: `/es/tours/${slug}`,
      languages: { en: `/tours/${slug}`, "es-ES": `/es/tours/${slug}` },
    },
  };
}

export default function Page(props) {
  return <TourRoutePage {...props} locale="es" />;
}
