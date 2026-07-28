import ToursList from "@/components/tours-list";

export const metadata = { title: "All Journeys — Brazil Off Script", alternates: { canonical: "/tours", languages: { en: "/tours", "es-ES": "/es/tours" } } };

export default function Page() {
  return <ToursList />;
}
