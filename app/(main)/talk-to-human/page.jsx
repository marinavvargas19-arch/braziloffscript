import ContactClient from "@/components/contact-client";

export const metadata = {
  title: "Talk to a local expert — Brazil Off Script",
  alternates: {
    canonical: "/talk-to-human",
    languages: { en: "/talk-to-human", "es-ES": "/es/talk-to-human" },
  },
};

export default function Page() {
  return <ContactClient leadOrigin="talk-to-a-human" humanFlow />;
}
