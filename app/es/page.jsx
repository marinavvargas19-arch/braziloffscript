import HomePage from "@/app/(main)/page";

export default function SpanishHomePage() {
  return <HomePage locale="es" />;
}

export const metadata = {
  title: "Viajes a medida por Brasil",
  description: "Descubre Brasil con viajes privados y a medida, diseñados por expertos locales.",
  alternates: {
    canonical: "/es",
    languages: { en: "/", "es-ES": "/es" },
  },
};
