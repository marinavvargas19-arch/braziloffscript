import { languageAlternates } from "@/lib/i18n";
import QuizClient from "@/components/quiz-client";

export const metadata = {
  title: "Diseña tu viaje",
  alternates: { canonical: "/es/quiz", languages: languageAlternates("/quiz") },
};

export default function Page() {
  return <QuizClient locale="es" />;
}
