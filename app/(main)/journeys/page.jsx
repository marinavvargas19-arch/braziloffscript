import JourneysList from "@/components/journeys-list";

export const metadata = { title: "Our Journeys", alternates: { canonical: "/journeys", languages: { en: "/journeys", "es-ES": "/es/journeys" } } };

export default function Page() {
  return <JourneysList />;
}
