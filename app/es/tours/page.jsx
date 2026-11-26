import { languageAlternates } from "@/lib/i18n";
import ToursList from "@/components/tours-list";

export const metadata = {
  title: "Todos los viajes — Brazil Off Script",
  alternates: { canonical: "/es/tours", languages: languageAlternates("/tours") },
};

export default function Page() {
  return <ToursList locale="es" />;
}
