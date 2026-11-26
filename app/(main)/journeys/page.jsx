import { languageAlternates } from "@/lib/i18n";
import JourneysList from "@/components/journeys-list";

export const metadata = { title: "Our Journeys", alternates: { canonical: "/journeys", languages: languageAlternates("/journeys") } };

export default function Page() {
  return <JourneysList />;
}
