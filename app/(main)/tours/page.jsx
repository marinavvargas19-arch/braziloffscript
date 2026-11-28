import { languageAlternates } from "@/lib/i18n";
import ToursList from "@/components/tours-list";

export const metadata = { title: "All Journeys — Brazil Off Script", alternates: { canonical: "/tours", languages: languageAlternates("/tours") } };

export default function Page() {
  return <ToursList />;
}
