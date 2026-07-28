import ContactClient from "@/components/contact-client";

export const metadata = { title: "Contact", alternates: { canonical: "/contact", languages: { en: "/contact", "es-ES": "/es/contact" } } };

export default function Page() {
  return <ContactClient />;
}
