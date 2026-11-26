import { languageAlternates } from "@/lib/i18n";
import JourneysList from "@/components/journeys-list";

export const metadata = {
  title: "Nuestros viajes",
  alternates: { canonical: "/es/journeys", languages: languageAlternates("/journeys") },
};

export default function Page() {
  return <JourneysList locale="es" />;
}
