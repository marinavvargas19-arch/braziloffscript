import { languageAlternates } from "@/lib/i18n";
import QuizDiscoveryClient from "@/components/quiz-discovery-client";

export const metadata = {
  title: "¿Qué Brasil te está llamando?",
  alternates: { canonical: "/es/quiz-discovery", languages: languageAlternates("/quiz-discovery") },
};

export default function Page() {
  return <QuizDiscoveryClient locale="es" />;
}
