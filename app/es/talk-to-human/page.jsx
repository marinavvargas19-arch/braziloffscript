import ContactClient from "@/components/contact-client";

export const metadata = {
  title: "Habla con una experta local — Brazil Off Script",
  alternates: {
    canonical: "/es/talk-to-human",
    languages: { en: "/talk-to-human", "es-ES": "/es/talk-to-human" },
  },
};

export default function Page() {
  return <ContactClient locale="es" leadOrigin="talk-to-a-human" humanFlow />;
}
