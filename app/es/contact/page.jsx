import { languageAlternates } from "@/lib/i18n";
import ContactClient from "@/components/contact-client";

export const metadata = {
  title: "Contacto",
  alternates: { canonical: "/es/contact", languages: languageAlternates("/contact") },
};

export default function Page() {
  return <ContactClient locale="es" />;
}
