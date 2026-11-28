import { languageAlternates } from "@/lib/i18n";
import ContactClient from "@/components/contact-client";

export const metadata = { title: "Contact", alternates: { canonical: "/contact", languages: languageAlternates("/contact") } };

export default function Page() {
  return <ContactClient />;
}
