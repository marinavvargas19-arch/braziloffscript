import ContactClient from "@/components/contact-client";

export const metadata = {
  title: "Contacto",
  alternates: { canonical: "/es/contact", languages: { en: "/contact", "es-ES": "/es/contact" } },
};

export default function Page() {
  return <ContactClient locale="es" />;
}
