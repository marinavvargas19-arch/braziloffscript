import ToursList from "@/components/tours-list";

export const metadata = {
  title: "Todos los viajes — Brazil Off Script",
  alternates: { canonical: "/es/tours", languages: { en: "/tours", "es-ES": "/es/tours" } },
};

export default function Page() {
  return <ToursList locale="es" />;
}
