import JourneysList from "@/components/journeys-list";

export const metadata = {
  title: "Nuestros viajes",
  alternates: { canonical: "/es/journeys", languages: { en: "/journeys", "es-ES": "/es/journeys" } },
};

export default function Page() {
  return <JourneysList locale="es" />;
}
