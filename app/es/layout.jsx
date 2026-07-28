import { SpanishChrome } from "@/components/layout/spanish-chrome";

export const metadata = {
  title: {
    default: "Brazil Off Script — Viajes a medida por Brasil",
    template: "%s · Brazil Off Script",
  },
  description: "Viajes a medida por Brasil, diseñados por expertos locales.",
  other: { "content-language": "es-ES" },
};

export default function SpanishLayout({ children }) {
  return <div lang="es-ES"><SpanishChrome>{children}</SpanishChrome></div>;
}
